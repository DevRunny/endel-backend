import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IEmail {
  email: string
}

@Table({tableName: "emails"})
export class EmailsModel extends Model<EmailsModel, IEmail> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number
  
  @Column({type: DataType.STRING})
  email: string
}