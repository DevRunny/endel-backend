import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import { EmailsModule } from "./emails/emails.module";
import { MapStateModule } from "./map-state/map-state.module";
import { PhonesModule } from "./phones/phones.module";
import {EmailsModel} from "./emails/emails.model";
import {PhonesModel} from "./phones/phones.model";
import {MapStateModel} from "./map-state/map-state.model";
import {MapStateService} from "./map-state/map-state.service";
import {PhonesService} from "./phones/phones.service";
import {EmailsService} from "./emails/emails.service";

@Module({
  providers: [ContactsService, MapStateService, PhonesService, EmailsService],
  controllers: [ContactsController],
  imports: [
    SequelizeModule.forFeature([EmailsModel, MapStateModel, PhonesModel]),
    EmailsModule, MapStateModule, PhonesModule
  ]
})
export class ContactsModule {}
