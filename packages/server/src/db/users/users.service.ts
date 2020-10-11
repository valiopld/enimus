import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EUser } from "./user.entity";
import { IUser } from "../../interfaces/user.interface";



@Injectable()
export class UsersService{
    constructor(
        @InjectRepository(EUser) private R: Repository<EUser>,
    ){}

        addUser(){
            const user: IUser = {role: 1, email: "valio@valio.com", name: "Valentin"}

            const data: EUser = this.R.create(user)
            return this.R.save(data)
        }

        getUserById(){}
        getUserByName(){}
        getUserByEmail(){}

        getUsersByRole(){}
        getUsersByIds(){}
        

}