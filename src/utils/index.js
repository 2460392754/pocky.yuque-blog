/**
 * 时间格式化 `xxxx-xx-xx xx:xx:xx`
 * @param {*} str Date 字符串
 * @return {string}
 */
export const formatDate = function(str) {
    const date = new Date(str);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

/**
 * 管道
 * @param  {...function} args 函数列表
 */
export const pipe = function(...args) {
    return function() {
        return args.reduce((arg, fn) => {
            return fn(arg);
        }, ...arguments);
    };
};
