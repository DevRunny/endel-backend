import { Module } from '@nestjs/common';
import { MessengersController } from './messengers.controller';
import { MessengersService } from './messengers.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {MessengersModel} from "./messengers.model";

@Module({
  controllers: [MessengersController],
  providers: [MessengersService],
  imports: [
      SequelizeModule.forFeature([MessengersModel])
  ]
})
export class MessengersModule {

}
