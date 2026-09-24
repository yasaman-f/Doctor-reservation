import { UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { RegisterRole } from '../Types/Enum/register.enum';
import { JwtStrategy } from './jwt.steategy';

describe('JwtStrategy', () => {
  let strategy: JwtStrategy;

  const prisma = {
    user: {
      findUnique: jest.fn(),
    },
  };
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
  const originalJwtSecret = process.env.JWT_SECRET;

  beforeEach(() => {
    jest.clearAllMocks();
    process.env.JWT_SECRET = 'unit-test-secret';
    strategy = new JwtStrategy(prisma as unknown as PrismaService);
  });

  afterAll(() => {
    if (originalJwtSecret === undefined) {
      delete process.env.JWT_SECRET;
    } else {
      process.env.JWT_SECRET = originalJwtSecret;
    }
  });

  it('configures passport-jwt to reject expired tokens', () => {
    const passportJwtStrategy = strategy as unknown as {
      _verifOpts: { ignoreExpiration: boolean };
    };

    expect(passportJwtStrategy._verifOpts.ignoreExpiration).toBe(false);
  });

  it('returns the current user without the password for a valid JWT payload', async () => {
    prisma.user.findUnique.mockResolvedValue(user);

    await expect(
      strategy.validate({ sub: user.id, role: user.role, email: user.email }),
    ).resolves.toEqual({
      id: user.id,
      email: user.email,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: { id: user.id },
    });
  });

  it('rejects a validly signed token whose user no longer exists', async () => {
    prisma.user.findUnique.mockResolvedValue(null);

    await expect(
      strategy.validate({ sub: user.id, role: user.role, email: user.email }),
    ).rejects.toThrow(UnauthorizedException);
    await expect(
      strategy.validate({ sub: user.id, role: user.role, email: user.email }),
    ).rejects.toThrow('User no longer exists');
  });
});
