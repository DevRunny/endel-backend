import { Module } from '@nestjs/common';
import { PointsService } from './points.service';
import { PointsController } from './points.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {PointsModel} from "./points.model";

@Module({
  providers: [PointsService],
  controllers: [PointsController],
  imports: [
    SequelizeModule.forFeature([PointsModel])
  ]
})
export class PointsModule {}
