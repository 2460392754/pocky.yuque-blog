import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { HttpExceptionFilter } from './filters/error.filter';
import { TransformInterceptor } from './interceptors/transform.interceptor';
import { ValidationPipe } from './pipe/validation.pipe';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalFilters(new HttpExceptionFilter());
    app.useGlobalInterceptors(new TransformInterceptor());
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(3000);

    console.log('service: http://localhost:3000');
}
bootstrap();
