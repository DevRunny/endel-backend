import { Module } from '@nestjs/common';
import { PointsService } from './points.service';
import { PointsController } from './points.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {PointModel} from "./points.model";
import {AuthModule} from "../auth/auth.module";

@Module({
  providers: [PointsService],
  controllers: [PointsController],
  imports: [
    SequelizeModule.forFeature([PointModel]),
      AuthModule
  ]
})
export class PointsModule {}
