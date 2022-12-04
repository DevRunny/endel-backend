import {HttpStatus} from "@nestjs/common";

export interface IEmailModel {
  id: number;
  email: string;
};

export interface IEmail extends IEmailModel {};

export interface IGetAllEmailsResponse {
  emails: IEmail[];
};

export type IEditEmailResponse = Pick<IEmail, 'email'>;

export interface ICreateEmailResponse extends IEmail {
  statusCode: HttpStatus;
}