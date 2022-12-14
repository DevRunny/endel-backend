import {Body, Controller, Delete, Get, HttpException, Post, UseGuards} from '@nestjs/common';
import { DeleteEmailDto } from './emails/dto/emails-delete.dto';
import { EditEmailDto } from './emails/dto/emails-edit.dto';
import { EmailsService } from './emails/emails.service';
import {ICreateEmailResponse, IEditEmailResponse, IGetAllEmailsResponse} from "./emails/interface/emails.interface";
import {PhonesService} from "./phones/phones.service";
import {ICreatePhoneResponse, IEditPhoneResponse, IGetAllPhonesResponse} from "./phones/interface/phones.interface";
import {EditPhoneDto} from "./phones/dto/phone-edit.dto";
import {DeletePhoneDto} from "./phones/dto/phone-delete.dto";
import {CreateEmailDto} from "./emails/dto/emails-create.dto";
import {CreatePhonesDto} from "./phones/dto/create-phones.dto";
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";

@UseGuards(JwtAuthGuard)
@Controller('contacts')
export class ContactsController {
  constructor(private emailsService: EmailsService, private phonesService: PhonesService) {}

  @Get('getAllEmails')
  getAllEmails(): Promise<IGetAllEmailsResponse> {
    return this.emailsService.getAllEmails();
  }

  @Post('editEmail')
  editEmail(@Body() dto: EditEmailDto): Promise<IEditEmailResponse> {
    return this.emailsService.setEmail(dto);
  }

  @Post("createEmail")
  createEmail(@Body() dto: CreateEmailDto): Promise<ICreateEmailResponse> {
    return this.emailsService.createEmail(dto);
  }

  @Delete('deleteEmail')
  deleteEmail(@Body() dto: DeleteEmailDto): Promise<HttpException> {
    return this.emailsService.deleteEmail(dto);
  }

  @Get('getAllPhones')
  getAllPhones(): Promise<IGetAllPhonesResponse> {
    return this.phonesService.getAllPhones();
  }

  @Post("editPhone")
  editPhone(@Body() dto: EditPhoneDto): Promise<IEditPhoneResponse> {
    return this.phonesService.setPhone(dto);
  }

  @Post("createPhone")
  createPhone(@Body() dto: CreatePhonesDto): Promise<ICreatePhoneResponse> {
    return this.phonesService.createPhone(dto);
  }

  @Delete("deletePhone")
  deletePhone(@Body() dto: DeletePhoneDto): Promise<HttpException> {
    return this.phonesService.deletePhone(dto);
  }
}
