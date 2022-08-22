import { IsEmail, isNotEmpty, IsNumber, IsPhoneNumber, IsString, length, Length } from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  public email: string;

  @Length(8)
  @IsString()
  public password: string;
}
