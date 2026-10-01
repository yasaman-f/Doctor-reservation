import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AvailabilityService } from './availability.service';
import { CreateAvailabilityDto } from './Types/DTO/createAvailability.dto';
import { UpdateAvailabilityDto } from './Types/DTO/updateAvailability.dto';
import { JwtAuthGuard } from 'src/auth/Guards/jwt.auth.guard';
import { RolesGuard } from 'src/auth/Guards/role.guard';
import { Roles } from 'src/auth/Decorators/roles.decorator';

@Controller('availability')
@ApiTags('Availability')
@ApiBearerAuth('JWT-auth')
export class AvailabilityController {
  constructor(private availabilityService: AvailabilityService) { }

  @Get('doctor/:doctorId')
  @ApiOperation({
    summary: 'List a doctor’s open availability slots',
    description: 'Public endpoint. Returns only unbooked slots for the given doctor.',
  })
  @ApiParam({ name: 'doctorId', description: 'Doctor profile ID.', example: 'clxdoctorprofile1' })
  @ApiOkResponse({
    description: 'Open availability slots returned successfully.',
    schema: {
      example: [
        {
          id: 'clxavailability1',
          doctorId: 'clxdoctorprofile1',
          startTime: '2026-10-01T09:00:00.000Z',
          endTime: '2026-10-01T09:30:00.000Z',
          isBooked: false,
          createdAt: '2026-09-23T00:00:00.000Z',
          updatedAt: '2026-09-23T00:00:00.000Z',
        },
      ],
    },
  })
  findByDoctorId(@Param('doctorId') doctorId: string) {
    return this.availabilityService.findByDoctorId(doctorId);
  }

  @Post('add')
  @ApiOperation({
    summary: 'Create an availability slot',
    description: 'Requires a JWT for a user with the DOCTOR role.',
  })
  @ApiCreatedResponse({
    description: 'Availability slot created successfully.',
    schema: {
      example: {
        id: 'clxavailability1',
        doctorId: 'clxdoctorprofile1',
        startTime: '2026-10-01T09:00:00.000Z',
        endTime: '2026-10-01T09:30:00.000Z',
        isBooked: false,
        createdAt: '2026-09-23T00:00:00.000Z',
        updatedAt: '2026-09-23T00:00:00.000Z',
      },
    },
  })
  @ApiBadRequestResponse({ description: 'Request validation failed, the time range is invalid, or the start time is in the past.' })
  @ApiUnauthorizedResponse({ description: 'A valid JWT access token is required.' })
  @ApiForbiddenResponse({ description: 'The authenticated user does not have the DOCTOR role.' })
  @ApiNotFoundResponse({ description: 'The authenticated doctor has no doctor profile.' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('DOCTOR')
  create(@Body() dto: CreateAvailabilityDto, @Req() req) {
    return this.availabilityService.createAvailability(dto, req.user.id);
  }

  @Get('my-availability')
  @ApiOperation({
    summary: 'List the authenticated doctor’s availability slots',
    description: 'Requires a JWT for a user with the DOCTOR role.',
  })
  @ApiOkResponse({
    description: 'Availability slots returned successfully.',
    schema: {
      example: [
        {
          id: 'clxavailability1',
          doctorId: 'clxdoctorprofile1',
          startTime: '2026-10-01T09:00:00.000Z',
          endTime: '2026-10-01T09:30:00.000Z',
          isBooked: false,
          createdAt: '2026-09-23T00:00:00.000Z',
          updatedAt: '2026-09-23T00:00:00.000Z',
        },
      ],
    },
  })
  @ApiUnauthorizedResponse({ description: 'A valid JWT access token is required.' })
  @ApiForbiddenResponse({ description: 'The authenticated user does not have the DOCTOR role.' })
  @ApiNotFoundResponse({ description: 'The authenticated doctor has no doctor profile.' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('DOCTOR')
  getMyAvailability(@Req() req) {
    return this.availabilityService.getMyAvailability(req.user.id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update an availability slot',
    description: 'Requires a JWT for the DOCTOR role and ownership of the slot.',
  })
  @ApiParam({ name: 'id', description: 'Availability slot ID.', example: 'clxavailability1' })
  @ApiOkResponse({
    description: 'Availability slot updated successfully.',
    schema: {
      example: {
        id: 'clxavailability1',
        doctorId: 'clxdoctorprofile1',
        startTime: '2026-10-01T10:00:00.000Z',
        endTime: '2026-10-01T10:30:00.000Z',
        isBooked: false,
        createdAt: '2026-09-23T00:00:00.000Z',
        updatedAt: '2026-09-23T00:00:00.000Z',
      },
    },
  })
  @ApiBadRequestResponse({ description: 'Request validation failed, the time range is invalid, or the slot is already booked.' })
  @ApiUnauthorizedResponse({ description: 'A valid JWT access token is required.' })
  @ApiForbiddenResponse({ description: 'The authenticated doctor does not own the slot.' })
  @ApiNotFoundResponse({ description: 'The doctor profile or availability slot was not found.' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('DOCTOR')
  update(@Param('id') id: string, @Body() dto: UpdateAvailabilityDto, @Req() req) {
    return this.availabilityService.updateAvailability(id, dto, req.user.id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Remove an availability slot',
    description: 'Requires a JWT for the DOCTOR role and ownership of the slot.',
  })
  @ApiParam({ name: 'id', description: 'Availability slot ID.', example: 'clxavailability1' })
  @ApiOkResponse({
    description: 'Availability slot deleted successfully.',
    schema: { example: { message: 'Availability slot deleted successfully' } },
  })
  @ApiBadRequestResponse({ description: 'A booked availability slot cannot be deleted.' })
  @ApiUnauthorizedResponse({ description: 'A valid JWT access token is required.' })
  @ApiForbiddenResponse({ description: 'The authenticated doctor does not own the slot.' })
  @ApiNotFoundResponse({ description: 'The doctor profile or availability slot was not found.' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('DOCTOR')
  remove(@Param('id') id: string, @Req() req) {
    return this.availabilityService.removeAvailability(id, req.user.id);
  }
}
