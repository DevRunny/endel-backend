import { Column, DataType, Model, Table } from "sequelize-typescript";
import { IAccreditationModel } from "./interface/accreditation.interface";

@Table({tableName: 'categories'})
export class CategoryModel extends Model<CategoryModel, IAccreditationModel> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    categoryDescription: string;

    @Column({type: DataType.STRING})
    categoryName: string;

    @Column({type: DataType.STRING})
    urlImage: string;

    @Column({type: DataType.BOOLEAN, allowNull: true})
    selected: boolean;
}