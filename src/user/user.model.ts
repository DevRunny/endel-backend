import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'users'})
export class UserModel extends Model<UserModel> {
    @Column({type: DataType.INTEGER, autoIncrement: true, unique: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true})
    email: string;

    @Column({type: DataType.STRING})
    password: string;
}