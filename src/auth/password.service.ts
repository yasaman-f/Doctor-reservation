import { Injectable } from "@nestjs/common";
import { compare, hash } from "bcrypt";

@Injectable()
export class PasswordService {
    async hashPassword(password : string) :Promise<string>{
        const hashedPass = await hash(password, 12)
        return hashedPass
    }
    async checkPassword(hashedPassword: string, password: string): Promise<boolean> {
        const isMatch = await compare(password, hashedPassword);
        return isMatch;
    }
}
