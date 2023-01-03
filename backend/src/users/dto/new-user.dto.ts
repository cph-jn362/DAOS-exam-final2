import { IsString, IsEmail, MinLength } from 'class-validator';

export class NewUserDTO {
  @IsString()
  readonly fname: string;

  @IsString()
  readonly lname: string;

  @IsEmail()
  readonly email: string;

  @MinLength(6)
  readonly password: string;

  readonly condition: boolean;

  readonly newsletter: boolean;

  constructor(
    fname: string,
    lname: string,
    email: string,
    password: string,
    condition: boolean,
    newsletter: boolean,
  ) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.password = password;
    this.condition = condition;
    this.newsletter = newsletter;
  }
}
