import { Body, Controller, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AppointmentService } from './appointment.service';
import { JwtAuthGuard } from 'src/auth/Guards/jwt.auth.guard';
import { RolesGuard } from 'src/auth/Guards/role.guard';
import { Roles } from 'src/auth/Decorators/roles.decorator';
import { CreateAppointmentDto } from './Types/DTO/CreateAppointment.dto';
import { UpdateAppointmentStatusDto } from './Types/DTO/UpdateAppointmentStatus.dto';

@Controller('appointment')
@ApiTags('Appointments')
@ApiBearerAuth('JWT-auth')
export class AppointmentController {
    constructor(private appointmentService: AppointmentService) { }

    @Post('add')
    @ApiOperation({
        summary: 'Create an appointment',
        description: 'Requires a JWT for a user with the PATIENT role.',
    })
    @ApiCreatedResponse({
        description: 'Appointment created successfully.',
        schema: {
            example: {
                id: 'clxappointment1',
                patientProfileId: 'clxpatientprofile1',
                doctorId: 'clxdoctorprofile1',
                availabilitySlotId: 'clxavailability1',
                status: 'PENDING',
                createdAt: '2026-09-23T00:00:00.000Z',
                updatedAt: '2026-09-23T00:00:00.000Z',
            },
        },
    })
    @ApiBadRequestResponse({ description: 'Request validation failed.' })
    @ApiUnauthorizedResponse({ description: 'A valid JWT access token is required.' })
    @ApiForbiddenResponse({ description: 'The authenticated user does not have the PATIENT role.' })
    @ApiNotFoundResponse({ description: 'The patient profile or availability slot was not found.' })
    @ApiConflictResponse({ description: 'The availability slot is already booked or is being booked by another request.' })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('PATIENT')
    create(@Body() dto: CreateAppointmentDto, @Req() req) {
        return this.appointmentService.createAppointment(dto, req.user.id);
    }

    @Get('my-appointments')
    @ApiOperation({
        summary: 'List the authenticated user’s appointments',
        description: 'Requires a JWT. Available to users with the PATIENT or DOCTOR role.',
    })
    @ApiOkResponse({
        description: 'Appointments returned successfully.',
        schema: {
            example: [
                {
                    id: 'clxappointment1',
                    patientProfileId: 'clxpatientprofile1',
                    doctorId: 'clxdoctorprofile1',
                    availabilitySlotId: 'clxavailability1',
                    status: 'PENDING',
                    createdAt: '2026-09-23T00:00:00.000Z',
                    updatedAt: '2026-09-23T00:00:00.000Z',
                },
            ],
        },
    })
    @ApiUnauthorizedResponse({ description: 'A valid JWT access token is required.' })
    @ApiForbiddenResponse({ description: 'Only PATIENT and DOCTOR users can access appointments.' })
    @ApiNotFoundResponse({ description: 'The authenticated user has no required profile.' })
    @UseGuards(JwtAuthGuard)
    getMyAppointments(@Req() req) {
        return this.appointmentService.getMyAppointments(req.user.id, req.user.role);
    }

    @Patch(':id/status')
    @ApiOperation({
        summary: 'Update an appointment status',
        description: 'Requires a JWT. Confirming or completing requires the appointment owner with the DOCTOR role; canceling requires the patient or doctor owner.',
    })
    @ApiParam({ name: 'id', description: 'Appointment ID.', example: 'clxappointment1' })
    @ApiOkResponse({
        description: 'Appointment status updated successfully.',
        schema: {
            example: {
                id: 'clxappointment1',
                patientProfileId: 'clxpatientprofile1',
                doctorId: 'clxdoctorprofile1',
                availabilitySlotId: 'clxavailability1',
                status: 'CONFIRMED',
                createdAt: '2026-09-23T00:00:00.000Z',
                updatedAt: '2026-09-23T00:00:00.000Z',
            },
        },
    })
    @ApiBadRequestResponse({ description: 'Request validation failed, or the appointment cannot be completed in its current state or before its end time.' })
    @ApiUnauthorizedResponse({ description: 'A valid JWT access token is required.' })
    @ApiForbiddenResponse({ description: 'The authenticated user does not have the required role or ownership for this status change.' })
    @ApiNotFoundResponse({ description: 'The appointment was not found.' })
    @UseGuards(JwtAuthGuard)
    updateStatus(@Param('id') id: string, @Body() dto: UpdateAppointmentStatusDto, @Req() req) {
        return this.appointmentService.updateStatus(id, dto.status, req.user.id, req.user.role);
    }
}
