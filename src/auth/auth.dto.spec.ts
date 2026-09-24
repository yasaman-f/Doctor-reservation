import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { ForgetPasswordDto } from './Types/DTO/forgetPassword.dto';
import { LoginDto } from './Types/DTO/login.dto';
import { RegisterDto } from './Types/DTO/register.dto';
import { RegisterRole } from './Types/Enum/register.enum';

describe('Auth DTO validation', () => {
  it('accepts a valid registration payload', async () => {
    const dto = plainToInstance(RegisterDto, {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phone: '09123456789',
      password: 'SecurePass123!',
      role: RegisterRole.PATIENT,
    });

    await expect(validate(dto)).resolves.toHaveLength(0);
  });

  it('rejects registration fields that violate the declared constraints', async () => {
    const dto = plainToInstance(RegisterDto, {
      firstName: 'J',
      lastName: 'Doe',
      email: 'not-an-email',
      phone: '12345',
      password: 'password',
      role: 'ADMIN',
    });

    const errors = await validate(dto);

    expect(errors.map((error) => error.property)).toEqual(
      expect.arrayContaining([
        'firstName',
        'lastName',
        'email',
        'phone',
        'password',
        'role',
      ]),
    );
  });

  it('rejects malformed login credentials', async () => {
    const dto = plainToInstance(LoginDto, {
      email: 'invalid-email',
      password: 'short',
    });

    const errors = await validate(dto);

    expect(errors.map((error) => error.property)).toEqual(
      expect.arrayContaining(['email', 'password']),
    );
  });

  it('accepts a valid forgot-password email and rejects an invalid one', async () => {
    const validDto = plainToInstance(ForgetPasswordDto, {
      email: 'jane.smith@example.com',
    });
    const invalidDto = plainToInstance(ForgetPasswordDto, {
      email: 'invalid-email',
    });

    await expect(validate(validDto)).resolves.toHaveLength(0);
    await expect(validate(invalidDto)).resolves.toEqual(
      expect.arrayContaining([expect.objectContaining({ property: 'email' })]),
    );
  });
});
