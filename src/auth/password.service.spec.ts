jest.mock('bcrypt', () => ({
  hash: jest.fn(),
  compare: jest.fn(),
}));

import { compare, hash } from 'bcrypt';
import { PasswordService } from './password.service';

describe('PasswordService', () => {
  let service: PasswordService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new PasswordService();
  });

  it('hashes passwords with twelve bcrypt rounds', async () => {
    jest.mocked(hash).mockResolvedValue('hashed-password' as never);

    await expect(service.hashPassword('SecurePass123!')).resolves.toBe(
      'hashed-password',
    );
    expect(hash).toHaveBeenCalledWith('SecurePass123!', 12);
  });

  it('compares a plaintext password against its stored hash', async () => {
    jest.mocked(compare).mockResolvedValue(true as never);

    await expect(
      service.checkPassword('hashed-password', 'SecurePass123!'),
    ).resolves.toBe(true);
    expect(compare).toHaveBeenCalledWith('SecurePass123!', 'hashed-password');
  });

  it('returns false when bcrypt reports a password mismatch', async () => {
    jest.mocked(compare).mockResolvedValue(false as never);

    await expect(
      service.checkPassword('hashed-password', 'WrongPass123!'),
    ).resolves.toBe(false);
  });
});
