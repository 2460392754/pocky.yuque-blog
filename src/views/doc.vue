<template>
    <div class="doc-page">
        <v-print-html v-if="isShow" :title="title" :content="html" />
        <Divider />
        <p>创建时间: {{time.create}}</p>
        <p>更新时间: {{time.update}}</p>
    </div>
</template>

<script>
import { getDocInfoApi } from '../api/doc';
import VPrintHtml from '../components/main/content/printHTML';
import { formatDate } from '@/utils';

export default {
    components: {
        VPrintHtml
    },

    data() {
        return {
            title: null,
            html: null,
            isShow: false,
            docId: null,
            time: {
                create: null,
                update: null
            }
        };
    },

    watch: {
        '$store.state.docId': {
            handler(docId) {
                docId && this.$_setUrlQuery(docId);
            },
            immediate: true
        },

        // 页面切换过度动画
        isShow(flag) {
            if (flag) {
                this.$Loading.finish();
            } else {
                this.$Loading.start();
            }
        }
    },

    methods: {
        // 初始化
        async $_init() {
            this.isShow = false;

            const { repoId } = await this.$_getRouteQuery();
            await this.$_getDocInfoApi(repoId);

            // 重写渲染 `VPrintHtml` 组件
            this.$nextTick(() => {
                this.isShow = true;
                this.$store.commit('updateDocRenderDone');
            });
        },

        // 发送请求获取文档
        $_getDocInfoApi(repoId) {
            return getDocInfoApi(repoId, this.docId).then((res) => {
                const { title, body_lake, created_at, updated_at } = res;

                this.html = body_lake;
                this.title = title;
                this.time.create = formatDate(created_at);
                this.time.update = formatDate(updated_at);
            });
        },

        // 获取 `URL` 上面的 `query`
        $_getRouteQuery() {
            const { query } = this.$route;

            if (Object.keys(query).length === 0) {
                this.$Message.error({
                    content: '路由缺少参数，无法加载文档'
                });
            }

            return Promise.resolve(query);
        },

        // 设置 route 的 query
        $_setUrlQuery(docId) {
            this.docId = docId;
            this.$router.replace({ query: { ...this.$route.query, docId } });
            this.$_init();
        }
    }
};
</script>

<style lang="less">
.doc-page {
    width: 100%;
    max-width: 1200px;
}
</style>