import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { LoginRequest } from '../src/app.dto';

const data = {
  email: 'abc@gmail.com',
  password: 'a4e32378',
  confirmPassword: 'a4e32378',
  confirmPassword1: 'a4e32378',
};

describe('AppController ', () => {
  it('should transform success', async () => {
    const loginRequest = plainToInstance(LoginRequest, data, {
      exposeDefaultValues: true,
    });

    const errors = await validate(loginRequest).catch((error) => {
      console.error(error);
      return null;
    });

    expect(loginRequest).toMatchObject({
      email: 'abc@gmail.com',
      password: 'a4e32378',
    });
    expect(errors.length).toBe(0);
  });

  it('should transform failed', async () => {
    const loginRequest = plainToInstance(LoginRequest, {});

    const errors = await validate(loginRequest).catch((error) => {
      console.error(error);
      return null;
    });

    console.log('debug isValid', errors);

    expect(errors.length).toBeGreaterThan(0);
  });
});
