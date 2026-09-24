jest.mock('crypto', () => ({
  randomUUID: jest.fn(() => '550e8400-e29b-41d4-a716-446655440000'),
}));
jest.mock(
  'src/redis/redis.service',
  () => ({ RedisService: class RedisService {} }),
  { virtual: true },
);
jest.mock('src/prisma/generated/prisma/client', () => ({}), { virtual: true });

import { JwtService } from '@nestjs/jwt';
import { randomUUID } from 'crypto';
import { RedisService } from 'src/redis/redis.service';
import { TokenService } from './jwt.service';
import { RegisterRole } from './Types/Enum/register.enum';

describe('TokenService', () => {
  let service: TokenService;

  const jwtService = { sign: jest.fn() };
  const redisService = { set: jest.fn() };
  const user = {
    id: 'user-1',
    email: 'jane.smith@example.com',
    password: 'hashed-password',
    role: RegisterRole.PATIENT,
    firstName: 'Jane',
    lastName: 'Smith',
    phone: '09123456789',
    createdAt: new Date('2026-01-01T00:00:00.000Z'),
    updatedAt: new Date('2026-01-01T00:00:00.000Z'),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    service = new TokenService(
      jwtService as unknown as JwtService,
      redisService as unknown as RedisService,
    );
  });

  it('generates a bearer access token with the user identity payload', async () => {
    jwtService.sign.mockReturnValue('signed-access-token');

    await expect(service.generateAccessToken(user)).resolves.toEqual({
      access_token: 'signed-access-token',
      token_type: 'Bearer',
    });
    expect(jwtService.sign).toHaveBeenCalledWith(
      { sub: user.id, role: user.role, email: user.email },
      { expiresIn: '15m' },
    );
  });

  it('generates and stores a seven-day refresh token for the user', async () => {
    redisService.set.mockResolvedValue('OK');

    await expect(service.generateRefreshToken(user.id)).resolves.toBe(
      '550e8400-e29b-41d4-a716-446655440000',
    );
    expect(randomUUID).toHaveBeenCalledTimes(1);
    expect(redisService.set).toHaveBeenCalledWith(
      `refresh:${user.id}`,
      '550e8400-e29b-41d4-a716-446655440000',
      'EX',
      7 * 24 * 60 * 60,
    );
  });

  it('rejects refresh-token generation when Redis cannot persist the token', async () => {
    const redisError = new Error('Redis unavailable');
    redisService.set.mockRejectedValue(redisError);

    await expect(service.generateRefreshToken(user.id)).rejects.toBe(
      redisError,
    );
  });
});
