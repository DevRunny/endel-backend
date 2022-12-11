export class CreateCategoryDto {
    readonly categoryDescription: string;
    readonly categoryName: string;
    readonly urlImage: string;
    readonly selected?: boolean;
}