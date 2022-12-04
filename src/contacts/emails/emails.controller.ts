import { Body, Controller, Get, Post } from "@nestjs/common";
import { EmailsService } from "./emails.service";
import { EmailsCreateDto } from "./dto/emails-create.dto";

@Controller('emails')
export class EmailsController {
  constructor(private emailsService: EmailsService) {}

  @Post()
  create(@Body() emailsDto: EmailsCreateDto) {
    return this.emailsService.createEmails(emailsDto)
  }
}
