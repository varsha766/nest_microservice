import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateAuthDto {
  @IsString()
  @IsNotEmpty()
  userId: string;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class CreateTokenDto {
  @IsString()
  @IsNotEmpty()
  userId: string;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
