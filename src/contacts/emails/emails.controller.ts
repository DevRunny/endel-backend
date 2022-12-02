import { Body, Controller, Get, Post } from "@nestjs/common";
import { EmailsService } from "./emails.service";
import { emailsCreateDto } from "./dto/emails-create.dto";

@Controller('emails')
export class EmailsController {
  constructor(private emailsService: EmailsService) {}

  @Post()
  create(@Body() emailsDto: emailsCreateDto) {
    return this.emailsService.createEmails(emailsDto)
  }


  @Get()
  getAll() {
    return this.emailsService.getAllPoints()
  }
}
