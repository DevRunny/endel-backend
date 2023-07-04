import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MapStateService } from './map-state.service';
import { MapStateController } from './map-state.controller';
import { MapStateModel } from './map-state.model';
import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [MapStateService],
  controllers: [MapStateController],
  imports: [SequelizeModule.forFeature([MapStateModel]), AuthModule],
})
export class MapStateModule {}
