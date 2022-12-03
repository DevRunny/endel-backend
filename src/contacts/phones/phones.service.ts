import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { PhonesModel } from "./phones.model";
import { phonesCreateDto } from "./dto/phones-create.dto";

@Injectable()
export class PhonesService {
  constructor(@InjectModel(PhonesModel) private phonesRepository: typeof PhonesModel) {}

  async createPhones(dto: phonesCreateDto) {
    return await this.phonesRepository.create(dto);
  }

  async getAllPhones() {
    return await this.phonesRepository.findAll();
  }
}
