import { PartialType } from "@nestjs/mapped-types";
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CreateDoctorProfileDto } from "./createDoctorProfile.dto";

export class UpdateDoctorProfileDto extends PartialType(CreateDoctorProfileDto) {
  @ApiPropertyOptional({ description: 'Medical specialty.', example: 'Cardiology' })
  specialty?: string;

  @ApiPropertyOptional({ description: 'Unique medical license number.', example: 'MED-12345' })
  licenseNo?: string;

  @ApiPropertyOptional({ description: 'Professional biography.', minLength: 10, example: 'Board-certified cardiologist.' })
  bio?: string;
}
