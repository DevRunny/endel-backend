import {Body, Controller, Get, Post} from '@nestjs/common';
import {MessengersService} from "./messengers.service";
import {CreateMessengerDto} from "./dto/messenger-create.dto";

@Controller('messengers')
export class MessengersController {
  constructor(private messengersService: MessengersService) {}

  @Post()
  create(@Body() messengerDto: CreateMessengerDto) {
    return this.messengersService.createMessenger(messengerDto);
  }

  @Get()
  getAll() {
    return this.messengersService.getAllMessengers();
  }
}
