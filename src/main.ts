import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CONFIG } from './config/config.export';


async function bootstrap() {
  console.log(CONFIG)
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Kafka Example')
    .addServer(`${process.env.ADDRESS}`)
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(process.env.SWAGGER_PATH, app, document);
  await app.listen(process.env.PORT);
}
bootstrap();
