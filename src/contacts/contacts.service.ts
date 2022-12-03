import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ContactsModel } from './contacts.model';

@Injectable()
export class ContactsService {
    constructor(@InjectModel(ContactsModel) private contactsRepository: typeof ContactsModel) {}
}
