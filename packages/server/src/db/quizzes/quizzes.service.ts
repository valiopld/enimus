import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EQuiz } from "./quizzes.entity";
import { IQuiz } from "../../interfaces/quiz.interface";



@Injectable()
export class QuizzesService{
    constructor(
        @InjectRepository(EQuiz) private R: Repository<EQuiz>,
        ){
        }

        getById(id: number): Promise<EQuiz>{
            const data = this.R.findOne(id)
            return data;
        }

        addQuiz(quiz: IQuiz){
            const data: EQuiz = this.R.create(quiz)
            return this.R.save(data)
        }

}