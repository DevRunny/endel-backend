import {Column, DataType, Model, Table} from "sequelize-typescript";

interface IPoint {
  address: string
  coordinateX: number
  coordinateY: number
  workingMode: string
}

@Table({tableName: "points"})
export class PointsModel extends Model<PointsModel, IPoint> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number

  @Column({type: DataType.STRING})
  address: string

  @Column({type:DataType.FLOAT, allowNull: false})
  coordinateX: number

  @Column({type:DataType.FLOAT, allowNull: false})
  coordinateY: number

  @Column({type: DataType.STRING})
  workingMode: string
}