import { NestFactory } from '@nestjs/core';
import { ServerModule } from './wrapper/server.module';
import { INestApplication } from '@nestjs/common';
import { Logger } from '@nestjs/common';

import { env } from "./conf/env"


const PORT: number = env.SERVER_PORT;
const HOST: string = env.SERVER_HOST


async function bootstrap() {
  const logMessage: string = `API server started on port ${PORT} (http://${HOST}:${PORT})`;
  const startLog = () => Logger.log(logMessage)

  const app: INestApplication = await NestFactory.create(ServerModule);
  await app.listen(PORT, startLog);
}

bootstrap();
