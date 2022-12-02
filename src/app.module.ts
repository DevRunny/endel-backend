import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";
import {AppService} from "./app.service";
import {AppController} from "./app.controller";
import {MessengerModel} from "./messengers/messengers.model";
import {getEnvPath} from "./common/helper/env.helper";
import {PointsModel} from "./points/points.model";
import {MessengersModule} from "./messengers/messengers.module";
import {PointsModule} from "./points/points.module";
import { AboutCompanyModule } from './about-company/about-company.module';

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
      models: [MessengerModel, PointsModel],
      autoLoadModels: true,
    }),
      MessengersModule, PointsModule, AboutCompanyModule
  ],
})
export class AppModule {}
