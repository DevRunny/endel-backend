export interface IAboutCompanyModel {
    nameCompany: string;
    requisites: IRequisites
};

interface IRequisites {
    inn: string;
    ogrn: string;
    numRegistry: string;
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

export interface IEditNumRegistryResponse {
    numRegistry: string;
};