import { Module } from '@nestjs/common';
import { NotificationGateway } from './notification.gateway';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [NotificationGateway],
  exports: [NotificationGateway],
})
export class NotificationModule {}