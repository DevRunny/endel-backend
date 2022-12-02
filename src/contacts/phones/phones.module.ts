import { Module } from '@nestjs/common';
import { PhonesService } from './phones.service';
import { PhonesController } from './phones.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { PhonesModel } from "./phones.model";

@Module({
  providers: [PhonesService],
  controllers: [PhonesController],
  imports: [
    SequelizeModule.forFeature([PhonesModel])
  ]
})
export class PhonesModule {}
