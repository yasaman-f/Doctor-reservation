import { Body, Controller, Delete, Get, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { JwtAuthGuard } from 'src/auth/Guards/jwt.auth.guard';
import { RolesGuard } from 'src/auth/Guards/role.guard';
import { Roles } from 'src/auth/Decorators/roles.decorator';
import { CreateDoctorProfileDto } from './Types/DTO/createDoctorProfile.dto';
import { UpdateDoctorProfileDto } from './Types/DTO/updateDoctorProfile.dto';


@Controller('doctor')
export class DoctorController {
  constructor(private doctorService: DoctorService) {}

  @Post('profile')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('DOCTOR')
  createProfile(@Body() dto: CreateDoctorProfileDto, @Req() req) {
    return this.doctorService.createProfile(dto, req.user.id);
  }

    @Get('my-profile')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('DOCTOR')
    getMyProfile(@Req() req) {
      return this.doctorService.getMyProfile(req.user.id);
    }

  @Patch('edit-profile')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('DOCTOR')
  updateProfile(@Body() dto: UpdateDoctorProfileDto, @Req() req) {
    return this.doctorService.updateProfile(dto, req.user.id);
  }

  @Delete('remove-profile')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('DOCTOR')
  removeProfile(@Req() req) {
    return this.doctorService.removeProfile(req.user.id);
  }
}
