import { createParamDecorator, HttpException } from '@nestjs/common';
import { Request } from 'express';

export const Token = createParamDecorator((data, req: Request) => {
    const token = req.headers['x-auth-token'];

    if (typeof token === 'undefined') {
        throw new HttpException('token is null', 400);
    }

    return token;
});
