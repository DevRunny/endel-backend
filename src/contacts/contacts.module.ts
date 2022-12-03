import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import { EmailsModule } from "./emails/emails.module";
import { MapStateModule } from "./map-state/map-state.module";
import { PhonesModule } from "./phones/phones.module";
import { ContactsModel } from './contacts.model';

@Module({
  providers: [ContactsService],
  controllers: [ContactsController],
  imports: [
    SequelizeModule.forFeature([ContactsModel]),
    EmailsModule, MapStateModule, PhonesModule
  ]
})
export class ContactsModule {}
