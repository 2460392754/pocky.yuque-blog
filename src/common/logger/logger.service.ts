import { Logger, LoggerService as ILoggerServer } from '@nestjs/common';

export class LoggerService implements ILoggerServer {
    log(message: string) {
        console.log('is log');
    }
    error(message: string, trace: string) {
        console.log('is error');
    }
    warn(message: string) {
        console.log('is warn');
    }
}
