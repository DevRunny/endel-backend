import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { IPointModel } from './interface/points.interface';

@Table({ tableName: 'points' })
export class PointModel extends Model<PointModel, IPointModel> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  address: string;

  @Column({ type: DataType.FLOAT, allowNull: false })
  coordinateX: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  coordinateY: number;

  @Column({ type: DataType.STRING })
  workingMode: string;
}
