import Http from '../plugins/axios';
import { httpConfig } from '../config';

/**
 * 获取仓库详情
 * @param {number} repoId 仓库id
 * @return {Promise<any>}
 */
export const getRepoInfoApi = function(repoId) {
    return Http.get('/repo', {
        params: { repoId }
    });
};

/**
 * 获取某个用户/组织的仓库列表
 * @param {number } userId 用户id
 * @return {Promise<any>}
 */
export const getRepoListApi = function(userId = httpConfig.userId) {
    return Http.get('/repo/list', {
        params: { userId }
    });
};

/**
 * 获取一个仓库的目录结构
 * @param {number} repoId 仓库id
 * @return {Promise<any>}
 */
export const getRepoTocApi = function(repoId) {
    return Http.get('/repo/toc', {
        params: { repoId }
    });
};
