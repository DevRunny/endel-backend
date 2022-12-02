import { Body, Controller, Get, Post } from "@nestjs/common";
import { PhonesService } from "./phones.service";
import { phonesCreateDto } from "./dto/phones-create.dto";

@Controller('phones')
export class PhonesController {
  constructor(private phonesService: PhonesService) {}

  @Post()
  create(@Body() phonesDto: phonesCreateDto) {
    return this.phonesService.createPhones(phonesDto)
  }

  @Get()
  getAll() {
    return this.phonesService.getAllPhones()
  }
}
