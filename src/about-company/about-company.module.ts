import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AboutCompanyController } from './about-company.controller';
import { AboutCompanyModel } from './about-company.model';
import { AboutCompanyService } from './about-company.service';
import {AuthModule} from "../auth/auth.module";

@Module({
  controllers: [AboutCompanyController],
  providers: [AboutCompanyService],
  imports: [
    SequelizeModule.forFeature([AboutCompanyModel]),
      AuthModule
  ]
})
export class AboutCompanyModule {};
