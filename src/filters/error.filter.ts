import { ExceptionFilter, Catch, HttpException, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const status = exception.getStatus();
        const errMsg = exception.message;
        const message = typeof errMsg === 'string' ? errMsg : errMsg.message;
        const request = ctx.getRequest();
        const timestamp = new Date().toISOString();

        console.warn(`api:${request.url}---errMsg:${message}---at:${timestamp}`);

        response.status(status).json({
            message,
            status
        });
    }
}
