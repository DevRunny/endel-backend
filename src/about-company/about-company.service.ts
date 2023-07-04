import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AboutCompanyModel } from './about-company.model';
import { CreateAboutCompanyDto } from './dto/create-about-company.dto';
import {
  EditInnDto,
  EditNameCompanyDto,
  EditNumRegistryDto,
  EditOgrnDto,
  ToggleOgrnipDto,
} from './dto/edit-about-company.dto';
import {
  IEditInnResponse,
  IEditNameCompanyResponse,
  IEditNumRegistryResponse,
  IEditOgrnResponse,
  IGetAllInfoAboutCompanyResponse,
  IToggleOgrnip,
} from './interface/about-company.interface';

@Injectable()
export class AboutCompanyService {
  constructor(
    @InjectModel(AboutCompanyModel)
    private aboutCompanyRepository: typeof AboutCompanyModel,
  ) {}

  public async createCompany(
    dto: CreateAboutCompanyDto,
  ): Promise<AboutCompanyModel> {
    return await this.aboutCompanyRepository.create(dto);
  }

  public async setNameCompany(
    dto: EditNameCompanyDto,
  ): Promise<IEditNameCompanyResponse> {
    const company: AboutCompanyModel =
      await this.aboutCompanyRepository.findByPk(1);
    company.nameCompany = dto.nameCompany;
    await company.save();

    const response: IEditNameCompanyResponse = {
      nameCompany: company.nameCompany,
    };

    return response;
  }

  public async setInn(dto: EditInnDto): Promise<IEditInnResponse> {
    const company: AboutCompanyModel =
      await this.aboutCompanyRepository.findByPk(1);
    company.inn = dto.inn;
    await company.save();

    const response: IEditInnResponse = {
      inn: company.inn,
    };

    return response;
  }

  public async setOgrn(dto: EditOgrnDto): Promise<IEditOgrnResponse> {
    const company: AboutCompanyModel =
      await this.aboutCompanyRepository.findByPk(1);
    company.ogrn = dto.ogrn;
    await company.save();

    const response: IEditOgrnResponse = {
      ogrn: company.ogrn,
    };

    return response;
  }

  public async toggleOgrnip(dto: ToggleOgrnipDto): Promise<IToggleOgrnip> {
    const company: AboutCompanyModel =
      await this.aboutCompanyRepository.findByPk(1);
    company.isOgrnip = dto.isOgrnip;
    await company.save();

    const response: IToggleOgrnip = {
      isOgrnip: company.isOgrnip,
    };

    return response;
  }

  public async setNumRegistry(
    dto: EditNumRegistryDto,
  ): Promise<IEditNumRegistryResponse> {
    const company: AboutCompanyModel =
      await this.aboutCompanyRepository.findByPk(1);
    company.numRegistry = dto.numRegistry;
    await company.save();

    const response: IEditNumRegistryResponse = {
      numRegistry: company.numRegistry,
    };

    return response;
  }

  public async;

  public async getAllInfoAboutCompany(): Promise<IGetAllInfoAboutCompanyResponse> {
    const aboutCompanyModel: AboutCompanyModel =
      await this.aboutCompanyRepository.findByPk(1);
    const aboutCompanyObj: IGetAllInfoAboutCompanyResponse = {
      nameCompany: aboutCompanyModel.nameCompany,
      requisites: {
        inn: aboutCompanyModel.inn,
        ogrn: aboutCompanyModel.ogrn,
        numRegistry: aboutCompanyModel.numRegistry,
        isOgrnip: aboutCompanyModel.isOgrnip,
      },
    };

    return aboutCompanyObj;
  }
}
