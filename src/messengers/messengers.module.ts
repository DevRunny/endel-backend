import { Module } from '@nestjs/common';
import { MessengersController } from './messengers.controller';
import { MessengersService } from './messengers.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {MessengerModel} from "./messengers.model";
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [MessengersController],
  providers: [MessengersService],
  imports: [
      SequelizeModule.forFeature([MessengerModel]),
      AuthModule
  ]
})
export class MessengersModule {};
