import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {PhoneModel} from "./phoneModel";
import {CreatePhonesDto} from "./dto/create-phones.dto";
import {
  ICreatePhoneResponse,
  IEditPhoneResponse,
  IGetAllPhonesResponse,
  IPhone,
  IPhoneModel
} from "./interface/phones.interface";
import {EditPhoneDto} from "./dto/phone-edit.dto";
import {DeletePhoneDto} from "./dto/phone-delete.dto";

@Injectable()
export class PhonesService {
  constructor(@InjectModel(PhoneModel) private phonesRepository: typeof PhoneModel) {}

  async createPhone(dto: CreatePhonesDto): Promise<ICreatePhoneResponse> {
    const createdPhone = await this.phonesRepository.create(dto);
    const response: ICreatePhoneResponse = {
      id: createdPhone.id,
      phoneNumber: createdPhone.phoneNumber,
      statusCode: HttpStatus.OK
    }
    return response;
  }


  async getAllPhones(): Promise<IGetAllPhonesResponse> {
    const allPhonesModel = await this.phonesRepository.findAll();
    const response: IGetAllPhonesResponse = {
      phones: this.mapPhonesModelToPhones(allPhonesModel)
    }

    return response;
  }

  public async setPhone(dto: EditPhoneDto): Promise<IEditPhoneResponse> {
    const phoneModel: PhoneModel = await this.getPhoneModelById(dto.id);
    phoneModel.phoneNumber = dto.phoneNumber;
    await phoneModel.save();
    const response: IEditPhoneResponse = {
      phoneNumber: phoneModel.phoneNumber,
      statusCode: HttpStatus.OK
    }
    return response;
  }

  public async deletePhone(dto: DeletePhoneDto): Promise<HttpException> {
    if(dto.id === 1) {
      throw new HttpException('Нельзя удалить номер телефона с id = 1', HttpStatus.BAD_REQUEST);
    }
    const phoneForDelete = await this.getPhoneModelById(dto.id)
    await phoneForDelete.destroy()
    throw new HttpException('Телефон был успешно удален', HttpStatus.OK);
  }

  private async getPhoneModelById(id: number): Promise<PhoneModel> {
    return await this.phonesRepository.findByPk(id);
  }

  private mapPhonesModelToPhones(phonesModel: IPhoneModel[]): IPhone[] {
    return phonesModel.map((phoneModel)=> this.mapPhoneModelToPhone(phoneModel));
  }

  private mapPhoneModelToPhone(phoneModel: IPhoneModel): IPhone {
    const phone: IPhone = {
      id: phoneModel.id,
      phoneNumber: phoneModel.phoneNumber
    }
    return phone;
  }


}
