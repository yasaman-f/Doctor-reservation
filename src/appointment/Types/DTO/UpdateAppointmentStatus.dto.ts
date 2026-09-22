import { IsEnum } from 'class-validator';
import { Status } from 'src/prisma/generated/prisma';

export class UpdateAppointmentStatusDto {
  @IsEnum(Status)
  status!: Status;
}