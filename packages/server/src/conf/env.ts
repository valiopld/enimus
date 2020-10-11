import { cleanEnv, num, port, str, ValidatorSpec, bool } from 'envalid';

export type Env = Readonly<{
    SERVER_HOST: string,
    SERVER_PORT: number,
    DB_NAME: string,
}>

export const env: Env = cleanEnv(
    process.env,
    {
        SERVER_HOST: str({default: "localhost"}),
        SERVER_PORT: port({default: 7777}),
        DB_NAME: str({default: "enimus"})
    }
)