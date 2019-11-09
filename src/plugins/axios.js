import Vue from 'vue';
import Axios from 'axios';
import { httpConfig } from '../config';

// 创健 `axios` 实例
const instance = Axios.create({
    baseURL: httpConfig.baseURL,
    timeout: 5000
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
        // return res.data;
        return res.data.data;
    },
    (err) => {
        const { response } = err;
        const content = handleResponse(response);

        throw new Error(content);
    }
);

export default instance;

/**
 * 处理 `response`
 * @param {object|undefined} response
 * @return {string} 当前错误状态内容
 */
function handleResponse(response) {
    let content;

    if (typeof response === 'undefined') {
        content = '服务器链接失败';
    } else {
        const { statusText, status } = response;
        content = `code:${status}, msg:${statusText}`;
    }

    Vue.prototype.$Message.error({
        content,
        closable: true,
        duration: 0
    });

    return content;
}
