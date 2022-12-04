import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {MapStateModel} from "./map-state.model";
import {MapStateCreateDto} from "./dto/map-state-create.dto";

@Injectable()
export class MapStateService {
  constructor(@InjectModel(MapStateModel) private mapStateRepository: typeof MapStateModel) {}

  async createMapState(dto: MapStateCreateDto) {
    return await this.mapStateRepository.create(dto);
  }

  async getMapState() {
    return await this.mapStateRepository.findAll()
  }

}
