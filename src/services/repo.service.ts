import { Injectable } from '@nestjs/common';
import { Repo } from '../interfaces/repo.interface';
import * as Api from '../api/repo.api';
import { RepoGetSearchType } from '../dto/repo.dto';
import { IGetRepoSearch } from '../interfaces/repo.interface';

@Injectable()
export class RepoService implements Repo {
    // 获取仓库详情
    getRepo(id: string, token?: string) {
        return Api.getInfo(id, token);
    }

    // 获取一个仓库的目录结构
    getRepoToc(id: string, token?: string) {
        return Api.getInfoToc(id, token);
    }

    // getRepoSearch(name: string, type?: RepoGetSearchType, token?: string) {
    //     return Api.getInfoSearch(name, type, token);
    // }
    // 基于关键字搜索仓库
    getRepoSearch({ name, type, token }: IGetRepoSearch) {
        return Api.getInfoSearch({ name, type, token });
    }
}
