import { IsDateString, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePatientProfileDto {
  @ApiPropertyOptional({
    description: 'Date of birth in ISO 8601 format.',
    format: 'date-time',
    example: '1990-01-15T00:00:00.000Z',
  })
  @IsOptional()
  @IsDateString()
  dateOfBirth?: string;

  @ApiProperty({ description: 'Unique national ID.', minLength: 10, example: '1234567890' })
  @IsNotEmpty({ message: 'national ID is required' })
  @IsString({ message: 'national ID must be a string' })
  @MinLength(10, { message: 'national ID must be at least 10 characters' })
  nationalId!: string;
}
