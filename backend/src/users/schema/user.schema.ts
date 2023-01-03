import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, now } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class Instrument{
    @Prop()
    genre: string[];

    @Prop({required: true})
    instrumentType: string;
   
    @Prop({required: true})
    skill: string;
}

@Schema()
export class User {
    @Prop({required: true})
    fname: string; 
    
    @Prop({required: true})
    lname: string; 

    @Prop({required: true, unique: true})
    email: string;

    @Prop({required: true})
    password: string; 
    
    @Prop()
    condition: boolean; 
    
    @Prop()
    newsletter: boolean; 
    
    @Prop()
    instrument: Instrument[]; 

    @Prop()
    description: string;

    @Prop()
    zipCode: string;

    @Prop()
    city: string;

    @Prop({default: now()})
    createdAt: Date;
  
    
}



export const UserSchema = SchemaFactory.createForClass(User);