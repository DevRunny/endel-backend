import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AboutCompanyController } from './about-company.controller';
import { AboutCompanyModel } from './about-company.model';
import { AboutCompanyService } from './about-company.service';

@Module({
  controllers: [AboutCompanyController],
  providers: [AboutCompanyService],
  imports: [
    SequelizeModule.forFeature([AboutCompanyModel])
  ]
})
export class AboutCompanyModule {};
