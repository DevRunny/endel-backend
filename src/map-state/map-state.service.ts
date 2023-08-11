import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { MapStateModel } from './map-state.model';
import {
  IEditMapStateCenterResponse,
  IEditMapStateZoomResponse,
  IGetMapStateResponse,
} from './interface/map-state.interface';
import {
  EditMapStateCenterDto,
  EditMapStateZoomDto,
} from './dto/map-state-edit.dto';
import { MapStateCreateDto } from './dto/map-state-create.dto';

@Injectable()
export class MapStateService {
  constructor(
    @InjectModel(MapStateModel)
    private mapStateRepository: typeof MapStateModel,
  ) {}

  async getMapState(): Promise<IGetMapStateResponse> {
    const mapStateModel: MapStateModel = await this.mapStateRepository.findByPk(
      1,
    );
    const mapStateObj: IGetMapStateResponse = {
      centerX: mapStateModel.centerX,
      centerY: mapStateModel.centerY,
      zoom: mapStateModel.zoom,
    };

    return mapStateObj;
  }

  public async createMapState(dto: MapStateCreateDto): Promise<MapStateModel> {
    return await this.mapStateRepository.create(dto);
  }

  public async setMapStateCenter(
    dto: EditMapStateCenterDto,
  ): Promise<IEditMapStateCenterResponse> {
    const mapStateModel: MapStateModel = await this.mapStateRepository.findByPk(
      1,
    );
    console.log(mapStateModel);
    mapStateModel.centerX = dto.centerX;
    mapStateModel.centerY = dto.centerY;
    await mapStateModel.save();

    const response: IEditMapStateCenterResponse = {
      centerX: mapStateModel.centerX,
      centerY: mapStateModel.centerY,
    };
    console.log(response);
    return response;
  }

  public async setMapStateZoom(
    dto: EditMapStateZoomDto,
  ): Promise<IEditMapStateZoomResponse> {
    const mapStateModel: MapStateModel = await this.mapStateRepository.findByPk(
      1,
    );
    mapStateModel.zoom = dto.zoom;
    await mapStateModel.save();
    const response: IEditMapStateZoomResponse = {
      zoom: mapStateModel.zoom,
    };
    return response;
  }
}
