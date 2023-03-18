import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

<<<<<<<<< Temporary merge branch 1
=========
//asdfasudkuhsajvgdsavhdsjak
>>>>>>>>> Temporary merge branch 2
