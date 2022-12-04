import { Body, Controller, Get, Post } from "@nestjs/common";
import { PhonesService } from "./phones.service";
import { PhonesCreateDto } from "./dto/phones-create.dto";

@Controller('phones')
export class PhonesController {
  constructor(private phonesService: PhonesService) {}

  @Post()
  create(@Body() phonesDto: PhonesCreateDto) {
    return this.phonesService.createPhones(phonesDto)
  }
}
