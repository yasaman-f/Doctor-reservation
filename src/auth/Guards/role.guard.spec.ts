import { ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RolesGuard } from './role.guard';

describe('RolesGuard', () => {
  const reflector = { getAllAndOverride: jest.fn() };
  const context = {
    getHandler: jest.fn(),
    getClass: jest.fn(),
    switchToHttp: jest.fn(),
  };
  let guard: RolesGuard;

  beforeEach(() => {
    jest.clearAllMocks();
    guard = new RolesGuard(reflector as unknown as Reflector);
  });

  it('allows routes with no role metadata', () => {
    reflector.getAllAndOverride.mockReturnValue(undefined);

    expect(guard.canActivate(context as unknown as ExecutionContext)).toBe(
      true,
    );
    expect(context.switchToHttp).not.toHaveBeenCalled();
  });

  it('allows a user with a required role', () => {
    reflector.getAllAndOverride.mockReturnValue(['DOCTOR']);
    context.switchToHttp.mockReturnValue({
      getRequest: () => ({ user: { role: 'DOCTOR' } }),
    });

    expect(guard.canActivate(context as unknown as ExecutionContext)).toBe(
      true,
    );
    expect(reflector.getAllAndOverride).toHaveBeenCalledWith('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
  });

  it('rejects a user without a required role', () => {
    reflector.getAllAndOverride.mockReturnValue(['DOCTOR']);
    context.switchToHttp.mockReturnValue({
      getRequest: () => ({ user: { role: 'PATIENT' } }),
    });

    expect(() =>
      guard.canActivate(context as unknown as ExecutionContext),
    ).toThrow(ForbiddenException);
    expect(() =>
      guard.canActivate(context as unknown as ExecutionContext),
    ).toThrow('You do not have permission to access this resource');
  });
});
