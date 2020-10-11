import { Entity, Column } from "typeorm";
import { DBObjectCreate } from "../../utils/dbObjectCreate";

import { IQuiz } from "../../interfaces/quiz.interface";

@Entity('quizzes')
export class EQuiz extends DBObjectCreate implements IQuiz {

    @Column()
    type: number;

    @Column()
    questions: any; // question type add entity Quiestion[];

}