import { Body, Controller, Post, HttpCode, HttpStatus, Get, UseGuards, Req } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterDto } from './Types/DTO/register.dto';
import { LoginDto } from './Types/DTO/login.dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('register')
  @ApiOperation({ summary: 'Register a patient or doctor account' })
  @ApiCreatedResponse({
    description: 'Account registered and tokens issued successfully.',
    schema: {
      example: {
        user: {
          id: 'clx1234567890',
          email: 'patient@example.com',
          role: 'PATIENT',
          firstName: 'Jane',
          lastName: 'Doe',
          phone: '09123456789',
          createdAt: '2026-01-01T00:00:00.000Z',
          updatedAt: '2026-01-01T00:00:00.000Z',
        },
        access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
        refresh_token: '550e8400-e29b-41d4-a716-446655440000',
        token_type: 'Bearer',
      },
    },
  })
  @ApiBadRequestResponse({ description: 'Request validation failed.' })
  @ApiConflictResponse({ description: 'An account with this email already exists.' })
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Authenticate and receive JWT tokens' })
  @ApiOkResponse({
    description: 'Authentication succeeded and tokens were issued.',
    schema: {
      example: {
        user: {
          id: 'clx1234567890',
          email: 'patient@example.com',
          role: 'PATIENT',
          firstName: 'Jane',
          lastName: 'Doe',
          phone: '09123456789',
          createdAt: '2026-01-01T00:00:00.000Z',
          updatedAt: '2026-01-01T00:00:00.000Z',
        },
        access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
        refresh_token: '550e8400-e29b-41d4-a716-446655440000',
        token_type: 'Bearer',
      },
    },
  })
  @ApiBadRequestResponse({ description: 'Request validation failed.' })
  @ApiUnauthorizedResponse({ description: 'The email or password is invalid.' })
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }
}
