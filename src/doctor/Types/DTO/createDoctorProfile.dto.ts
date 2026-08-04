import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateDoctorProfileDto {
    @IsNotEmpty({ message: 'specialty is required' })
    @IsString({ message: 'specialty must be a string' })
    specialty!: string;

    @IsNotEmpty({ message: 'license number is required' })
    @IsString({ message: 'license number must be a string' })
    licenseNo!: string;

    @IsOptional()
    @IsString({ message: 'bio must be a string' })
    @MinLength(10, { message: 'bio must be at least 10 characters' })
    bio?: string;
}
