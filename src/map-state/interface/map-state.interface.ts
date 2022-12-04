export interface IMapStateModel {
  centerX: number;
  centerY: number;
  zoom: number;
}

export interface IMapState extends IMapStateModel {}

export interface IGetMapStateResponse extends IMapState {}

export interface IEditMapStateCenterResponse {
  center: number[];
}

export interface IEditMapStateZoomResponse {
  zoom: number;
}