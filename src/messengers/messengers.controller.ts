import {Body, Controller, Delete, Get, Post, UseGuards} from '@nestjs/common';
import {MessengersService} from "./messengers.service";
import {CreateMessengerDto} from "./dto/messenger-create.dto";
import { MessengerModel } from './messengers.model';
import { IDeleteMessengerResponse, IEditMessengerIconResponse, IEditMessengerNameResponse, IEditMessengerValueResponse, IMessenger } from './interface/messengers.interface';
import { EditMessengerIconDto, EditMessengerNameDto, EditMessengerValueDto } from './dto/messenger-edit.dto';
import { DeleteMessengerDto } from './dto/messenger-delete.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

// @UseGuards(JwtAuthGuard)
@Controller('messengers')
export class MessengersController {
  constructor(private messengersService: MessengersService) {}

  @Post('createMessenger')
  createMessenger(@Body() messengerDto: CreateMessengerDto): Promise<MessengerModel> {
    return this.messengersService.createMessenger(messengerDto);
  }

  @Get('getAllMessengers')
  getAllMessengers(): Promise<IMessenger[]> {
    return this.messengersService.getAllMessengers();
  }

  @Post('editMessengerName')
  editMessengerName(@Body() dto: EditMessengerNameDto): Promise<IEditMessengerNameResponse> {
    return this.messengersService.editMessengerName(dto);
  }

  @Post('editMessengerValue')
  editMessengerValue(@Body() dto: EditMessengerValueDto): Promise<IEditMessengerValueResponse> {
    return this.messengersService.editMessengerValue(dto);
  }

  @Post('editMessengerIcon')
  editMessengerIcon(@Body() dto: EditMessengerIconDto): Promise<IEditMessengerIconResponse> {
    return this.messengersService.editMessengerIcon(dto);
  }

  @Delete('deleteMessenger')
  deleteMessengerDto(@Body() dto: DeleteMessengerDto): Promise<IDeleteMessengerResponse> {
    return this.messengersService.deleteMessenger(dto);
  } 
}
