import { Module, HttpService, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RepoModule } from './repo/repo.module';
import { DocModule } from './doc/doc.module';
import {
    HttpRequestInterceptor,
    HttpResponseInterceptor,
    CurlModule,
    LoggerModule
} from '../common';

@Module({
    imports: [LoggerModule, CurlModule, UserModule, RepoModule, DocModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule implements OnModuleInit {
    constructor(private readonly httpService: HttpService) {}

    public onModuleInit() {
        this.httpService.axiosRef.interceptors.request.use(...HttpRequestInterceptor);
        this.httpService.axiosRef.interceptors.response.use(...HttpResponseInterceptor);
    }
}
