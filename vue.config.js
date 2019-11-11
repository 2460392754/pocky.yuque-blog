const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isProduction = process.env.NODE_ENV === 'production'; // 是否是生产环境
const path = require('path');
const CDN = {
    js: [
        'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
        'https://cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js'
        // 'https://cdn.jsdelivr.net/npm/view-design@4.0.2/dist/iview.min.js'
    ]
    // css: ['https://cdn.jsdelivr.net/npm/view-design@4.0.2/dist/styles/iview.css']
};

module.exports = {
    // html获取静态文件路径,true 打包,false 开发
    publicPath: isProduction ? './' : '/',

    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,

    // 生产源映射
    productionSourceMap: false,

    // 运行时版本是否需要编译
    runtimeCompiler: true,

    configureWebpack(config) {
        // 生产环境
        if (isProduction) {
            return {
                plugins: [
                    // 添加 gzip
                    new CompressionPlugin({
                        test: /\.js$|\.html$|\.css/, // 正则匹配文件
                        threshold: 10240, // 超过10kb的文件进行压缩
                        deleteOriginalAssets: false, // 是否删除源文件
                        minRatio: 0.8
                    })
                ],
                // cdn预加载使用
                externals: {
                    vue: 'Vue',
                    'vue-router': 'VueRouter'
                    // 'view-design': 'ViewDesign'
                }
            };
        }

        // 开发环境 analyzer 分析
        else if (process.env.use_analyzer) {
            return {
                plugins: [new BundleAnalyzerPlugin()]
            };
        }
    },

    chainWebpack(config) {
        if (isProduction) {
            // 添加 cdn，需要到 index.html 添加 jsp 语法
            config.plugin('html').tap((args) => {
                args[0].cdn = CDN;
                return args;
            });

            // svg优化
            const svgRule = config.module.rule('svg');
            svgRule.uses.clear();
            svgRule.use('vue-svg-loader').loader('vue-svg-loader');
        }
    },

    css: {
        loaderOptions: {
            // 向 CSS 相关的 loader 传递选项
            less: {
                javascriptEnabled: true
            }
        }
    },

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, 'src/theme/varibles.less')]
        }
    }
};
