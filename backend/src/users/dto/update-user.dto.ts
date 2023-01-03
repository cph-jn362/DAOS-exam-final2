import { IsString, IsEmail } from 'class-validator';

export class UpdateUserDTO {
  @IsString()
  readonly fname: string;

  @IsString()
  readonly lname: string;

  @IsEmail()
  readonly email: string;

  readonly description: string;
  
  readonly zipCode: string;

  readonly city: string;


  constructor(
    fname: string,
    lname: string,
    email: string,
    description: string,
    zipCode: string,
    city: string,
  ) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.description = description;
    this.zipCode = zipCode;
    this.city = city;
  }
}
