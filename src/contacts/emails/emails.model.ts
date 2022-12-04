import { Column, DataType, Model, Table } from "sequelize-typescript";
import {IEmail, IEmailModel} from "./interface/emails.interface";

@Table({tableName: "emails"})
export class EmailsModel extends Model<EmailsModel, IEmailModel> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number
  
  @Column({type: DataType.STRING})
  email: string
}