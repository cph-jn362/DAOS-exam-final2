import { MinLength } from 'class-validator';

export class InstrumentDTO {
  
  @MinLength(1)
  readonly genre: string[];

  @MinLength(1)
  readonly skill: string;
 
  readonly instrumentType: string;

  constructor(
    genre: string[],
    skill: string,
    instrumentType: string
  ) {
    this.genre = genre;
    this.skill = skill;
    this.instrumentType = instrumentType;
  }
}
