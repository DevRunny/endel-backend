import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import {SequelizeModule} from "@nestjs/sequelize";

@Module({
  providers: [ContactsService],
  controllers: [ContactsController],
  imports: [
    SequelizeModule.forFeature([ContactsService])
  ]
})
export class ContactsModule {}
