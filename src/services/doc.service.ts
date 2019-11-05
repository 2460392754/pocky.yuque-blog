import { Injectable } from '@nestjs/common';
import { IDocService, IDocApiGetDocArgs } from '../interfaces/doc.interface';
import { DocApi } from '../api/doc.api';

@Injectable()
export class DocService implements IDocService {
    private docApi = new DocApi();

    // 获取一个仓库的文档列表
    getDocs(id: string, token?: string) {
        return this.docApi.getDocs(id, token);
    }

    // 获取单篇文档的详细信息
    getDoc({ id, docId, raw, token }: IDocApiGetDocArgs) {
        return this.docApi.getDoc({ id, docId, raw, token });
    }
}
