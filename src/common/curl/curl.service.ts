import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class CurlService {
    constructor(private readonly httpService: HttpService) {}

    get(url: string, params?: { [propsName: string]: any }): any {
        return this.httpService.get(url, params);
    }
}
