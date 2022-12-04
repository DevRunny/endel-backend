import { Column, DataType, Model, Table } from "sequelize-typescript";
import {IPhone} from "./interface/phones.interface";

@Table({tableName: "phones"})
export class PhonesModel extends Model<PhonesModel, IPhone> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number

  @Column({type: DataType.STRING})
  phoneNumber: string
}