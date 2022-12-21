import {HttpStatus} from "@nestjs/common";

export interface IPhoneModel {
  id: number;
  phoneNumber: string;
};

export interface IPhone extends IPhoneModel {};

export interface IGetAllPhonesResponse {
  phones: IPhone[];
};

export interface IEditPhoneResponse {
  phoneNumber: string;
};

export interface ICreatePhoneResponse extends IPhone{};