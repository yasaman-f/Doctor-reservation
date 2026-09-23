import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAppointmentDto {
  @ApiProperty({ description: 'ID of the availability slot to book.', example: 'clxavailability1' })
  @IsNotEmpty({ message: 'availability slot id is required' })
  @IsString()
  availabilitySlotId!: string;
}
