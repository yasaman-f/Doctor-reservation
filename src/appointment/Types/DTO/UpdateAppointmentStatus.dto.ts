import { IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Status } from 'src/prisma/generated/prisma';

export class UpdateAppointmentStatusDto {
  @ApiProperty({ description: 'New appointment status.', enum: Status, example: Status.CONFIRMED })
  @IsEnum(Status)
  status!: Status;
}
