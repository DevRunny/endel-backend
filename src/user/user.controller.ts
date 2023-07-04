import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserModel } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('createUser')
  createUser(@Body() dto: CreateUserDto): Promise<UserModel> {
    return this.userService.createUser(dto);
  }
}
