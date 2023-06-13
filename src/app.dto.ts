import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

// @Exclude()
export class RegisterRequest {
  // @Expose()
  @IsNotEmpty()
  @IsString()
  @MaxLength(200)
  email: string;

  // @Expose()
  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  password: string;

  // @Expose()
  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  confirmPassword: string;
}

@Exclude()
export class LoginRequest {
  @Expose()
  @IsNotEmpty()
  @IsString()
  @MaxLength(200)
  email: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  password: string;
}
