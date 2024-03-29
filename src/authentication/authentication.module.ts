import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './authentication.entity';
import { AuthenticationResolver } from './authentication.resolver';
import { AuthenticationService } from './authentication.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  providers: [AuthenticationService, AuthenticationResolver],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
