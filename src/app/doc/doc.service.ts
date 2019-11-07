import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CurlService } from '../../common';
import { IDocApiArr } from '../../common';

@Injectable()
export class DocService {
    constructor(private readonly curlService: CurlService) {}

    /**
     * 获取单篇文档的详细信息
     * @param repoId 仓库id
     * @param docId 文档id
     * @param token 语雀token
     */
    getInfo(repoId: string, docId: string, token: string | undefined): Observable<IDocApiArr[]> {
        const raw = 1;

        return this.curlService.get(`/repos/${repoId}/docs/${docId}`, {
            params: { raw },
            headers: token && {
                'X-Auth-Token': token
            }
        });
    }
}
