import { Column, DataType, Model, Table } from "sequelize-typescript";
import {IPhoneModel} from "./interface/phones.interface";

@Table({tableName: "phones"})
export class PhoneModel extends Model<PhoneModel, IPhoneModel> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number

  @Column({type: DataType.STRING})
  phoneNumber: string
}