import { IsEmail, isNotEmpty, IsNumber, IsPhoneNumber, IsString, length, Length } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  @Length(2, 128)
  public firstname: string;

  @IsString()
  @Length(2, 128)
  public lastname: string;
  
  @IsPhoneNumber('IN')
  public mobile:string;

  @IsString()
  public role: string;

  @Length(8)
  @IsString()
  public password: string;
}
