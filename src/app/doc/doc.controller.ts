import { Controller, Get, Headers, Query } from '@nestjs/common';
import { DocService } from './doc.service';
import { GetInfoQueryDto, GetInfoHeadersDto } from './doc.dto';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { HeadersDecorator } from '../../common';

@ApiUseTags('doc')
@Controller('doc')
export class DocController {
    constructor(private docService: DocService) {}

    // 获取一个仓库的文档列表
    // @Get('/toc')
    // getToc(@Param() param) {}

    /**
     * 获取单篇文档的详细信息
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
        const { repoId, docId } = query;
        const { token } = headers;

        return this.docService.getInfo(repoId, docId, token);
    }
}
