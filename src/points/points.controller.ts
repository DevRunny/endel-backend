import {Body, Controller, Delete, Get, Post, UseGuards} from '@nestjs/common';
import {PointsService} from "./points.service";
import {pointsCreateDto} from "./dto/points-create.dto";
import {
  IDeletePointsResponse,
  IEditPointAddressResponse,
  IEditPointCoordinateResponse,
  IEditPointWorkingModeResponse,
  IPoint,
  IPointModel
} from './interface/points.interface';
import { EditPointAddressDto, EditPointCoordinateDto, EditPointWorkingModeDto } from './dto/points-edit.dto';
import {DeletePointsDto} from "./dto/points-delete.dto";
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";

@UseGuards(JwtAuthGuard)
@Controller('points')
export class PointsController {
  constructor(private pointsService: PointsService) {}

  @Post('createPoint')
  create(@Body() pointsDto: pointsCreateDto): Promise<IPointModel> {
    return this.pointsService.createPoints(pointsDto);
  }

  @Get('getAllPoints')
  getAllPoints(): Promise<IPoint[]> {
    return this.pointsService.getAllPoints();
  }

  @Post('editAddress')
  editAddress(@Body() dto: EditPointAddressDto): Promise<IEditPointAddressResponse> {
    return this.pointsService.setPointAddress(dto);
  }

  @Post('editCoordinate')
  editCoordinate(@Body() dto: EditPointCoordinateDto): Promise<IEditPointCoordinateResponse> {
    return this.pointsService.setPointCoordinate(dto);
  }

  @Post('editWorkingMode')
  editWorkingMode(@Body() dto: EditPointWorkingModeDto): Promise<IEditPointWorkingModeResponse> {
    return this.pointsService.setWorkingMode(dto);
  }

  @Delete("deletePoints")
  deletePoints(@Body() dto: DeletePointsDto): Promise<IDeletePointsResponse> {
    return this.pointsService.deletePoints(dto);
  }
}
