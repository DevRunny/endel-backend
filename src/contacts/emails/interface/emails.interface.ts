export interface IEmailModel {
  id: number;
  email: string;
};

export interface IEmail extends IEmailModel {};

export interface IGetAllEmailsResponse {
  emails: IEmail[];
};