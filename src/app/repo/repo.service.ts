import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CurlService } from '../../common';
import { IRepoInfoApi, IRepoTocApiArr } from '../../common';

@Injectable()
export class RepoService {
    constructor(private readonly curlService: CurlService) {}

    /**
     * 获取仓库详情
     * @param repoId 仓库id
     * @param token 语雀token
     */
    getInfo(repoId: string, token: string | undefined): Observable<IRepoInfoApi> {
        return this.curlService.get(`/repos/${repoId}`, {
            headers: token && {
                'X-Auth-Token': token
            }
        });
    }

    /**
     * 获取某个用户/组织的仓库列表
     * @param userId 用户id
     * @param token 语雀token
     */
    getList(userId: string, token: string | undefined) {
        return this.curlService.get(`/users/${userId}/repos`, {
            headers: token && {
                'X-Auth-Token': token
            }
        });
    }

    /**
     * 获取一个仓库的目录结构
     * @param repoId 仓库id
     * @param token 语雀token
     */
    getToc(repoId: string, token: string | undefined): Observable<IRepoTocApiArr[]> {
        return this.curlService.get(`/repos/${repoId}/toc`, {
            headers: token && {
                'X-Auth-Token': token
            }
        });
    }

    getSearch() {}
}
