import { IsString, IsNumberString } from 'class-validator';

export class UpdateEnsembleDTO {

  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly website: string;

  @IsNumberString()
  readonly zipCode: string;

  @IsString()
  readonly city: string;

  readonly genre: [];


  constructor(
    name: string,
    description: string,
    website: string,
    zipCode: string,
    city: string,
    genre: [],
  ) {
    this.name = name;
    this.description = description;
    this.website = website;
    this.zipCode = zipCode;
    this.city = city;
    this.genre = genre;
  }
}
