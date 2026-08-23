import { IsDateString, IsNotEmpty } from "class-validator";

export class CreateAvailabilityDto  {
  @IsDateString()
  @IsNotEmpty()
  startTime!: string;

  @IsDateString()
  @IsNotEmpty()
  endTime!: string;
}
