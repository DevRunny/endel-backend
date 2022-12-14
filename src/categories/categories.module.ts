import { Module } from '@nestjs/common';
import { CategoryService } from './categories.service';
import { CategoryController } from './categories.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoryModel } from './category.model';
import {AuthModule} from "../auth/auth.module";

@Module({
  providers: [CategoryService],
  controllers: [CategoryController],
  imports: [
    SequelizeModule.forFeature([CategoryModel]),
      AuthModule
  ]
})
export class CategoryModule {}
