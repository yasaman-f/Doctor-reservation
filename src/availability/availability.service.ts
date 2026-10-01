import { BadRequestException, ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAvailabilityDto } from './Types/DTO/createAvailability.dto';
import { UpdateAvailabilityDto } from './Types/DTO/updateAvailability.dto';



@Injectable()
export class AvailabilityService {
    constructor(
        private prisma: PrismaService,
    ) { }

    async findByDoctorId(doctorId: string) {
        return this.prisma.availabilitySlot.findMany({
            where: { doctorId, isBooked: false },
        });
    }

    async createAvailability(userDto: CreateAvailabilityDto, doctorId: string) {

        const doctorProfile = await this.prisma.doctorProfile.findUnique({ where: { userId: doctorId } });

        if (!doctorProfile) {
            throw new NotFoundException('Doctor profile not found');
        }
        const start = new Date(userDto.startTime);
        const end = new Date(userDto.endTime);
        const now = new Date();

        if (end <= start) {
            throw new BadRequestException('End time must be after start time');
        }

        if (start < now) {
            throw new BadRequestException('Start time cannot be in the past');
        }

        const slot = await this.prisma.availabilitySlot.create({
            data: {
                doctorId: doctorProfile.id,
                startTime: start,
                endTime: end,
            },
        });

        return slot;
    }

    async getMyAvailability(userId: string) {
        const doctorProfile = await this.prisma.doctorProfile.findUnique({ where: { userId } });

        if (!doctorProfile) {
            throw new NotFoundException('Doctor profile not found');
        }

        const availability = await this.prisma.availabilitySlot.findMany({
            where: { doctorId: doctorProfile.id },
        });

        return availability;
    }

    async updateAvailability(slotId: string, userDto: UpdateAvailabilityDto, userId: string) {
        const doctorProfile = await this.prisma.doctorProfile.findUnique({ where: { userId } });

        if (!doctorProfile) {
            throw new NotFoundException('Doctor profile not found');
        }

        const slot = await this.prisma.availabilitySlot.findUnique({ where: { id: slotId } });

        if (!slot) {
            throw new NotFoundException('Availability slot not found');
        }

        if (slot.doctorId !== doctorProfile.id) {
            throw new ForbiddenException('You do not own this slot');
        }

        if (slot.isBooked) {
            throw new BadRequestException('Cannot edit a slot that is already booked');
        }

        const start = userDto.startTime ? new Date(userDto.startTime) : slot.startTime;
        const end = userDto.endTime ? new Date(userDto.endTime) : slot.endTime;

        if (end <= start) {
            throw new BadRequestException('End time must be after start time');
        }

        return this.prisma.availabilitySlot.update({
            where: { id: slotId },
            data: { startTime: start, endTime: end },
        });
    }

    async removeAvailability(slotId: string, userId: string) {
        const doctorProfile = await this.prisma.doctorProfile.findUnique({ where: { userId } });

        if (!doctorProfile) {
            throw new NotFoundException('Doctor profile not found');
        }

        const slot = await this.prisma.availabilitySlot.findUnique({ where: { id: slotId } });

        if (!slot) {
            throw new NotFoundException('Availability slot not found');
        }

        if (slot.doctorId !== doctorProfile.id) {
            throw new ForbiddenException('You do not own this slot');
        }

        if (slot.isBooked) {
            throw new BadRequestException('Cannot delete a slot that is already booked');
        }

        await this.prisma.availabilitySlot.delete({ where: { id: slotId } });

        return { message: 'Availability slot deleted successfully' };
    }

}
