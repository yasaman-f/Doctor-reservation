import { Module } from '@nestjs/common';
import { AppointmentController } from './appointment.controller';
import { AppointmentService } from './appointment.service';
import { NotificationGateway } from 'src/notification/notification.gateway';

@Module({
  imports: [NotificationGateway],
  controllers: [AppointmentController],
  providers: [AppointmentService],
})
export class AppointmentModule {}
