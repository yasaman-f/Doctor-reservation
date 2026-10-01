import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDoctorProfileDto } from './Types/DTO/createDoctorProfile.dto';
import { UpdateDoctorProfileDto } from './Types/DTO/updateDoctorProfile.dto';


@Injectable()
export class DoctorService {
    constructor(
        private prisma: PrismaService,
    ) { }


    async createProfile(userDto: CreateDoctorProfileDto, userId: string) {

        const existingProfile = await this.prisma.doctorProfile.findUnique({ where: { userId } });

        if (existingProfile) {
            throw new ConflictException('Doctor profile already exists for this user');
        }

        const existDoc = await this.prisma.doctorProfile.findUnique({ where: { licenseNo: userDto.licenseNo } })

        if (existDoc) {
            throw new ConflictException('This license number is already registered');
        }

        const newDoc = await this.prisma.doctorProfile.create({ data: { ...userDto, userId } })
        return newDoc
    }

    async getMyProfile(userId: string) {
        const profile = await this.prisma.doctorProfile.findUnique({ where: { userId } });

        if (!profile) {
            throw new NotFoundException('Doctor profile not found');
        }

        return profile;
    }

    async updateProfile(userDto: UpdateDoctorProfileDto, userId: string) {
        const profile = await this.prisma.doctorProfile.findUnique({ where: { userId } });
        if (!profile) {
            throw new NotFoundException('Doctor profile not found');
        }

        if (userDto.licenseNo && userDto.licenseNo !== profile.licenseNo) {
            const existDoc = await this.prisma.doctorProfile.findUnique({ where: { licenseNo: userDto.licenseNo } });
            if (existDoc) {
                throw new ConflictException('This license number is already registered');
            }
        }

        const updatedProfile = await this.prisma.doctorProfile.update({ where: { userId }, data: { ...userDto } });
        return updatedProfile;
    }

    async removeProfile(userId: string) {
        const profile = await this.prisma.doctorProfile.findUnique({ where: { userId } });
        if (!profile) {
            throw new NotFoundException('Doctor profile not found');
        }
        await this.prisma.doctorProfile.delete({ where: { userId } });
        return { message: 'Doctor profile deleted successfully' };
    }

    async findAll() {
        return this.prisma.doctorProfile.findMany({
            select: {
                id: true,
                specialty: true,
                bio: true,
                user: {
                    select: { firstName: true, lastName: true },
                },
            },
        });
    }

}
