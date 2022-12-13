import { IUserModel } from "src/user/interface/user.interface";

export interface ILoginResponse {
    token: string;
};

export interface ILoginTokenData {
    id: number;
    email: string;
}; 