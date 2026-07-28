import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { RegisterDto } from './Types/DTO/register.dto';
import { PasswordService } from './password.service';
import { LoginDto } from './Types/DTO/login.dto';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private Pass: PasswordService) {}

    async register(userDto: RegisterDto){
        const existUser = await this.prisma.user.findUnique({ where: { email: userDto.email } })

        if( existUser ){
            throw new ConflictException('User already exists');
        }
        const hashedPass = await this.Pass.hashPassword(userDto.password)

        const newUser = await this.prisma.user.create({data: { ...userDto, password: hashedPass}})

        const { password, ...result } = newUser;
        return result;
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

        const { password, ...result } = user;
        return result;
    }
}
