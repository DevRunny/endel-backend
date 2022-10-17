import {Column, DataType, Model, Table} from "sequelize-typescript";

interface IPoint {
  address: string
  coordinate: number[]
  workingMode: string
}

@Table({tableName: "points"})
export class PointsModel extends Model<PointsModel, IPoint> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number

  @Column({type: DataType.STRING})
  address: string

  @Column({type:DataType.INTEGER, allowNull: false})
  coordinate: number[]

  @Column({type: DataType.STRING})
  workingMode: string
}