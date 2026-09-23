import { Module } from '@nestjs/common';
import { NotificationGateway } from './notification.gateway';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule],
  providers: [NotificationGateway],
  exports: [NotificationGateway],
})
export class NotificationModule {}