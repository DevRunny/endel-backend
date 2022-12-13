import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import {AppService} from "./app.service";
import {AppController} from "./app.controller";
import {MessengerModel} from "./messengers/messengers.model";
import {getEnvPath} from "./common/helper/env.helper";
import {PointModel} from "./points/points.model";
import {MessengersModule} from "./messengers/messengers.module";
import {PointsModule} from "./points/points.module";
import { AboutCompanyModule } from './about-company/about-company.module';
import { ContactsModule } from "./contacts/contacts.module";
import {MapStateModel} from "./map-state/map-state.model";
import {PhoneModel} from "./contacts/phones/phoneModel";
import {EmailModel} from "./contacts/emails/emails.model";
import {MapStateModule} from "./map-state/map-state.module";
import { CategoryModule } from './categories/categories.module';
import { CategoryModel } from './categories/category.model';
import { DocumentsModule } from './documents/documents.module';
import { DocumentModel } from './documents/document.model';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UserModel } from './user/user.model';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
      ConfigModule.forRoot({
        envFilePath,
        isGlobal: true,
      }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        MessengerModel,
        PointModel,
        MapStateModel,
        PhoneModel,
        EmailModel,
        CategoryModel,
        DocumentModel,
        UserModel
      ],
      autoLoadModels: true,
    }),
      MessengersModule, 
      PointsModule, 
      ContactsModule, 
      AboutCompanyModule, 
      MapStateModule, 
      CategoryModule, 
      DocumentsModule, 
      AuthModule, 
      UserModule
  ],
})
export class AppModule {}
