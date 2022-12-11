import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CategoryModel } from './category.model';
import { CreateCategoryDto } from './dto/category-create.dto';
import { SelectCategoriesDto } from './dto/category-edit.dto';
import { ICategory, ISelectCategoriesResponse } from './interface/accreditation.interface';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(CategoryModel) private categoriesRepository: typeof CategoryModel) {}

    public async createCategory(dto: CreateCategoryDto): Promise<CategoryModel> {
        const categoryCreateDto: CreateCategoryDto = {
            ...dto, selected: false
        }
        return await this.categoriesRepository.create(categoryCreateDto);
    }

    public async selectCategories(dto: SelectCategoriesDto): Promise<ISelectCategoriesResponse[]> {
        const response: ISelectCategoriesResponse[] = [];
        
        const allCategories = await this.categoriesRepository.findAll();
        for(let i = 0; i < allCategories.length; i++) {
            allCategories[i].selected = false;
            await allCategories[i].save();
        }

        for(let i = 0; i < dto.ids.length; i++) {
            const categoryModel = await this.getCategoryById(dto.ids[i]);
            categoryModel.selected = true;
            await categoryModel.save();
            response.push({id: categoryModel.id});
        }

        return response;
    }

    public async getAllCategories(): Promise<ICategory[]> {
        const categoriesModel: CategoryModel[] = await this.categoriesRepository.findAll();
        const response: ICategory[] = this.mapCategoriesModelToCategories(categoriesModel);
        return response;
    }

    public async getSelectedCategories(): Promise<ICategory[]> {
        const allCategories = await this.getAllCategories();
        const response: ICategory[] = allCategories.filter((category: ICategory) => category.selected);
        return response;
    }

    private async getCategoryById(id: number): Promise<CategoryModel> {
        return await this.categoriesRepository.findByPk(id);
    }

    private mapCategoriesModelToCategories(categoriesModel: CategoryModel[]): ICategory[] {
        return categoriesModel.map((categoryModel: CategoryModel) => this.mapCategoryModelToCategory(categoryModel))
    }

    private mapCategoryModelToCategory(categoryModel: CategoryModel): ICategory {
        const category: ICategory = {
            id: categoryModel.id,
            categoryDescription: categoryModel.categoryDescription,
            categoryName: categoryModel.categoryName,
            urlImage: categoryModel.urlImage,
            selected: categoryModel.selected
        }
        return category;
    }
}
