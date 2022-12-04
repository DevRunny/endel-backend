import {Body, Controller, Delete, Get, HttpException, Post} from '@nestjs/common';
import { DeleteEmailDto } from './emails/dto/emails-delete.dto';
import { EditEmailDto } from './emails/dto/emails-edit.dto';
import { EmailsService } from './emails/emails.service';
import {IEditEmailResponse, IGetAllEmailsResponse} from "./emails/interface/emails.interface";

@Controller('contacts')
export class ContactsController {
  constructor(private emailsService: EmailsService) {}

  @Get('getAllEmails')
  getAllEmails(): Promise<IGetAllEmailsResponse> {
    return this.emailsService.getAllEmails();
  }

  @Post('editEmail')
  editEmail(@Body() dto: EditEmailDto): Promise<IEditEmailResponse> {
    return this.emailsService.setEmail(dto);
  }

  @Delete('deleteEmail')
  deleteEmail(@Body() dto: DeleteEmailDto): Promise<HttpException> {
    return this.emailsService.deleteEmail(dto);
  }

  // @Get('getAllPhones')
  // getAllPhones(): Promise<IGetAllPhonesResponse> {
  //   return this.contactsService.getAllPhones();
  // }

  // @Get('getMapState')
  // getMapState(): Promise<IGetMapStateResponse> {
  //   return this.contactsService.getMapState();
  // }
}
