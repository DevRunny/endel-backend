import { Module } from '@nestjs/common';
import { EmailsService } from './emails.service';
import { EmailsController } from './emails.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { EmailModel } from "./emails.model";

@Module({
  providers: [EmailsService],
  controllers: [EmailsController],
  imports: [
    SequelizeModule.forFeature([EmailModel])
  ]
})
export class EmailsModule {}
