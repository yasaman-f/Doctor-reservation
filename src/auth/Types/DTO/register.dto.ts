import {  IsEmail,  IsEnum,  IsOptional,  Matches,  MinLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { RegisterRole } from '../Enum/register.enum';

export class RegisterDto {
  @ApiProperty({ description: 'User first name.', minLength: 2, example: 'Jane' })
  @MinLength(2)
  firstName!: string;

  @ApiProperty({ description: 'User last name.', minLength: 4, example: 'Doe' })
  @MinLength(4)
  lastName!: string;

  @ApiProperty({ description: 'Unique email address.', format: 'email', example: 'jane.doe@example.com' })
  @IsEmail()
  email!: string;

  @ApiPropertyOptional({ description: 'Iranian mobile phone number.', example: '09123456789' })
  @IsOptional()
  @Matches(/^(\+98|0)?9\d{9}$/, { message: 'phone number is not valid' })
  phone?: string;

  @ApiProperty({
    description: 'Password with uppercase, lowercase, number, and special character.',
    format: 'password',
    minLength: 8,
    example: 'SecurePass123!',
  })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'password must be at least 8 characters and include uppercase, lowercase, number and special character',
    },
  )
  password!: string;

  @ApiProperty({ description: 'Role for the new account.', enum: RegisterRole, example: RegisterRole.PATIENT })
  @IsEnum(RegisterRole)
  role!: RegisterRole;
}
