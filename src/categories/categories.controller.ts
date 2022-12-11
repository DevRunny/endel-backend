import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoryService } from './categories.service';
import { CategoryModel } from './category.model';
import { CreateCategoryDto } from './dto/category-create.dto';
import { SelectCategoriesDto } from './dto/category-edit.dto';
import { ICategory, ISelectCategoriesResponse } from './interface/accreditation.interface';

@Controller('categories')
export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    @Get('getAllCategories')
    getAllCategories(): Promise<ICategory[]> {
        return this.categoryService.getAllCategories();
    }

    @Get('getSelectedCategories')
    getSelectedCategories(): Promise<ICategory[]> {
        return this.categoryService.getSelectedCategories();
    }

    @Post('createCategory')
    createCategory(@Body() dto: CreateCategoryDto): Promise<CategoryModel> {
        return this.categoryService.createCategory(dto);
    }

    @Post('selectCategories')
    selectCategories(@Body() dto: SelectCategoriesDto): Promise<ISelectCategoriesResponse[]> {
        return this.categoryService.selectCategories(dto);
    }
}
