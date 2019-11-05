import { ArgumentMetadata, PipeTransform, Injectable, HttpException } from '@nestjs/common';

@Injectable()
export class TokendPipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) {
        if (!(value.name && value.age)) {
            throw new HttpException('发送语义有误', 400);
        }

        return value;
    }
}
