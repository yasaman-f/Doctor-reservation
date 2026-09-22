import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAppointmentDto {
  @IsNotEmpty({ message: 'availability slot id is required' })
  @IsString()
  availabilitySlotId!: string;
}