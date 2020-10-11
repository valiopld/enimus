import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from "./users.service";
import { EUser } from "./user.entity";

@Module({
    imports: [ TypeOrmModule.forFeature([EUser]) ],
    providers: [ UsersService ]
})
export class UsersModule{}