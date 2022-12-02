import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IPhone {
  phoneNumber: string;
}

@Table({tableName: "phones"})
export class PhonesModel extends Model<PhonesModel, IPhone> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number

  @Column({type: DataType.STRING})
  phoneNumber: string
}