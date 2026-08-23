import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { AvailabilityService } from './availability.service';
import { CreateAvailabilityDto } from './Types/DTO/createAvailability.dto';
import { UpdateAvailabilityDto } from './Types/DTO/updateAvailability.dto';
import { JwtAuthGuard } from 'src/auth/Guards/jwt.auth.guard';
import { RolesGuard } from 'src/auth/Guards/role.guard';
import { Roles } from 'src/auth/Decorators/roles.decorator';

@Controller('availability')
export class AvailabilityController {
  constructor(private availabilityService: AvailabilityService) {}

  @Post('add')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('DOCTOR')
  create(@Body() dto: CreateAvailabilityDto, @Req() req) {
    return this.availabilityService.createAvailability(dto, req.user.id);
  }

  @Get('my-availability')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('DOCTOR')
  getMyAvailability(@Req() req) {
    return this.availabilityService.getMyAvailability(req.user.id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('DOCTOR')
  update(@Param('id') id: string, @Body() dto: UpdateAvailabilityDto, @Req() req) {
    return this.availabilityService.updateAvailability(id, dto, req.user.id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('DOCTOR')
  remove(@Param('id') id: string, @Req() req) {
    return this.availabilityService.removeAvailability(id, req.user.id);
  }
}