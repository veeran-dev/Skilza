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

  @IsString()
  public type: string;

  @IsString()
  public category: string;

  @IsNumber()
  public lang: number;

  @IsNumber()
  public long: number;

  @IsString()
  public address: string;

  @IsString()
  public city: string;

  @IsString()
  public pincode: string;

  @IsString()
  public contact: string;

  @IsNotEmpty()
  public addressProof: string;
}
