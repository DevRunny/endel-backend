import {Column, DataType, Model, Table} from "sequelize-typescript";

interface IMessenger {
  icon: string
  messengerName: string
  value: string
}

@Table({tableName: "messengers"})
export class MessengersModel extends Model<MessengersModel, IMessenger> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number

  @Column({type: DataType.STRING, allowNull: false})
  icon: string

  @Column({type: DataType.STRING, allowNull: false})
  messengerName: string

  @Column({type: DataType.STRING})
  value: string
}
