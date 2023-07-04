export interface IAccreditationModel {
  id: number;
  categoryDescription: string;
  categoryName: string;
  urlImage: string;
  selected: boolean;
}

export type ICategory = IAccreditationModel;

export interface ISelectCategoriesResponse {
  id: number;
}
