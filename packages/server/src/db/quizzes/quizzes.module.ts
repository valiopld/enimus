import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';

import { QuizzesService } from "./quizzes.service";
import { EQuiz } from "./quizzes.entity";

@Module({
    imports: [ TypeOrmModule.forFeature([EQuiz]) ],
    providers: [ QuizzesService ]
})
export class QuizzesModule{}