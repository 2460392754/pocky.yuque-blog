import { createParamDecorator, HttpException } from '@nestjs/common';
import { Request } from 'express';

export const HeadersDecorator = createParamDecorator((data, request: Request) => {
    return request.headers;
});
