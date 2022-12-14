import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from './user.model';
import * as bcrypt from "bcryptjs"
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(UserModel) private userRepository: typeof UserModel) {}

    public async createUser(dto: CreateUserDto): Promise<UserModel> {
        const newUser: UserModel = await this.userRepository.create(dto);
        const hashPassword: string = bcrypt.hashSync('admin123', 10);
        newUser.password = hashPassword;
        await newUser.save();
        return newUser;
    }

    public async getUserByEmail(email: string): Promise<UserModel> {
        return await this.userRepository.findOne({where: {email}});
    }
}
