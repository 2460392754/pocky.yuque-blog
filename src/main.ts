import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app/app.module';
import { swagger } from './swagger';
import { ExceptionsFilter, TransformInterceptor, ValidationPipe } from './core';
import { LoggerService } from './common';
declare const module: any;

// main
(async () => {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
        cors: true
    });

    hmr(app);
    swagger(app);
    useGlobal(app);
    await app.listen(3000);

    console.log('http://localhost:3000');
})();

/**
 * webpack: 热更新
 * @param app
 */
function hmr(app) {
    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}

/**
 * 注册到全局
 * @param app
 */
function useGlobal(app) {
    app.useGlobalFilters(new ExceptionsFilter());
    app.useGlobalInterceptors(new TransformInterceptor());
    app.useGlobalPipes(new ValidationPipe());
    app.useLogger(app.get(LoggerService));
}
