import {Body, Controller, Get, Post} from '@nestjs/common';
import {PointsService} from "./points.service";
import {pointsCreateDto} from "./dto/points-create.dto";

@Controller('points')
export class PointsController {
  constructor(private pointsService: PointsService) {}

  @Post()
  create(@Body() pointsDto: pointsCreateDto){
    return this.pointsService.createPoints(pointsDto)
  }


  @Get()
  getAll() {
    return this.pointsService.getAllPoints()
  }
}
