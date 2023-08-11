export interface IMapStateModel {
  centerX: number;
  centerY: number;
  zoom: number;
}

export type IMapState = IMapStateModel;

export type IGetMapStateResponse = IMapState;

export interface IEditMapStateCenterResponse {
  centerX: number;
  centerY: number;
}

export interface IEditMapStateZoomResponse {
  zoom: number;
}
