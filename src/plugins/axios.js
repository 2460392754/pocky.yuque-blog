import Vue from 'vue';
import router from '../router';
import Axios from 'axios';
import { httpConfig } from '../config';

const app = new Vue({ router });

// 创健 `axios` 实例
const instance = Axios.create({
    baseURL: httpConfig.baseURL,
    timeout: 15000
});

// 全局请求拦截器
instance.interceptors.request.use(
    (config) => {
        config.headers.token = httpConfig.token;

        return config;
    },
    (err) => {
        return err;
    }
);

// 全局响应拦截器
instance.interceptors.response.use(
    (res, config) => {
        // console.log(res)
        // return res.data;
        return res.data.data;
    },
    (err) => {
        const { response = {} } = err;
        const { status = '500', statusText = 'Internal server error' } = response;

        app.$router.push(`/${status}`);

        throw new Error(statusText);
    }
);

export default instance;
