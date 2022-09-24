import { IsEmail, IsMimeType, IsNotEmpty, isNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString, length, Length, MaxLength } from 'class-validator';

export class CreateSchoolDto {

  @IsNotEmpty()
  public uid:String;

  @IsString()
  @MaxLength(60)
  public schoolName: string;

  @MaxLength(640)
  @IsString()
  public about: string;

  @IsOptional()
  public gallery: [string];

  @IsNotEmpty()
  public logo: string;

  @IsNotEmpty()
  public coverImage: string;
}
