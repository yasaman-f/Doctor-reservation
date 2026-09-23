import {  IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ForgetPasswordDto {
  @ApiProperty({ description: 'Registered email address.', format: 'email', example: 'jane.doe@example.com' })
  @IsEmail()
  email!: string;
}

