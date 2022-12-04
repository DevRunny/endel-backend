import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {MapStateService} from "./map-state.service";
import {MapStateController} from "./map-state.controller";
import {MapStateModel} from "./map-state.model";

@Module({
  providers: [MapStateService],
  controllers: [MapStateController],
  imports: [
    SequelizeModule.forFeature([MapStateModel])
  ]
})
export class MapStateModule {}
