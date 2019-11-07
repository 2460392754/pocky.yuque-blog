import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    Logger,
    HttpException,
    HttpStatus
} from '@nestjs/common';
import * as Youch from 'youch';
import { isProduction } from '../../config';
import { LoggerService } from '../../common/logger/logger.service';
import { Request } from 'express';

@Catch()
export class ExceptionsFilter implements ExceptionFilter {
    async catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request: Request = ctx.getRequest();
        const status = exception.getStatus
            ? exception.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR;

        const errorResponse = {
            code: status,
            timestamp: new Date().toLocaleDateString(),
            path: request.url,
            method: request.method,
            message:
                status !== HttpStatus.INTERNAL_SERVER_ERROR
                    ? exception.message.error || exception.message || null
                    : 'Internal server error'
        };

        // if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
        //     Logger.error(`${request.method} ${request.url}`, exception.stack, 'ExceptionFilter');
        // } else {
        //     Logger.error(
        //         `${request.method} ${request.url}`,
        //         JSON.stringify(errorResponse),
        //         'ExceptionFilter'
        //     );
        // }

        // response.status(status).json(errorResponse);

        // if (!isProduction) {
        //     const youch = new Youch(exception, request);
        //     const html = await youch
        //         .addLink(({ message }) => {
        //             const url = `https://stackoverflow.com/search?q=${encodeURIComponent(
        //                 `[adonis.js] ${message}`
        //             )}`;
        //             return `<a href="${url}" target="_blank" title="Search on stackoverflow">Search stackoverflow</a>`;
        //         })
        //         .toHTML();

        //     response.type('text/html');
        //     response.status(status);
        //     response.send(html);
        // } else {
        //     response.status(status).json(errorResponse);
        // }
        response.status(status).json(errorResponse);
    }
}
