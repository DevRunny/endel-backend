import { Controller } from '@nestjs/common';
import {PointsService} from "./points.service";

@Controller('points')
export class PointsController {
  constructor(private pointsService: PointsService) {}
}
