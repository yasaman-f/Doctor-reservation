import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AppointmentModule } from './appointment/appointment.module';
import { PatientModule } from './patient/patient.module';
import { DoctorModule } from './doctor/doctor.module';
import { NotificationModule } from './notification/notification.module';
import { AvailabilityModule } from './availability/availability.module';
import { PatientController } from './patient/patient.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [ PrismaModule, RedisModule, AuthModule, AppointmentModule, PatientModule, DoctorModule, NotificationModule, AvailabilityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
