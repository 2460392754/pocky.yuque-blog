import { Controller, Get, Param, Headers, Query } from '@nestjs/common';
import { RepoService } from '../services/repo.service';
import {
    RepoGetInfoDto,
    RepoGetTocDto,
    RepoGetSearchParam,
    RepoGetSearchQuery
} from '../dto/repo.dto';

@Controller('repo')
export class RepoController {
    constructor(private repoService: RepoService) {}

    // 基于关键字搜索仓库
    @Get('/search')
    getRepoSearch(@Query() query: RepoGetSearchQuery, @Headers('x-auth-token') token) {
        const { name, type } = query;
        return this.repoService.getRepoSearch({ name, type, token });
    }

    // 获取仓库详情
    @Get(':id')
    getRepo(@Param() param: RepoGetInfoDto, @Headers('x-auth-token') token) {
        return this.repoService.getRepo(param.id, token);
    }

    // 获取一个仓库的目录结构
    // @BUG: 语雀的api有问题
    @Get(':id/toc')
    getRepoToc(@Param() param: RepoGetTocDto, @Headers('x-auth-token') token) {
        return this.repoService.getRepoToc(param.id, token);
    }
}
