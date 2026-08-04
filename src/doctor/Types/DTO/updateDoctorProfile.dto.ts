import { PartialType } from "@nestjs/mapped-types";
import { CreateDoctorProfileDto } from "./createDoctorProfile.dto";

export class UpdateDoctorProfileDto extends PartialType(CreateDoctorProfileDto) {}