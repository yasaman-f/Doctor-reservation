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
import { PatientService } from './patient.service';
import { CreatePatientProfileDto } from './Types/DTO/createPatientProfile.dto';
import { UpdatePatientProfileDto } from './Types/DTO/UpdatePatientProfile.dto';
import { JwtAuthGuard } from 'src/auth/Guards/jwt.auth.guard';
import { RolesGuard } from 'src/auth/Guards/role.guard';
import { Roles } from 'src/auth/Decorators/roles.decorator';

@Controller('patient')
@ApiTags('Patients')
@ApiBearerAuth('JWT-auth')
export class PatientController {
  constructor(private patientService: PatientService) {}

  @Post('profile')
  @ApiOperation({
    summary: 'Create the authenticated patient profile',
    description: 'Requires a JWT for a user with the PATIENT role.',
  })
  @ApiCreatedResponse({
    description: 'Patient profile created successfully.',
    schema: {
      example: {
        id: 'clxpatientprofile1',
        userId: 'clxuser1',
        dateOfBirth: '1990-01-15T00:00:00.000Z',
        nationalId: '1234567890',
      },
    },
  })
  @ApiBadRequestResponse({ description: 'Request validation failed.' })
  @ApiUnauthorizedResponse({ description: 'A valid JWT access token is required.' })
  @ApiForbiddenResponse({ description: 'The authenticated user does not have the PATIENT role.' })
  @ApiConflictResponse({ description: 'A patient profile or national ID already exists.' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('PATIENT')
  createProfile(@Body() dto: CreatePatientProfileDto, @Req() req) {
    return this.patientService.createProfile(dto, req.user.id);
  }

  @Get('my-profile')
  @ApiOperation({
    summary: 'Get the authenticated patient profile',
    description: 'Requires a JWT for a user with the PATIENT role.',
  })
  @ApiOkResponse({
    description: 'Patient profile returned successfully.',
    schema: {
      example: {
        id: 'clxpatientprofile1',
        userId: 'clxuser1',
        dateOfBirth: '1990-01-15T00:00:00.000Z',
        nationalId: '1234567890',
      },
    },
  })
  @ApiUnauthorizedResponse({ description: 'A valid JWT access token is required.' })
  @ApiForbiddenResponse({ description: 'The authenticated user does not have the PATIENT role.' })
  @ApiNotFoundResponse({ description: 'The authenticated user has no patient profile.' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('PATIENT')
  getMyProfile(@Req() req) {
    return this.patientService.getMyProfile(req.user.id);
  }

  @Patch('edit-profile')
  @ApiOperation({
    summary: 'Update the authenticated patient profile',
    description: 'Requires a JWT for a user with the PATIENT role.',
  })
  @ApiOkResponse({
    description: 'Patient profile updated successfully.',
    schema: {
      example: {
        id: 'clxpatientprofile1',
        userId: 'clxuser1',
        dateOfBirth: '1990-01-15T00:00:00.000Z',
        nationalId: '1234567890',
      },
    },
  })
  @ApiBadRequestResponse({ description: 'Request validation failed.' })
  @ApiUnauthorizedResponse({ description: 'A valid JWT access token is required.' })
  @ApiForbiddenResponse({ description: 'The authenticated user does not have the PATIENT role.' })
  @ApiNotFoundResponse({ description: 'The authenticated user has no patient profile.' })
  @ApiConflictResponse({ description: 'The submitted national ID is already registered.' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('PATIENT')
  updateProfile(@Body() dto: UpdatePatientProfileDto, @Req() req) {
    return this.patientService.updateProfile(dto, req.user.id);
  }

  @Delete('remove-profile')
  @ApiOperation({
    summary: 'Remove the authenticated patient profile',
    description: 'Requires a JWT for a user with the PATIENT role.',
  })
  @ApiOkResponse({
    description: 'Patient profile deleted successfully.',
    schema: { example: { message: 'Patient profile deleted successfully' } },
  })
  @ApiUnauthorizedResponse({ description: 'A valid JWT access token is required.' })
  @ApiForbiddenResponse({ description: 'The authenticated user does not have the PATIENT role.' })
  @ApiNotFoundResponse({ description: 'The authenticated user has no patient profile.' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('PATIENT')
  removeProfile(@Req() req) {
    return this.patientService.removeProfile(req.user.id);
  }
}
