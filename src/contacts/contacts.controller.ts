import { Controller } from '@nestjs/common';
import {ContactsService} from "./contacts.service";

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}
}
