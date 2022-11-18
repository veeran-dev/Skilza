import { IsArray, IsEmail, IsMimeType, IsNotEmpty, isNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString, length, Length, MaxLength } from 'class-validator';

export class CreateProfileDto {

  @IsNotEmpty()
  public uid:String;

  @IsNotEmpty()
  @IsString()
  @MaxLength(80)
  public firstName: string;

  @IsNotEmpty()
  @MaxLength(80)
  @IsString()
  public lastname: string;

  @IsNotEmpty()
  @MaxLength(400)
  @IsString()
  public about: string;

  @IsNotEmpty()
  @MaxLength(120)
  @IsString()
  public tag: string;

  @IsNotEmpty()
  @IsString()
  @IsNotEmpty()
  public profileImage: number;

  @IsString()
  public facebook: string;

  @IsString()
  public linkeidn: string;

  @IsString()
  public instagram: string;

  @IsString()
  public youtube: string;

  @IsOptional()
  @IsArray()
  public galleryImage: string;
}
