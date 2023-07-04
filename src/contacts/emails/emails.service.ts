import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EmailModel } from './emails.model';
import { CreateEmailDto } from './dto/emails-create.dto';
import {
  ICreateEmailResponse,
  IEditEmailResponse,
  IEmail,
  IEmailModel,
  IGetAllEmailsResponse,
} from './interface/emails.interface';
import { EditEmailDto } from './dto/emails-edit.dto';
import { DeleteEmailDto } from './dto/emails-delete.dto';

@Injectable()
export class EmailsService {
  constructor(
    @InjectModel(EmailModel) private emailsRepository: typeof EmailModel,
  ) {}

  async createEmail(dto: CreateEmailDto): Promise<ICreateEmailResponse> {
    const createdEmail = await this.emailsRepository.create(dto);
    const response: ICreateEmailResponse = {
      id: createdEmail.id,
      email: createdEmail.email,
    };
    return response;
  }

  public async getAllEmails(): Promise<IEmail[]> {
    const allEmailsModel = await this.emailsRepository.findAll();
    const response: IEmail[] = this.mapEmailsModelToEmails(allEmailsModel);
    return response;
  }

  public async setEmail(dto: EditEmailDto): Promise<IEditEmailResponse> {
    const emailModel = await this.getEmailModelById(dto.id);
    emailModel.email = dto.email;
    await emailModel.save();

    const response: IEditEmailResponse = {
      email: emailModel.email,
    };
    return response;
  }

  public async deleteEmail(dto: DeleteEmailDto): Promise<HttpException> {
    if (dto.id === 1) {
      throw new HttpException(
        'Нельзя удалить почту с id = 1',
        HttpStatus.BAD_REQUEST,
      );
    }
    const emailForDelete = await this.getEmailModelById(dto.id);
    await emailForDelete.destroy();
    throw new HttpException('Почта была успешно удалена', HttpStatus.OK);
  }

  private mapEmailsModelToEmails(emailsModel: IEmailModel[]): IEmail[] {
    return emailsModel.map((emailModel) =>
      this.mapEmailModelToEmail(emailModel),
    );
  }

  private mapEmailModelToEmail(emailModel: IEmailModel): IEmail {
    const email: IEmail = {
      id: emailModel.id,
      email: emailModel.email,
    };
    return email;
  }

  private async getEmailModelById(id: number): Promise<EmailModel> {
    return await this.emailsRepository.findByPk(id);
  }
}
