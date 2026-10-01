export type AvailabilitySlot = {
  id: string;
  doctorId: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
  createdAt: string;
  updatedAt: string;
};

export type CreateAvailabilityPayload = {
  startTime: string;
  endTime: string;
};

export type UpdateAvailabilityPayload = {
  startTime?: string;
  endTime?: string;
};

export type DeleteAvailabilityResponse = {
  message: string;
};
