import {Column, DataType, Model, Table} from "sequelize-typescript";
import {IMapStateModel} from "./interface/map-state.interface";

@Table({tableName: "map-state"})
export class MapStateModel extends Model<MapStateModel, IMapStateModel> {
  @Column({type: DataType.FLOAT, allowNull: false})
  centerX: number

  @Column({type: DataType.FLOAT, allowNull: false})
  centerY: number

  @Column({type: DataType.INTEGER, allowNull: false})
  zoom: number
}