import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePatientProfileDto } from './Types/DTO/createPatientProfile.dto';
import { UpdatePatientProfileDto } from './Types/DTO/UpdatePatientProfile.dto';



@Injectable()
export class PatientService {
    constructor(
        private prisma: PrismaService,
    ) { }


    async createProfile(userDto: CreatePatientProfileDto, userId: string) {

        const existingProfile = await this.prisma.patientProfile.findUnique({ where: { userId } });

        if (existingProfile) {
            throw new ConflictException('Patient profile already exists for this user');
        }

        const existingNationalId = await this.prisma.patientProfile.findUnique({ where: { nationalId: userDto.nationalId } });

        if (existingNationalId) {
            throw new ConflictException('This national ID is already registered');
        }

        const newPat = await this.prisma.patientProfile.create({data: {...userDto, userId}});
        return newPat
    }

    async getMyProfile(userId: string) {
        const profile = await this.prisma.patientProfile.findUnique({ where: { userId } });

        if (!profile) {
            throw new NotFoundException('Patient profile not found');
        }

        return profile;
    }

    async updateProfile(userDto: UpdatePatientProfileDto, userId: string) {
        const profile = await this.prisma.patientProfile.findUnique({ where: { userId } });
        if (!profile) {
            throw new NotFoundException('Patient profile not found');
        }

        if (userDto.nationalId && userDto.nationalId !== profile.nationalId) {
            const existPat = await this.prisma.patientProfile.findUnique({ where: { nationalId: userDto.nationalId } });
            if (existPat) {
                throw new ConflictException('This national ID is already registered');
            }
        }

        const updatedProfile = await this.prisma.patientProfile.update({ where: { userId }, data: { ...userDto } });
        return updatedProfile;
    }

    async removeProfile(userId: string) {
        const profile = await this.prisma.patientProfile.findUnique({ where: { userId } });
        if (!profile) {
            throw new NotFoundException('Patient profile not found');
        }
        await this.prisma.patientProfile.delete({ where: { userId } });
        return { message: 'Patient profile deleted successfully' };
    }

}
