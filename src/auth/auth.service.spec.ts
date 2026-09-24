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

import { ConflictException, UnauthorizedException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from './auth.service';
import { TokenService } from './jwt.service';
import { PasswordService } from './password.service';
import { LoginDto } from './Types/DTO/login.dto';
import { RegisterDto } from './Types/DTO/register.dto';
import { RegisterRole } from './Types/Enum/register.enum';

describe('AuthService', () => {
  let service: AuthService;

  const prisma = {
    user: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
  };
  const passwordService = {
    hashPassword: jest.fn(),
    checkPassword: jest.fn(),
  };
  const tokenService = {
    generateAccessToken: jest.fn(),
    generateRefreshToken: jest.fn(),
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
  const user = {
    id: 'user-1',
    email: registerDto.email,
    password: 'hashed-password',
    role: RegisterRole.PATIENT,
    firstName: registerDto.firstName,
    lastName: registerDto.lastName,
    phone: registerDto.phone,
    createdAt: new Date('2026-01-01T00:00:00.000Z'),
    updatedAt: new Date('2026-01-01T00:00:00.000Z'),
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: PrismaService, useValue: prisma },
        { provide: PasswordService, useValue: passwordService },
        { provide: TokenService, useValue: tokenService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    tokenService.generateAccessToken.mockResolvedValue({
      access_token: 'access-token',
      token_type: 'Bearer',
    });
    tokenService.generateRefreshToken.mockResolvedValue('refresh-token');
  });

  describe('register', () => {
    it('creates a user with a hashed password and returns sanitized user data and tokens', async () => {
      prisma.user.findUnique.mockResolvedValue(null);
      passwordService.hashPassword.mockResolvedValue(user.password);
      prisma.user.create.mockResolvedValue(user);

      await expect(service.register(registerDto)).resolves.toEqual({
        user: {
          id: user.id,
          email: user.email,
          role: user.role,
          firstName: user.firstName,
          lastName: user.lastName,
          phone: user.phone,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
        access_token: 'access-token',
        refresh_token: 'refresh-token',
        token_type: 'Bearer',
      });
      expect(prisma.user.findUnique).toHaveBeenCalledWith({
        where: { email: registerDto.email },
      });
      expect(passwordService.hashPassword).toHaveBeenCalledWith(
        registerDto.password,
      );
      expect(prisma.user.create).toHaveBeenCalledWith({
        data: { ...registerDto, password: user.password },
      });
      expect(tokenService.generateAccessToken).toHaveBeenCalledWith(user);
      expect(tokenService.generateRefreshToken).toHaveBeenCalledWith(user.id);
    });

    it('rejects a duplicate email before hashing, creating, or issuing tokens', async () => {
      prisma.user.findUnique.mockResolvedValue(user);

      await expect(service.register(registerDto)).rejects.toThrow(
        ConflictException,
      );
      await expect(service.register(registerDto)).rejects.toThrow(
        'User already exists',
      );
      expect(passwordService.hashPassword).not.toHaveBeenCalled();
      expect(prisma.user.create).not.toHaveBeenCalled();
      expect(tokenService.generateAccessToken).not.toHaveBeenCalled();
      expect(tokenService.generateRefreshToken).not.toHaveBeenCalled();
    });

    it('propagates database lookup failures without attempting account creation', async () => {
      const databaseError = new Error('database unavailable');
      prisma.user.findUnique.mockRejectedValue(databaseError);

      await expect(service.register(registerDto)).rejects.toBe(databaseError);
      expect(passwordService.hashPassword).not.toHaveBeenCalled();
      expect(prisma.user.create).not.toHaveBeenCalled();
    });
  });

  describe('login', () => {
    it('returns sanitized user data and tokens for valid credentials', async () => {
      prisma.user.findUnique.mockResolvedValue(user);
      passwordService.checkPassword.mockResolvedValue(true);

      await expect(service.login(loginDto)).resolves.toEqual({
        user: {
          id: user.id,
          email: user.email,
          role: user.role,
          firstName: user.firstName,
          lastName: user.lastName,
          phone: user.phone,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
        access_token: 'access-token',
        refresh_token: 'refresh-token',
        token_type: 'Bearer',
      });
      expect(prisma.user.findUnique).toHaveBeenCalledWith({
        where: { email: loginDto.email },
      });
      expect(passwordService.checkPassword).toHaveBeenCalledWith(
        user.password,
        loginDto.password,
      );
      expect(tokenService.generateAccessToken).toHaveBeenCalledWith(user);
      expect(tokenService.generateRefreshToken).toHaveBeenCalledWith(user.id);
    });

    it('rejects a login for an unknown email without checking a password', async () => {
      prisma.user.findUnique.mockResolvedValue(null);

      await expect(service.login(loginDto)).rejects.toThrow(
        UnauthorizedException,
      );
      await expect(service.login(loginDto)).rejects.toThrow(
        'Invalid credentials',
      );
      expect(passwordService.checkPassword).not.toHaveBeenCalled();
      expect(tokenService.generateAccessToken).not.toHaveBeenCalled();
    });

    it('rejects a login when the supplied password does not match', async () => {
      prisma.user.findUnique.mockResolvedValue(user);
      passwordService.checkPassword.mockResolvedValue(false);

      await expect(service.login(loginDto)).rejects.toThrow(
        UnauthorizedException,
      );
      await expect(service.login(loginDto)).rejects.toThrow(
        'Invalid credentials',
      );
      expect(tokenService.generateAccessToken).not.toHaveBeenCalled();
      expect(tokenService.generateRefreshToken).not.toHaveBeenCalled();
    });
  });
});
