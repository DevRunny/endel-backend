import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {MessengersModel} from "./messengers.model";
import {CreateMessengerDto} from "./dto/messenger-create.dto";

@Injectable()
export class MessengersService {
  constructor(@InjectModel(MessengersModel) private messengerRepository: typeof MessengersModel) {}

    async createMessenger(dto: CreateMessengerDto) {
      const newMessenger = await this.messengerRepository.create(dto);
      return newMessenger;
    }

    async getAllMessengers() {
      return await this.messengerRepository.findAll();
    }

}
