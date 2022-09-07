import { IsEmail, IsMimeType, isNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString, length, Length } from 'class-validator';

export class CreateSchoolDto {
  @IsString()
  @Length(60)
  public schoolName: string;

  @Length(640)
  @IsString()
  public about: string;

  @IsOptional()
  public gallery: [string];

  public logo: string;

  public coverImage: string;
}
