import { Body, Controller, Post } from '@nestjs/common';
import { EmailsService } from './emails.service';
import { CreateEmailDto } from './dto/emails-create.dto';

@Controller('emails')
export class EmailsController {
  constructor(private emailsService: EmailsService) {}

  @Post()
  create(@Body() emailDto: CreateEmailDto) {
    return this.emailsService.createEmail(emailDto);
  }
}
