import { Column, DataType, Model, Table } from "sequelize-typescript";
import { IAboutCompanyModel } from "./interface/about-company.interface";

@Table({tableName: "about-company"})
export class AboutCompanyModel extends Model<AboutCompanyModel, IAboutCompanyModel> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true})
    nameCompany: string;

    @Column({type: DataType.STRING, unique: true})
    inn: string;

    @Column({type: DataType.STRING, unique: true})
    ogrn: string;

    @Column({type: DataType.STRING, unique: true})
    numRegistry: string;
}