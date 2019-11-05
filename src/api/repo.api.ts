import Axios from '../plugins/axios';
import { RepoGetInfoApi, RepoGetTocApi, IGetRepoSearch } from '../interfaces/repo.interface';

// 获取仓库详情
export const getInfo = function(id: string, token?: string): Promise<RepoGetInfoApi> {
    return Axios.get(`/repos/${id}`, {
        headers: token && {
            'X-Auth-Token': token
        }
    });
};

// 获取一个仓库的目录结构
export const getInfoToc = function(id: string, token?: string): Promise<RepoGetTocApi> {
    return Axios.get(`/repos/${id}/toc`, {
        headers: token && {
            'X-Auth-Token': token
        }
    });
};

export const getInfoSearch = function({
    name,
    type,
    token
}: IGetRepoSearch): Promise<RepoGetTocApi> {
    console.log(name, type);
    return Axios.get(`/search/repos`, {
        params: {
            q: name
            // [type]: type
        },
        headers: token && {
            'X-Auth-Token': token
        }
    });
};
