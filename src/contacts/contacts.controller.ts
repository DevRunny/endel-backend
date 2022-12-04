import {Controller, Get} from '@nestjs/common';
import {ContactsService} from "./contacts.service";
import {IGetAllEmailsResponse} from "./emails/interface/emails.interface";

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Get('getAllEmails')
  getAllEmails(): Promise<IGetAllEmailsResponse> {
    return this.contactsService.getAllEmails();
  }

  @Get('getAllPhones')
  getAllPhones(): Promise<IGetAllPhonesResponse> {
    return this.contactsService.getAllPhones();
  }

  @Get('getMapState')
  getMapState(): Promise<IGetMapStateResponse> {
    return this.contactsService.getMapState();
  }
}
