import { Controller, Get, Headers, Query } from '@nestjs/common';
import { RepoService } from './repo.service';
import { HeadersDecorator } from '../../common';
import {
    GetInfoQueryDto,
    GetInfoHeadersDto,
    GetlistQueryDto,
    GetListHeadersDto,
    GetInfoTocQueryDto,
    GetInfoTocHeadersDto,
    GetInfoSearchQueryDto,
    GetInfoSearchHeadersDto
} from './repo.dto';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';

@ApiUseTags('repo')
@Controller('repo')
export class RepoController {
    constructor(private readonly repoService: RepoService) {}

    /**
     * 获取仓库详情
     * @param query
     * @param headers
     * @param h
     */
    @Get()
    getInfo(
        @Query() query: GetInfoQueryDto,
        @HeadersDecorator() headers: GetInfoHeadersDto,
        @Headers() h: GetInfoHeadersDto
    ) {
        const { repoId } = query;
        const { token } = headers;

        return this.repoService.getInfo(repoId, token);
    }

    /**
     * 获取某个用户/组织的仓库列表
     * @param query
     * @param headers
     * @param h
     */
    @Get('list')
    getList(
        @Query() query: GetlistQueryDto,
        @HeadersDecorator() headers: GetListHeadersDto,
        @Headers() h: GetListHeadersDto
    ) {
        const { userId } = query;
        const { token } = headers;

        return this.repoService.getList(userId, token);
    }

    /**
     * 获取一个仓库的目录结构
     * @param query
     * @param headers
     * @param h
     */
    @Get('/toc')
    getToc(
        @Query() query: GetInfoTocQueryDto,
        @HeadersDecorator() headers: GetInfoTocHeadersDto,
        @Headers() h: GetInfoTocHeadersDto
    ) {
        const { repoId } = query;
        const { token } = headers;

        return this.repoService.getToc(repoId, token);
    }

    @Get('/search')
    getSearch(
        @Query() query: GetInfoSearchQueryDto,
        @HeadersDecorator() headers: GetInfoSearchHeadersDto,
        @Headers() h: GetInfoSearchHeadersDto
    ) {
        // const { repoId } = query;
        // const { token } = headers;
    }
}
