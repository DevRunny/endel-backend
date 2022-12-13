import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt/dist';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    UserModule, 
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
      signOptions: {expiresIn: '24h'}
    })
  ],
  exports: [
    JwtModule
  ]
})
export class AuthModule {}
