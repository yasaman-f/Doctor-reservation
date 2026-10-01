import { Body, Controller, Delete, Get, Patch, Post, Req, UseGuards } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { DoctorService } from './doctor.service';
import { JwtAuthGuard } from 'src/auth/Guards/jwt.auth.guard';
import { RolesGuard } from 'src/auth/Guards/role.guard';
import { Roles } from 'src/auth/Decorators/roles.decorator';
import { CreateDoctorProfileDto } from './Types/DTO/createDoctorProfile.dto';
import { UpdateDoctorProfileDto } from './Types/DTO/updateDoctorProfile.dto';


@Controller('doctor')
@ApiTags('Doctors')
@ApiBearerAuth('JWT-auth')
export class DoctorController {
  constructor(private doctorService: DoctorService) { }

  @Get()
  @ApiOperation({
    summary: 'List all doctors',
    description: 'Public endpoint. No authentication required.',
  })
  @ApiOkResponse({
    description: 'List of doctors returned successfully.',
    schema: {
      example: [
        {
          id: 'clxdoctorprofile1',
          specialty: 'Cardiology',
          bio: 'Board-certified cardiologist.',
          user: { firstName: 'Sara', lastName: 'Ahmadi' },
        },
      ],
    },
  })
  findAll() {
    return this.doctorService.findAll();
  }

  @Post('profile')
  @ApiOperation({
    summary: 'Create the authenticated doctor profile',
    description: 'Requires a JWT for a user with the DOCTOR role.',
  })
  @ApiCreatedResponse({
    description: 'Doctor profile created successfully.',
    schema: {
      example: {
        id: 'clxdoctorprofile1',
        userId: 'clxuser1',
        specialty: 'Cardiology',
        licenseNo: 'MED-12345',
        bio: 'Board-certified cardiologist.',
      },
    },
  })
  @ApiBadRequestResponse({ description: 'Request validation failed.' })
  @ApiUnauthorizedResponse({ description: 'A valid JWT access token is required.' })
  @ApiForbiddenResponse({ description: 'The authenticated user does not have the DOCTOR role.' })
  @ApiConflictResponse({ description: 'A doctor profile or license number already exists.' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('DOCTOR')
  createProfile(@Body() dto: CreateDoctorProfileDto, @Req() req) {
    return this.doctorService.createProfile(dto, req.user.id);
  }

  @Get('my-profile')
  @ApiOperation({
    summary: 'Get the authenticated doctor profile',
    description: 'Requires a JWT for a user with the DOCTOR role.',
  })
  @ApiOkResponse({
    description: 'Doctor profile returned successfully.',
    schema: {
      example: {
        id: 'clxdoctorprofile1',
        userId: 'clxuser1',
        specialty: 'Cardiology',
        licenseNo: 'MED-12345',
        bio: 'Board-certified cardiologist.',
      },
    },
  })
  @ApiUnauthorizedResponse({ description: 'A valid JWT access token is required.' })
  @ApiForbiddenResponse({ description: 'The authenticated user does not have the DOCTOR role.' })
  @ApiNotFoundResponse({ description: 'The authenticated user has no doctor profile.' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('DOCTOR')
  getMyProfile(@Req() req) {
    return this.doctorService.getMyProfile(req.user.id);
  }

  @Patch('edit-profile')
  @ApiOperation({
    summary: 'Update the authenticated doctor profile',
    description: 'Requires a JWT for a user with the DOCTOR role.',
  })
  @ApiOkResponse({
    description: 'Doctor profile updated successfully.',
    schema: {
      example: {
        id: 'clxdoctorprofile1',
        userId: 'clxuser1',
        specialty: 'Cardiology',
        licenseNo: 'MED-12345',
        bio: 'Board-certified cardiologist.',
      },
    },
  })
  @ApiBadRequestResponse({ description: 'Request validation failed.' })
  @ApiUnauthorizedResponse({ description: 'A valid JWT access token is required.' })
  @ApiForbiddenResponse({ description: 'The authenticated user does not have the DOCTOR role.' })
  @ApiNotFoundResponse({ description: 'The authenticated user has no doctor profile.' })
  @ApiConflictResponse({ description: 'The submitted license number is already registered.' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('DOCTOR')
  updateProfile(@Body() dto: UpdateDoctorProfileDto, @Req() req) {
    return this.doctorService.updateProfile(dto, req.user.id);
  }

  @Delete('remove-profile')
  @ApiOperation({
    summary: 'Remove the authenticated doctor profile',
    description: 'Requires a JWT for a user with the DOCTOR role.',
  })
  @ApiOkResponse({
    description: 'Doctor profile deleted successfully.',
    schema: { example: { message: 'Doctor profile deleted successfully' } },
  })
  @ApiUnauthorizedResponse({ description: 'A valid JWT access token is required.' })
  @ApiForbiddenResponse({ description: 'The authenticated user does not have the DOCTOR role.' })
  @ApiNotFoundResponse({ description: 'The authenticated user has no doctor profile.' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('DOCTOR')
  removeProfile(@Req() req) {
    return this.doctorService.removeProfile(req.user.id);
  }
}
