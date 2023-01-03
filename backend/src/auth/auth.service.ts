import { UserService } from "src/users/user.service";
import { JwtService } from "@nestjs/jwt";
import { Injectable } from "@nestjs/common"
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService, 
        private readonly jwtService: JwtService) {}
        
    
        async userValidation(email: string, password: string): Promise<any>{
            const user = await this.userService.findOne(email);
            const passwordValidation = await bcrypt.compare(password, user.password);

            if(user && passwordValidation === true){
                console.log("Password Validation : True", user);
                return user;
            }
            return null;
        }

        async login(user: any){
            const payload = { email: user.email, password: user.password} ;
            return {
                access_token: this.jwtService.sign(payload),
                userId: user._id.toString()
            };
        }

}