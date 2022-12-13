import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { UserModel } from 'src/user/user.model';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/auth.dto';
import * as bcrypt from 'bcryptjs'
import { ILoginResponse, ILoginTokenData } from './interface/auth.interface';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {}

    public async login(dto: LoginDto) {
        const user: UserModel = await this.validateUser(dto);
        return this.generateToken(user);
    }

    private async validateUser(dto: LoginDto): Promise<UserModel> {
        const user: UserModel = await this.userService.getUserByEmail(dto.email);
        const isEqualsPassword: boolean = await bcrypt.compare(dto.password, user.password);

        if (user && isEqualsPassword) {
            return user;
        }
        
        throw new UnauthorizedException({message: 'Неправильный email или пароль'});
    }

    private generateToken(user: UserModel): ILoginResponse {
        const tokenData: ILoginTokenData = { id: user.id, email: user.email, };
        const token: string = this.jwtService.sign(tokenData);
        const response: ILoginResponse = {token};
        return response;
    }
}
