import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateDoctorProfileDto {
    @ApiProperty({ description: 'Medical specialty.', example: 'Cardiology' })
    @IsNotEmpty({ message: 'specialty is required' })
    @IsString({ message: 'specialty must be a string' })
    specialty!: string;

    @ApiProperty({ description: 'Unique medical license number.', example: 'MED-12345' })
    @IsNotEmpty({ message: 'license number is required' })
    @IsString({ message: 'license number must be a string' })
    licenseNo!: string;

    @ApiPropertyOptional({ description: 'Professional biography.', minLength: 10, example: 'Board-certified cardiologist.' })
    @IsOptional()
    @IsString({ message: 'bio must be a string' })
    @MinLength(10, { message: 'bio must be at least 10 characters' })
    bio?: string;
}
