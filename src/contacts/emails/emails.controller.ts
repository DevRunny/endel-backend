import { Body, Controller, Get, Post } from "@nestjs/common";
import { EmailsService } from "./emails.service";
import { EmailCreateDto } from "./dto/emails-create.dto";

@Controller('emails')
export class EmailsController {
  constructor(private emailsService: EmailsService) {}

  @Post()
  create(@Body() emailDto: EmailCreateDto) {
    return this.emailsService.createEmails(emailDto)
  }
}
