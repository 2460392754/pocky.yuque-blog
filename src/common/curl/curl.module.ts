import { Global, HttpModule, Module } from '@nestjs/common';
import { CurlService } from './curl.service';

@Global()
@Module({
    imports: [
        HttpModule.registerAsync({
            useFactory: () => ({
                baseURL: 'https://www.yuque.com/api/v2',
                timeout: 5000,
                maxRedirects: 5
            })
        })
    ],
    exports: [HttpModule, CurlModule, CurlService],
    providers: [CurlService]
})
export class CurlModule {}
