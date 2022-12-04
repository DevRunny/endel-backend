export interface IPointModel {
    id: number;
    address: string;
    coordinateX: number;
    coordinateY: number;
    workingMode: string;
}

export interface IDeletePointsResponse {
    message: string;
}

export interface IPoint extends IPointModel{}

export type IEditPointAddressResponse = Pick<IPoint, "address">;

export type IEditPointWorkingModeResponse = Pick<IPoint, "workingMode">;

export interface IEditPointCoordinateResponse {
    coordinate: number[];
};