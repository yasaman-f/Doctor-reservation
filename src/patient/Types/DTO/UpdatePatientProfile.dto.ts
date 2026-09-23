import { PartialType } from "@nestjs/mapped-types";
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CreatePatientProfileDto } from "./createPatientProfile.dto";

export class UpdatePatientProfileDto extends PartialType(CreatePatientProfileDto) {
  @ApiPropertyOptional({
    description: 'Date of birth in ISO 8601 format.',
    format: 'date-time',
    example: '1990-01-15T00:00:00.000Z',
  })
  dateOfBirth?: string;

  @ApiPropertyOptional({ description: 'Unique national ID.', minLength: 10, example: '1234567890' })
  nationalId?: string;
}
