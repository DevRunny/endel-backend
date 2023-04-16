export interface IAboutCompanyModel {
    nameCompany: string;
    requisites: IRequisites
};

interface IRequisites {
    inn: string;
    ogrn: string;
    numRegistry: string;
    isOgrnip: boolean;
};

export interface IGetAllInfoAboutCompanyResponse extends IAboutCompanyModel {};

export interface IEditNameCompanyResponse {
    nameCompany: string;
};

export interface IEditInnResponse {
    inn: string;
};

export interface IEditOgrnResponse {
    ogrn: string;
};

export interface IToggleOgrnip {
    isOgrnip: boolean;
}

export interface IEditNumRegistryResponse {
    numRegistry: string;
};