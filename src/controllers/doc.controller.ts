import { Controller, Get, Param, Headers, Query } from '@nestjs/common';
import { DocService } from '../services/doc.service';
import { DocGetDocsDto, DocGetDocDto } from '../dto/doc.dto';

@Controller('doc')
export class DocController {
    constructor(private docService: DocService) {}

    // 获取一个仓库的文档列表
    @Get(':id/docs')
    getDocs(@Param() Param: DocGetDocsDto, @Headers('x-auth-token') token: string) {
        return this.docService.getDocs(Param.id, token);
    }

    // 获取单篇文档的详细信息
    @Get(':id/doc/:docId')
    getDoc(
        @Param() Param: DocGetDocDto,
        @Query('raw') raw: string,
        @Headers('x-auth-token') token: string
    ) {
        const { id, docId } = Param;

        return this.docService.getDoc({ id, docId, raw, token });
    }
}
