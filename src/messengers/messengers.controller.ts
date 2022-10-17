import { Controller } from '@nestjs/common';
import {MessengersService} from "./messengers.service";

@Controller('messengers')
export class MessengersController {
  constructor(private messengersService: MessengersService) {}
}
