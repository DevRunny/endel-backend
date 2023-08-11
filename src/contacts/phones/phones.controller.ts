import { Body, Controller, Post } from '@nestjs/common';
import { PhonesService } from './phones.service';
import { CreatePhonesDto } from './dto/create-phones.dto';

@Controller('phones')
export class PhonesController {
  constructor(private phonesService: PhonesService) {}

  @Post()
  create(@Body() phonesDto: CreatePhonesDto) {
    return this.phonesService.createPhone(phonesDto);
  }
}
