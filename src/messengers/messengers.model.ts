import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { IMessengerModel } from './interface/messengers.interface';

@Table({ tableName: 'messengers' })
export class MessengerModel extends Model<MessengerModel, IMessengerModel> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  icon: string;

  @Column({ type: DataType.STRING, allowNull: false })
  messengerName: string;

  @Column({ type: DataType.STRING })
  value: string;
}
