import { ObjectIdColumn, Column } from "typeorm";

export abstract class DBObjectCreate {

    @ObjectIdColumn()
    _id: number;

    @Column()
    _createdAt: Date | string = new Date
}