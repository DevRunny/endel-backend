export interface ILoginResponse {
  token: string;
  expiresIn: number;
}

export interface ILoginTokenData {
  id: number;
  email: string;
}
