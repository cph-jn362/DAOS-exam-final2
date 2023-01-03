import { IsString, IsNumberString, MinLength } from 'class-validator';

export class NewEnsembleDTO {

  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @MinLength(1)
  readonly members: string;

  @IsString()
  readonly website: string;

  @IsNumberString()
  readonly zipCode: string;

  @IsString()
  readonly city: string;

  readonly genre: [];

  readonly admin: string;

  constructor(
    name: string,
    members: string,
    description: string,
    website: string,
    zipCode: string,
    city: string,
    genre: [],
    admin: string,
  ) {
    this.name = name;
    this.members = members;
    this.description = description;
    this.website = website;
    this.zipCode = zipCode;
    this.city = city;
    this.genre = genre;
    this.admin = admin;
  }
}
