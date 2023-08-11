export interface IPhoneModel {
  id: number;
  phoneNumber: string;
}

export type IPhone = IPhoneModel;

export interface IGetAllPhonesResponse {
  phones: IPhone[];
}

export interface IEditPhoneResponse {
  phoneNumber: string;
}

export type ICreatePhoneResponse = IPhone;
