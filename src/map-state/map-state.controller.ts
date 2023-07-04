import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { MapStateService } from './map-state.service';
import {
  IEditMapStateCenterResponse,
  IEditMapStateZoomResponse,
  IGetMapStateResponse,
} from './interface/map-state.interface';
import {
  EditMapStateCenterDto,
  EditMapStateZoomDto,
} from './dto/map-state-edit.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

// @UseGuards(JwtAuthGuard)
@Controller('mapState')
export class MapStateController {
  constructor(private mapStateService: MapStateService) {}

  @Get('getMapState')
  getMapState(): Promise<IGetMapStateResponse> {
    return this.mapStateService.getMapState();
  }

  @Post('editMapStateCenter')
  editMapStateCenter(
    @Body() dto: EditMapStateCenterDto,
  ): Promise<IEditMapStateCenterResponse> {
    return this.mapStateService.setMapStateCenter(dto);
  }

  @Post('editMapStateZoom')
  editMapStateZoom(
    @Body() dto: EditMapStateZoomDto,
  ): Promise<IEditMapStateZoomResponse> {
    return this.mapStateService.setMapStateZoom(dto);
  }
}
