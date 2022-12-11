export interface IAccreditationModel {
    id: number;
    categoryDescription: string;
    categoryName: string;
    urlImage: string;
    selected: boolean;
};

export interface ICategory extends IAccreditationModel {};

export interface ISelectCategoriesResponse {
    id: number;
}