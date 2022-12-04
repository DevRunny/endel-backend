import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import { EmailsModule } from "./emails/emails.module";
import { PhonesModule } from "./phones/phones.module";
import {EmailModel} from "./emails/emails.model";
import {PhoneModel} from "./phones/phoneModel";
import {PhonesService} from "./phones/phones.service";
import {EmailsService} from "./emails/emails.service";

@Module({
  providers: [PhonesService, EmailsService],
  controllers: [ContactsController],
  imports: [
    SequelizeModule.forFeature([EmailModel, PhoneModel]),
    EmailsModule, PhonesModule
  ]
})
export class ContactsModule {}
