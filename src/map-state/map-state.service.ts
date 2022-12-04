import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {MapStateModel} from "./map-state.model";
import {MapStateCreateDto} from "./dto/map-state-create.dto";
import {
  IEditMapStateCenterResponse,
  IEditMapStateZoomResponse,
  IGetMapStateResponse
} from "./interface/map-state.interface";
import {EditMapStateCenterDto, EditMapStateZoomDto} from "./dto/map-state-edit.dto";

@Injectable()
export class MapStateService {
  constructor(@InjectModel(MapStateModel) private mapStateRepository: typeof MapStateModel) {}

  async getMapState(): Promise<IGetMapStateResponse> {
    const mapStateModel: MapStateModel = await this.mapStateRepository.findByPk(1);
    const response: IGetMapStateResponse = {
      centerX: mapStateModel.centerX,
      centerY: mapStateModel.centerY,
      zoom: mapStateModel.zoom,
    }
    return response;
  }

  public async setMapStateCenter(dto: EditMapStateCenterDto): Promise<IEditMapStateCenterResponse> {
    const mapStateModel: MapStateModel = await this.mapStateRepository.findByPk(1);
    mapStateModel.centerX = dto.centerX;
    mapStateModel.centerY = dto.centerY;
    await mapStateModel.save();
    const response: IEditMapStateCenterResponse = {
      center: [mapStateModel.centerX, mapStateModel.centerY]
    }
    return response;
  }

  public async setMapStateZoom(dto: EditMapStateZoomDto): Promise<IEditMapStateZoomResponse> {
    const mapStateModel: MapStateModel = await this.mapStateRepository.findByPk(1);
    mapStateModel.zoom = dto.zoom;
    await mapStateModel.save();
    const response: IEditMapStateZoomResponse = {
      zoom: mapStateModel.zoom
    }
    return response;
  }

}
