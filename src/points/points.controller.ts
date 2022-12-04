import {Body, Controller, Get, Post} from '@nestjs/common';
import {PointsService} from "./points.service";
import {pointsCreateDto} from "./dto/points-create.dto";
import { IEditPointAddressResponse, IEditPointCoordinateResponse, IEditPointWorkingModeResponse, IPoint, IPointModel } from './interface/points.interface';
import { EditPointAddressDto, EditPointCoordinateDto, EditPointWorkingModeDto } from './dto/points-edit.dto';

@Controller('points')
export class PointsController {
  constructor(private pointsService: PointsService) {}

  @Post('createPoint')
  create(@Body() pointsDto: pointsCreateDto): Promise<IPointModel> {
    return this.pointsService.createPoints(pointsDto)
  }

  @Get('getAllPoints')
  getAllPoints(): Promise<IPoint[]> {
    return this.pointsService.getAllPoints()
  }

  @Post('editAddress')
  editAddress(dto: EditPointAddressDto): Promise<IEditPointAddressResponse> {
    return this.pointsService.setPointAddress(dto);
  }

  @Post('editCoordinate')
  editCoordinate(dto: EditPointCoordinateDto): Promise<IEditPointCoordinateResponse> {
    return this.pointsService.setPointCoordinate(dto);
  }

  @Post('editWorkingMode')
  editWorkingMode(dto: EditPointWorkingModeDto): Promise<IEditPointWorkingModeResponse> {
    return this.pointsService.setWorkingMode(dto);
  }
}
