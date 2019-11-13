<template>
    <div class="component-printHTML">
        <h4 class="ascription">{{ ascription }}</h4>
        <h1>{{ title }}</h1>
        <Divider />

        <div v-highlightjs class="content" v-html="html"></div>

        <Divider />
        <div class="time">
            <p>创建时间: {{ createTime }}</p>
            <p>更新时间: {{ updateTime }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // 归属仓库名称
        ascription: {
            type: String,
            default: ''
        },
        // 文档标题
        title: {
            type: String,
            default: 'title'
        },
        // 文档内容
        content: {
            type: String,
            default: ''
        },
        // 创建时间
        createTime: {
            type: String,
            default: ''
        },
        //  更新时间
        updateTime: {
            type: String,
            default: ''
        }
    },

    data() {
        return {
            html: null
        };
    },

    watch: {
        content: {
            handler(data) {
                data && (this.html = this.$_replace(data));
            },
            immediate: true
        }
    },

    methods: {
        /**
         * 正则替换标签
         * @param {string} html `html`内容
         * @return {string} 已经替换完成的 `html`
         */
        $_replace(html) {
            return html.replace(/value="data:(.*?)"><\/card>/g, (wrod) => {
                const data = decodeURIComponent(wrod);
                const cardValue = data.substring(12, data.length - 9);
                const json = JSON.parse(cardValue);
                let { code, mode, src, width, html } = json;

                if (typeof code !== 'undefined') {
                    return this.$_formatTypeCode(mode, code);
                }

                if (typeof src !== 'undefined') {
                    return `><img alt="img" width="${width}" src="${src}"/></card>`;
                }

                if (typeof html !== 'undefined') {
                    return `>${html}</card>`;
                }
            });
        },

        // 根据类型格式化
        $_formatTypeCode(type, code) {
            // html标签转义
            const newCode = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');

            switch (type) {
                // 文本类型
                case 'plain': {
                    return `><pre><code class="plaintext">${newCode}</code></pre></card>`;
                }

                default: {
                    return `><pre><code class="${type}">${newCode}</code></pre></card>`;
                }
            }
        }
    }
};
</script>

<style lang="less">
@import '~@/theme/varibles.less';

.component-printHTML {
    ol,
    ul {
        margin-left: 24px;
    }

    img {
        max-width: 800px;
    }

    a {
        word-break: break-word;
    }

    .content {
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            cursor: pointer;
            display: table;
            position: relative;

            &:after {
                content: '';
                height: 3px;
                width: 0;
                display: block;
                transition: all 0.5s;
                margin-bottom: 5px;
            }

            &:hover {
                &:after {
                    width: 100%;
                }
            }
        }
    }

    .actionscript {
        display: inline-block;
        vertical-align: middle;
    }

    .ascription {
        margin-bottom: 10px;
        color: #808695;
    }
}
</style>
