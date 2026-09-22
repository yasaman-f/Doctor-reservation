import { BadRequestException, ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAppointmentDto } from './Types/DTO/CreateAppointment.dto';
import { RedisService } from 'src/redis/redis.service';
import { Status } from 'src/prisma/generated/prisma';



@Injectable()
export class AppointmentService {
    constructor(
        private prisma: PrismaService,
        private redisService: RedisService,

    ) { }

    async createAppointment(dto: CreateAppointmentDto, userId: string) {
        const lockKey = `lock:slot:${dto.availabilitySlotId}`;
        const acquired = await this.redisService.set(lockKey, userId, 'EX', 15, 'NX');

        if (!acquired) {
            throw new ConflictException('This slot is currently being booked by someone else, try again');
        }

        try {
            const patientProfile = await this.prisma.patientProfile.findUnique({ where: { userId } });

            if (!patientProfile) {
                throw new NotFoundException('Patient profile not found');
            }

            const slot = await this.prisma.availabilitySlot.findUnique({ where: { id: dto.availabilitySlotId } });

            if (!slot) {
                throw new NotFoundException('Availability slot not found');
            }

            if (slot.isBooked) {
                throw new ConflictException('This slot is already booked');
            }

            const appointment = await this.prisma.appointment.create({
                data: {
                    patientProfileId: patientProfile.id,
                    doctorId: slot.doctorId,
                    availabilitySlotId: slot.id,
                    status: 'PENDING',
                },
            });

            await this.prisma.availabilitySlot.update({
                where: { id: slot.id },
                data: { isBooked: true },
            });

            return appointment;
        } finally {
            await this.redisService.del(lockKey);
        }
    }

    async getMyAppointments(userId: string, role: string) {
        if (role === 'PATIENT') {
            const patientProfile = await this.prisma.patientProfile.findUnique({ where: { userId } });
            if (!patientProfile) {
                throw new NotFoundException('Patient profile not found');
            }
            return this.prisma.appointment.findMany({ where: { patientProfileId: patientProfile.id } });
        }

        if (role === 'DOCTOR') {
            const doctorProfile = await this.prisma.doctorProfile.findUnique({ where: { userId } });
            if (!doctorProfile) {
                throw new NotFoundException('Doctor profile not found');
            }
            return this.prisma.appointment.findMany({ where: { doctorId: doctorProfile.id } });
        }

        throw new ForbiddenException('Invalid role for this action');
    }

    async updateStatus(appointmentId: string, newStatus: Status, userId: string, role: string) {
        const appointment = await this.prisma.appointment.findUnique({ where: { id: appointmentId } });

        if (!appointment) {
            throw new NotFoundException('Appointment not found');
        }

        if (newStatus === 'CONFIRMED') {
            if (role !== 'DOCTOR') {
                throw new ForbiddenException('Only doctors can confirm appointments');
            }
            const doctorProfile = await this.prisma.doctorProfile.findUnique({ where: { userId } });
            if (!doctorProfile || appointment.doctorId !== doctorProfile.id) {
                throw new ForbiddenException('You do not own this appointment');
            }
        }

        if (newStatus === 'CANCELED') {
            const patientProfile = await this.prisma.patientProfile.findUnique({ where: { userId } });
            const doctorProfile = await this.prisma.doctorProfile.findUnique({ where: { userId } });

            const isOwner =
                (patientProfile && appointment.patientProfileId === patientProfile.id) ||
                (doctorProfile && appointment.doctorId === doctorProfile.id);

            if (!isOwner) {
                throw new ForbiddenException('You do not own this appointment');
            }

            await this.prisma.availabilitySlot.update({
                where: { id: appointment.availabilitySlotId },
                data: { isBooked: false },
            });
        }

        if (newStatus === 'COMPLETED') {
            if (role !== 'DOCTOR') {
                throw new ForbiddenException('Only doctors can mark appointments as completed');
            }
            const doctorProfile = await this.prisma.doctorProfile.findUnique({ where: { userId } });
            if (!doctorProfile || appointment.doctorId !== doctorProfile.id) {
                throw new ForbiddenException('You do not own this appointment');
            }
            if (appointment.status !== 'CONFIRMED') {
                throw new BadRequestException('Only confirmed appointments can be marked as completed');
            }

            const slot = await this.prisma.availabilitySlot.findUnique({ where: { id: appointment.availabilitySlotId } });
            if (slot && slot.endTime > new Date()) {
                throw new BadRequestException('Cannot mark appointment as completed before its scheduled time has passed');
            }
        }

        return this.prisma.appointment.update({
            where: { id: appointmentId },
            data: { status: newStatus },
        });
    }
}
