import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { randomUUID } from "crypto";
import { User } from "src/prisma/generated/prisma/client";
import { RedisService } from "src/redis/redis.service";

@Injectable()
export class TokenService {
    constructor(
        private jwtService: JwtService,
        private redisService: RedisService,
    ) {}
    async generateAccessToken(user: User) {
        const payload = { sub: user.id, role: user.role, email: user.email };
        const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
        return { access_token: accessToken, token_type: 'Bearer' };
    }
    async generateRefreshToken(userId: string) {
        const refreshToken = randomUUID();
        const key = `refresh:${userId}`;
        const sevenDaysInSeconds = 7 * 24 * 60 * 60;
        await this.redisService.set(key, refreshToken, 'EX', sevenDaysInSeconds);
        return refreshToken;
    }
}
