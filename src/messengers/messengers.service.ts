import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {MessengerModel} from "./messengers.model";
import {CreateMessengerDto} from "./dto/messenger-create.dto";
import { EditMessengerIconDto, EditMessengerNameDto, EditMessengerValueDto } from './dto/messenger-edit.dto';
import { EDeleteMessengerStatus, IDeleteMessengerResponse, IEditMessengerIconResponse, IEditMessengerNameResponse, IEditMessengerValueResponse, IMessenger } from './interface/messengers.interface';
import { DeleteMessengerDto } from './dto/messenger-delete.dto';

@Injectable()
export class MessengersService {
  constructor(@InjectModel(MessengerModel) private messengerRepository: typeof MessengerModel) {}

    private async getMessengerById(id: number): Promise<MessengerModel | null> {
      return await this.messengerRepository.findByPk(id);
    }

    private mapMessengerModelToMessangerObj(models: MessengerModel[]): IMessenger[] {
      const messengerObjects: IMessenger[] = models.map((messengerModel: MessengerModel) => ({
        messengerName: messengerModel.messengerName,
        icon: messengerModel.icon,
        value: messengerModel.value
      }))

      return messengerObjects;
    }

    public async createMessenger(dto: CreateMessengerDto): Promise<MessengerModel> {
      return await this.messengerRepository.create(dto);
    }

    public async getAllMessengers(): Promise<IMessenger[]> {
      const messengers = await this.messengerRepository.findAll();
      const response: IMessenger[] = this.mapMessengerModelToMessangerObj(messengers);
      return response;
    }

    public async editMessengerValue(dto: EditMessengerValueDto): Promise<IEditMessengerValueResponse> {
      const messenger = await this.getMessengerById(dto.id);
      messenger.value = dto.value;
      await messenger.save();

      const response: IEditMessengerValueResponse = {
        value: messenger.value
      };

      return response;
    }

    public async editMessengerName(dto: EditMessengerNameDto): Promise<IEditMessengerNameResponse> {
      const messenger = await this.getMessengerById(dto.id);
      messenger.messengerName = dto.messengerName;
      await messenger.save();

      const response: IEditMessengerNameResponse = {
        messengerName: messenger.messengerName
      };

      return response;
    }

    public async editMessengerIcon(dto: EditMessengerIconDto): Promise<IEditMessengerIconResponse> {
      const messenger = await this.getMessengerById(dto.id);
      messenger.icon = dto.icon;
      await messenger.save();

      const response: IEditMessengerIconResponse = {
        icon: messenger.icon
      };

      return response;
    }

    public async deleteMessenger(dto: DeleteMessengerDto): Promise<IDeleteMessengerResponse> {
      const messenger = await this.getMessengerById(dto.id);
      await messenger.destroy();

      const response: IDeleteMessengerResponse = {
        status: EDeleteMessengerStatus.SUCCESS
      }

      return response;
    }

}
