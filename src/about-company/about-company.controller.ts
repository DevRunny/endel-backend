import { Body, Controller, Get, Post } from '@nestjs/common';
import { AboutCompanyModel } from './about-company.model';
import { AboutCompanyService } from './about-company.service';
import { CreateAboutCompanyDto } from './dto/create-about-company.dto';
import { EditInnDto, EditNameCompanyDto, EditNumRegistryDto, EditOgrnDto } from './dto/edit-about-company.dto';
import { IEditInnResponse, IEditNameCompanyResponse, IEditNumRegistryResponse, IEditOgrnResponse, IGetAllInfoAboutCompanyResponse } from './interface/about-company.interface';

@Controller('aboutCompany')
export class AboutCompanyController {
    constructor(private aboutCompanyService: AboutCompanyService) {}
    
    @Get('getAllInfoAboutCompany')
    getAllInfoAboutCompany(): Promise<IGetAllInfoAboutCompanyResponse> {
        return this.aboutCompanyService.getAllInfoAboutCompany();
    }

    @Post('editNameCompany')
    editNameCompany(@Body() dto: EditNameCompanyDto): Promise<IEditNameCompanyResponse> {
        return this.aboutCompanyService.setNameCompany(dto);
    }

    @Post('editInn')
    editInn(@Body() dto: EditInnDto): Promise<IEditInnResponse> {
        return this.aboutCompanyService.setInn(dto);
    }

    @Post('editOgrn')
    editOgrn(@Body() dto: EditOgrnDto): Promise<IEditOgrnResponse> {
        return this.aboutCompanyService.setOgrn(dto);
    }

    @Post('editNumRegistry')
    editNumRegistry(@Body() dto: EditNumRegistryDto): Promise<IEditNumRegistryResponse> {
        return this.aboutCompanyService.setNumRegistry(dto);
    }

    @Post('createCompany')
    createCompany(@Body() dto: CreateAboutCompanyDto): Promise<AboutCompanyModel> {
        return this.aboutCompanyService.createCompany(dto);
    }
}
