import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('RPG API')
    .setDescription('Gerenciamento de Personagens e Itens Mágicos')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log(`🚀 Servidor rodando em http://localhost:3000`);
  console.log(`📘 Swagger disponível em http://localhost:3000/api`);
}
bootstrap();