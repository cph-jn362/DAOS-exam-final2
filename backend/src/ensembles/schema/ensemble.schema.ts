import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/users/schema/user.schema';
import * as mongoose from 'mongoose';

export type EnsembleDocument = Ensemble & Document;

@Schema()
export class Post{
    @Prop({required: true})
    title: string; 

    @Prop({required: true})
    instrument: string;
    
    @Prop()
    description: string;

    @Prop()
    genre: string[]; 
}


@Schema()
export class Ensemble {

    @Prop({required: true})
    name: string; 
    
    @Prop({required: true})
    members: string;

    @Prop({required: true})
    zipCode: string; 
    
    @Prop({required: true})
    city: string; 

    @Prop()
    description: string; 

    @Prop()
    website: string;
    
    @Prop()
    genre: string[]; 
    
    @Prop({
        type: mongoose.Schema.Types.ObjectId, 
        ref: User.name
    })
    admin: User; 

    @Prop()
    posts: Post[]; 
 
}

export const EnsembleSchema = SchemaFactory.createForClass(Ensemble);