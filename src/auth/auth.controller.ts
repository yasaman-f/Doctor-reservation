import { Body, Controller, Post, HttpCode, HttpStatus, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './Types/DTO/register.dto';
import { LoginDto } from './Types/DTO/login.dto';
import { JwtAuthGuard } from './Guards/jwt.auth.guard';
import { Roles } from './Decorators/roles.decorator';
import { RolesGuard } from './Guards/role.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Get('doctor-only')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('DOCTOR')
  doctorOnly(@Req() req) {
    return { message: 'You are a doctor', user: req.user };
  }
}