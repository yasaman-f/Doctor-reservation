import { Body, Controller, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { JwtAuthGuard } from 'src/auth/Guards/jwt.auth.guard';
import { RolesGuard } from 'src/auth/Guards/role.guard';
import { Roles } from 'src/auth/Decorators/roles.decorator';
import { CreateAppointmentDto } from './Types/DTO/CreateAppointment.dto';
import { UpdateAppointmentStatusDto } from './Types/DTO/UpdateAppointmentStatus.dto';

@Controller('appointment')
export class AppointmentController {
    constructor(private appointmentService: AppointmentService) { }

    @Post('add')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('PATIENT')
    create(@Body() dto: CreateAppointmentDto, @Req() req) {
        return this.appointmentService.createAppointment(dto, req.user.id);
    }

    @Get('my-appointments')
    @UseGuards(JwtAuthGuard)
    getMyAppointments(@Req() req) {
        return this.appointmentService.getMyAppointments(req.user.id, req.user.role);
    }

    @Patch(':id/status')
    @UseGuards(JwtAuthGuard)
    updateStatus(@Param('id') id: string, @Body() dto: UpdateAppointmentStatusDto, @Req() req) {
        return this.appointmentService.updateStatus(id, dto.status, req.user.id, req.user.role);
    }
}