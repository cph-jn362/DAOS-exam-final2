import { Injectable, UnauthorizedException } from "@nestjs/common"; 
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { User } from "src/users/schema/user.schema";
import { AuthService } from "../auth.service"; 

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly authService: AuthService){
        super({ usernameField: 'email'})
    }

    async validate(email: string, password: string): Promise<User>{
        const user = await this.authService.userValidation(email, password);
        if(!user){
            console.log("Access denied");
            throw new UnauthorizedException();
        }

        console.log("Access granted");
        return user;
    }
}