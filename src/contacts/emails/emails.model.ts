import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { IEmailModel } from './interface/emails.interface';

@Table({ tableName: 'emails' })
export class EmailModel extends Model<EmailModel, IEmailModel> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  email: string;
}
