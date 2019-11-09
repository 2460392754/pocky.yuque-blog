<template>
    <div class="component-printHTML">
        <h1>{{title}}</h1>
        <Divider />
        <div v-highlightjs v-html="html"></div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'title'
        },
        content: {
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

                // console.log(json);

                let { code, mode, src, width, html } = json;

                if (typeof code !== 'undefined') {
                    return this.$_formatTypeCode(mode, code);
                } else if (typeof src !== 'undefined') {
                    return `><img alt="img" width="${width}" src="${src}"/></card>`;
                } else if (typeof html !== 'undefined') {
                    return `>${html}</card>`;
                }
            });
        },

        $_formatType(json) {
            // if()

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
.component-printHTML {
    ol,
    ul {
        margin-left: 24px;
    }

    img {
        // width: 100%;
        max-width: 800px;
    }

    a {
        word-break: break-word;
    }
}
</style>