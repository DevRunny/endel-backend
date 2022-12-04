import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {PointModel} from "./points.model";
import {pointsCreateDto} from "./dto/points-create.dto";
import { IEditPointAddressResponse, IEditPointCoordinateResponse, IEditPointWorkingModeResponse, IPoint, IPointModel } from './interface/points.interface';
import { EditPointAddressDto, EditPointCoordinateDto, EditPointWorkingModeDto } from './dto/points-edit.dto';

@Injectable()
export class PointsService {
  constructor(@InjectModel(PointModel) private pointsRepository: typeof PointModel) {}

  public async createPoints(dto: pointsCreateDto): Promise<PointModel> {
    return await this.pointsRepository.create(dto);
  }

  public async getAllPoints(): Promise<IPoint[]> {
    const allPointsModel: IPointModel[] = await this.pointsRepository.findAll();
    const allPoints: IPoint[] = this.mapPointsModelToPoints(allPointsModel);
    return allPoints;
  }

  public async setPointAddress(dto: EditPointAddressDto): Promise<IEditPointAddressResponse> {
    const pointModelById = await this.getPointModelById(dto.id);
    pointModelById.address = dto.address;
    await pointModelById.save();

    const response: IEditPointAddressResponse = {
      address: pointModelById.address
    };

    return response;
  }

  public async setPointCoordinate(dto: EditPointCoordinateDto): Promise<IEditPointCoordinateResponse> {
    const pointModelById = await this.getPointModelById(dto.id);
    pointModelById.coordinateX = dto.coordinateX;
    pointModelById.coordinateY = dto.coordinateY;
    await pointModelById.save();

    const coordinateArray: number[] = [pointModelById.coordinateX, pointModelById.coordinateY];

    const response: IEditPointCoordinateResponse = {
      coordinate: coordinateArray
    }

    return response;
  }

  public async setWorkingMode(dto: EditPointWorkingModeDto): Promise<IEditPointWorkingModeResponse> {
    const pointModelById = await this.getPointModelById(dto.id);
    pointModelById.workingMode = dto.workingMode;
    await pointModelById.save();

    const response: IEditPointWorkingModeResponse = {
      workingMode: pointModelById.workingMode
    }

    return response;
  }

  private async getPointModelById(id: number): Promise<PointModel | null> {
    return await this.pointsRepository.findByPk(id);
  }

  private mapPointsModelToPoints(models: IPointModel[]): IPoint[] {
    return models.map((model: IPointModel) => this.mapPointModelToPoint(model));
  }

  private mapPointModelToPoint(model: IPointModel): IPoint {
    const point: IPoint = {
      address: model.address,
      coordinateX: model.coordinateX,
      coordinateY: model.coordinateY,
      workingMode: model.workingMode
    }

    return point;
  }
}
