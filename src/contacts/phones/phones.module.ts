import { Module } from '@nestjs/common';
import { PhonesService } from './phones.service';
import { PhonesController } from './phones.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { PhoneModel } from "./phoneModel";

@Module({
  providers: [PhonesService],
  controllers: [PhonesController],
  imports: [
    SequelizeModule.forFeature([PhoneModel])
  ]
})
export class PhonesModule {}
