import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

const logger = new Logger('main.ts');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //swagger
  const config = new DocumentBuilder()
    .setTitle('接口文档')
    .setDescription('API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  // 请求参数验证
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      // transform: true, // 自动转换类型 影响性能
      forbidNonWhitelisted: true, // 多余参数报错
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  await app.listen(3000);
  logger.log('http://127.0.0.1:3000/api-docs');
}

bootstrap();
