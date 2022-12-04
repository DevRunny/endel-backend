import {Body, Controller, Get, Post} from '@nestjs/common';
import {MapStateService} from "./map-state.service";
import {MapStateCreateDto} from "./dto/map-state-create.dto";

@Controller('mapState')
export class MapStateController {
  constructor(private mapStateService: MapStateService) {}

  @Post()
  create(@Body() mapStateDto: MapStateCreateDto) {
    return this.mapStateService.createMapState(mapStateDto);
  }
}
