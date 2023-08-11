export interface IEmailModel {
  id: number;
  email: string;
}

export type IEmail = IEmailModel;

export interface IGetAllEmailsResponse {
  emails: IEmail[];
}

export type IEditEmailResponse = Pick<IEmail, 'email'>;

export type ICreateEmailResponse = IEmail;
