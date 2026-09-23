import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CreateAvailabilityDto } from './createAvailability.dto';

export class UpdateAvailabilityDto extends PartialType(CreateAvailabilityDto) {
  @ApiPropertyOptional({
    description: 'Slot start time in ISO 8601 format.',
    format: 'date-time',
    example: '2026-10-01T09:00:00.000Z',
  })
  startTime?: string;

  @ApiPropertyOptional({
    description: 'Slot end time in ISO 8601 format.',
    format: 'date-time',
    example: '2026-10-01T09:30:00.000Z',
  })
  endTime?: string;
}
