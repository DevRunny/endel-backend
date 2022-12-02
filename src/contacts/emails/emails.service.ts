import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { EmailsModel } from "./emails.model";
import { emailsCreateDto } from "./dto/emails-create.dto";

@Injectable()
export class EmailsService {
  constructor(@InjectModel(EmailsModel) private emailsRepository: typeof EmailsModel) {}

  async createEmails(dto: emailsCreateDto) {
    return await this.emailsRepository.create(dto);
  }

  async getAllPoints() {
    return await this.emailsRepository.findAll();
  }
}
