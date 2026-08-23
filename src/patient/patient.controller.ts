import { Body, Controller, Delete, Get, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientProfileDto } from './Types/DTO/createPatientProfile.dto';
import { UpdatePatientProfileDto } from './Types/DTO/UpdatePatientProfile.dto';
import { JwtAuthGuard } from 'src/auth/Guards/jwt.auth.guard';
import { RolesGuard } from 'src/auth/Guards/role.guard';
import { Roles } from 'src/auth/Decorators/roles.decorator';

@Controller('patient')
export class PatientController {
  constructor(private patientService: PatientService) {}

  @Post('profile')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('PATIENT')
  createProfile(@Body() dto: CreatePatientProfileDto, @Req() req) {
    return this.patientService.createProfile(dto, req.user.id);
  }

  @Get('my-profile')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('PATIENT')
  getMyProfile(@Req() req) {
    return this.patientService.getMyProfile(req.user.id);
  }

  @Patch('edit-profile')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('PATIENT')
  updateProfile(@Body() dto: UpdatePatientProfileDto, @Req() req) {
    return this.patientService.updateProfile(dto, req.user.id);
  }

  @Delete('remove-profile')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('PATIENT')
  removeProfile(@Req() req) {
    return this.patientService.removeProfile(req.user.id);
  }
}