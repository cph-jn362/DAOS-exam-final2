import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { NewUserDTO } from "./dto/new-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { User, UserDocument } from "./schema/user.schema";
import * as bcrypt from "bcrypt";
import { InstrumentDTO } from "./dto/instrument.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async find(id: string): Promise<User>{
        return await this.userModel.findById(id).exec();
    }

    async findOne(email:string): Promise<User>{
        return await this.userModel.findOne({email: email})
    }

    async create(user: NewUserDTO): Promise<User> {
        const newUser = new this.userModel(user);
        const hash = await bcrypt.hash(newUser.password, 10);
        newUser.password = hash;
        return await newUser.save();
    }

    async update(id: string, user: UpdateUserDTO): Promise<User>{
        return await this.userModel.findByIdAndUpdate(id, user);
    }


    async deleteOne(id: string): Promise<User>{
        return await this.userModel.findByIdAndDelete(id).exec();
    }

    async addInstrument(id: string, instrument: InstrumentDTO): Promise<User>{
        const user = await this.userModel.findById(id);
        const instrumentArray = user.instrument;
        instrumentArray.push(instrument);
        return await user.save();
    }
}