import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'documents' })
export class DocumentModel extends Model<DocumentModel> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  documentName: string;

  @Column({ type: DataType.STRING })
  urlDocument: string;
}
