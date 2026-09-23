import { IsDateString, IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateAvailabilityDto  {
  @ApiProperty({
    description: 'Slot start time in ISO 8601 format.',
    format: 'date-time',
    example: '2026-10-01T09:00:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  startTime!: string;

  @ApiProperty({
    description: 'Slot end time in ISO 8601 format.',
    format: 'date-time',
    example: '2026-10-01T09:30:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  endTime!: string;
}
