import { Entity, Column } from "typeorm";
import { DBObjectCreate } from "../../utils/dbObjectCreate";

import { IUser } from '../../interfaces/user.interface'

@Entity('users')
export class EUser extends DBObjectCreate implements IUser {

    @Column()
    role: number;

    @Column()
    email: string;

    @Column()
    name: string;

}