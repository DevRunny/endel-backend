import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ContactsModel } from './contacts.model';
import {EmailsModel} from "./emails/emails.model";
import {PhonesModel} from "./phones/phones.model";
import {MapStateModel} from "./map-state/map-state.model";
import {IEmail, IEmailModel, IGetAllEmailsResponse} from "./emails/interface/emails.interface";

@Injectable()
export class ContactsService {
    constructor(
        @InjectModel(EmailsModel) private emailsRepository: typeof EmailsModel,
        @InjectModel(PhonesModel) private phonesRepository: typeof PhonesModel,
        @InjectModel(MapStateModel) private mapStateRepository: typeof MapStateModel
    ) {}

    public async getAllEmails(): Promise<IGetAllEmailsResponse> {
        const allEmailsModel = await this.emailsRepository.findAll();
        const response: IGetAllEmailsResponse = {
            emails: this.mapEmailsModelToEmails(allEmailsModel)
        }
        return response;
    }

    private mapEmailsModelToEmails(emailsModel: IEmailModel[]): IEmail[] {
        return emailsModel.map((emailModel) => this.mapEmailModelToEmail(emailModel));
    }

    private mapEmailModelToEmail(emailModel: IEmailModel): IEmail {
        const email: IEmail = {
            id: emailModel.id,
            email: emailModel.email
        }
        return email;
    }

}
