import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({tableName: "contacts"})
export class ContactsModel extends Model<ContactsModel> {

}