import Http from '../plugins/axios';

/**
 * 获取单篇文档的详细信息
 * @param {number} repoId 仓库id
 * @param {number} docId 文档id
 * @return {Promise<any>}
 */
export const getDocInfoApi = function(repoId, docId) {
    return Http.get('/doc', {
        params: { repoId, docId }
    }).then((res) => {
        return res.data;
    });
};
