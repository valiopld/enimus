import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { env } from "../conf/env";

export const typeORMconf: TypeOrmModuleOptions = {
    type: "mongodb",
    host: env.SERVER_HOST,
    database: env.DB_NAME,
    entities: ["src/**.*.entity.ts","dist/**/*.entity.js"],
    synchronize: true,
        // (node:6664) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, 
        // and will be removed in a future version. To use the new Server Discover and Monitoring engine, 
        // pass option { useUnifiedTopology: true } to the MongoClient constructor.
    useUnifiedTopology : true,
}