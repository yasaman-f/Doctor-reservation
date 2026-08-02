import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './Types/DTO/register.dto';
import { PasswordService } from './password.service';
import { LoginDto } from './Types/DTO/login.dto';
import { TokenService } from './jwt.service';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private Pass: PasswordService,
        private token: TokenService
    ) {}

    async register(userDto: RegisterDto){
        const existUser = await this.prisma.user.findUnique({ where: { email: userDto.email } })

        if( existUser ){
            throw new ConflictException('User already exists');
        }
        const hashedPass = await this.Pass.hashPassword(userDto.password)

        const newUser = await this.prisma.user.create({data: { ...userDto, password: hashedPass}})

        const accessToken = await this.token.generateAccessToken(newUser);
        const refreshToken = await this.token.generateRefreshToken(newUser.id);

        const { password, ...result } = newUser;
        return {
            user: result,
            access_token: accessToken.access_token,
            refresh_token: refreshToken,
            token_type: 'Bearer',
        };
    }
    async login(userDto: LoginDto){
        const user = await this.prisma.user.findUnique({ where: { email: userDto.email } })

        if( !user ){
            throw new UnauthorizedException('Invalid credentials');
        }

        const isMatch = await this.Pass.checkPassword(user.password, userDto.password)

        if( !isMatch ){
            throw new UnauthorizedException('Invalid credentials');
        }

        const accessToken = await this.token.generateAccessToken(user);
        const refreshToken = await this.token.generateRefreshToken(user.id);

        const { password, ...result } = user;
        return {
            user: result,
            access_token: accessToken.access_token,
            refresh_token: refreshToken,
            token_type: 'Bearer',
        };
    }
}
