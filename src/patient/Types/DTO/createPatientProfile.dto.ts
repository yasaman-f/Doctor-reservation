import { IsDateString, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreatePatientProfileDto {
  @IsOptional()
  @IsDateString()
  dateOfBirth?: string;

  @IsNotEmpty({ message: 'national ID is required' })
  @IsString({ message: 'national ID must be a string' })
  @MinLength(10, { message: 'national ID must be at least 10 characters' })
  nationalId!: string;
}