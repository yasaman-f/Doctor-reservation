import { PartialType } from "@nestjs/mapped-types";
import { CreatePatientProfileDto } from "./createPatientProfile.dto";

export class UpdatePatientProfileDto extends PartialType(CreatePatientProfileDto) {}