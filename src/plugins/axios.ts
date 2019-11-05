import Axios from 'axios';
import { HttpException } from '@nestjs/common';

const instance = Axios.create({
    baseURL: 'https://www.yuque.com/api/v2',
    timeout: 5000
});

// 全局请求拦截器
instance.interceptors.request.use(
    (config) => {
        console.log(config);
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

// 全局响应拦截器
instance.interceptors.response.use(
    (res) => {
        let { data, headers } = res;
        data = {
            data,
            headers: {
                'x-ratelimit-limit': headers['x-ratelimit-limit'], // 每小时最多访问次数
                'x-ratelimit-remaining': headers['x-ratelimit-remaining'] // 每小时剩余访问次数
            }
        };

        return data;
    },
    (err) => {
        console.log(err);
        throw new HttpException(err, err.response.status);
    }
);

export default instance;
