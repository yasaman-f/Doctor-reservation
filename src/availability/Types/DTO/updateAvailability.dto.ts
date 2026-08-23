import { PartialType } from '@nestjs/mapped-types';
import { CreateAvailabilityDto } from './createAvailability.dto';

export class UpdateAvailabilityDto extends PartialType(CreateAvailabilityDto) {}