import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CONFIG } from './config/config.export';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Kafka Example')
    .addServer(CONFIG.ADDRESS)
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(CONFIG.SWAGGER_PATH, app, document);
  await app.listen(CONFIG.PORT);
}
bootstrap();