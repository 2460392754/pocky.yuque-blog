import Http from '../plugins/axios';

// 获取用户信息
export const getUserInfoApi = function() {
    return Http.get('/user/token');
};
