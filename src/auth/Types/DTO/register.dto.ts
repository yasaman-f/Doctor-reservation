import {  IsEmail,  IsEnum,  IsOptional,  Matches,  MinLength } from 'class-validator';
import { RegisterRole } from '../Enum/register.enum';

export class RegisterDto {
  @MinLength(2)
  firstName!: string;

  @MinLength(4)
  lastName!: string;

  @IsEmail()
  email!: string;

  @IsOptional()
  @Matches(/^(\+98|0)?9\d{9}$/, { message: 'phone number is not valid' })
  phone?: string;

  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'password must be at least 8 characters and include uppercase, lowercase, number and special character',
    },
  )
  password!: string;

  @IsEnum(RegisterRole)
  role!: RegisterRole;
}
