import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMconf } from "../conf/typeorm.conf";

import { QuizzesModule } from "./quizzes/quizzes.module";
import { UsersModule } from "./users/users.module"

@Module({
    imports:[
        TypeOrmModule.forRoot(typeORMconf),
        QuizzesModule,
        UsersModule
    ],
    exports:[],
    providers:[],

})
export class DBModule{}
