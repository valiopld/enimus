import { Module } from "@nestjs/common";
import { DBModule } from "src/db/db.module";

@Module({
    imports:[DBModule],
    exports:[],
    providers:[],

})
export class ServerModule{}
