import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/modules/user/user.module';

@Module({
  imports: [PassportModule, UserModule],
  providers: [AuthResolver, AuthService],
})
export class AuthModule {}
