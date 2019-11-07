export const HttpRequestInterceptor = [
    (config) => {
        // console.log(config);
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
];

export const HttpResponseInterceptor = [
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
        return Promise.reject(err);
    }
];
