import { Body, Controller, Get, Post } from '@nestjs/common';
import { MapStateService } from './map-state.service';
import {
  IEditMapStateCenterResponse,
  IEditMapStateZoomResponse,
  IGetMapStateResponse,
  IMapStateModel,
} from './interface/map-state.interface';
import {
  EditMapStateCenterDto,
  EditMapStateZoomDto,
} from './dto/map-state-edit.dto';
import { MapStateCreateDto } from './dto/map-state-create.dto';

// @UseGuards(JwtAuthGuard)
@Controller('mapState')
export class MapStateController {
  constructor(private mapStateService: MapStateService) {}

  @Post('createMapState')
  create(@Body() mapStateDto: MapStateCreateDto): Promise<IMapStateModel> {
    return this.mapStateService.createMapState(mapStateDto);
  }

  @Get('getMapState')
  getMapState(): Promise<IGetMapStateResponse> {
    return this.mapStateService.getMapState();
  }

  @Post('editMapStateCenter')
  editMapStateCenter(
    @Body() dto: EditMapStateCenterDto,
  ): Promise<IEditMapStateCenterResponse> {
    console.log(dto);
    return this.mapStateService.setMapStateCenter(dto);
  }

  @Post('editMapStateZoom')
  editMapStateZoom(
    @Body() dto: EditMapStateZoomDto,
  ): Promise<IEditMapStateZoomResponse> {
    console.log(dto);
    return this.mapStateService.setMapStateZoom(dto);
  }
}
