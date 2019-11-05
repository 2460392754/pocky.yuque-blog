import { Injectable, NestInterceptor, CallHandler, ExecutionContext } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Response } from 'express';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map((res) => {
                const { data, headers } = res || {};
                const host = context.switchToHttp();
                const response = host.getResponse<Response>();

                this.addHeaders(response, headers);

                return data || res;
            })
        );
    }

    private addHeaders(response: Response, headers = {}) {
        for (const [key, value] of Object.entries(headers)) {
            response.setHeader(key, value as string);
        }
    }
}
