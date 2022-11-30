import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {PointsModel} from "./points.model";
import {pointsCreateDto} from "./dto/points-create.dto";

@Injectable()
export class PointsService {
  constructor(@InjectModel(PointsModel) private pointsRepository: typeof PointsModel) {}

  async createPoints(dto: pointsCreateDto) {
    return await this.pointsRepository.create(dto);
  }

  async getAllPoints() {
    return await this.pointsRepository.findAll();
  }
}
