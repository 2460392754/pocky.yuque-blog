import Axios from '../plugins/axios';
import { UserGetInfoApi, UserGetTokenInfoApi } from '../interfaces/user.interface';

/**
 *  获取单个用户信息
 * @param id 用户id
 */
export const getInfoApi = function(id: string): Promise<UserGetInfoApi> {
    return Axios.get('/users/' + id);
};

/**
 * 获取认证的用户的个人信息
 * @param token 登陆 token
 */
export const getTokenInfoApi = function(token): Promise<UserGetTokenInfoApi> {
    return Axios.get('/user', {
        headers: {
            'X-Auth-Token': token
        }
    });
};
