jest.mock(
  'src/prisma/prisma.service',
  () => ({ PrismaService: class PrismaService {} }),
  { virtual: true },
);
jest.mock(
  'src/redis/redis.service',
  () => ({ RedisService: class RedisService {} }),
  { virtual: true },
);

import { ConflictException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LoginDto } from './Types/DTO/login.dto';
import { RegisterDto } from './Types/DTO/register.dto';
import { RegisterRole } from './Types/Enum/register.enum';

describe('AuthController', () => {
  let controller: AuthController;

  const authService = {
    register: jest.fn(),
    login: jest.fn(),
  };
  const registerDto: RegisterDto = {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phone: '09123456789',
    password: 'SecurePass123!',
    role: RegisterRole.PATIENT,
  };
  const loginDto: LoginDto = {
    email: registerDto.email,
    password: registerDto.password,
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [{ provide: AuthService, useValue: authService }],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('delegates registration and returns the service response unchanged', async () => {
    const response = {
      user: {
        id: 'user-1',
        email: registerDto.email,
        role: RegisterRole.PATIENT,
      },
      access_token: 'access-token',
      refresh_token: 'refresh-token',
      token_type: 'Bearer',
    };
    authService.register.mockResolvedValue(response);

    await expect(controller.register(registerDto)).resolves.toBe(response);
    expect(authService.register).toHaveBeenCalledWith(registerDto);
  });

  it('delegates login and returns the service response unchanged', async () => {
    const response = {
      user: { id: 'user-1', email: loginDto.email, role: RegisterRole.PATIENT },
      access_token: 'access-token',
      refresh_token: 'refresh-token',
      token_type: 'Bearer',
    };
    authService.login.mockResolvedValue(response);

    await expect(controller.login(loginDto)).resolves.toBe(response);
    expect(authService.login).toHaveBeenCalledWith(loginDto);
  });

  it('propagates authentication service errors', async () => {
    authService.register.mockRejectedValue(
      new ConflictException('User already exists'),
    );

    await expect(controller.register(registerDto)).rejects.toThrow(
      'User already exists',
    );
  });
});
