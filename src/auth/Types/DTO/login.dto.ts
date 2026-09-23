import {  IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ description: 'Registered email address.', format: 'email', example: 'jane.doe@example.com' })
  @IsEmail()
  email!: string;

  @ApiProperty({ description: 'Account password.', format: 'password', minLength: 8, example: 'SecurePass123!' })
  @IsString()
  @MinLength(8)
  password!: string;
}
