<template>
    <Sider :width="300" hide-trigger :class="[isShow ? 'is-show' : '']">
        <v-scroll-bar>
            <Menu
                :active-name="activeName"
                theme="light"
                width="auto"
                :open-names="['1']"
                @on-select="changeMenuItem"
            >
                <v-menu :data="data" />
            </Menu>
        </v-scroll-bar>
    </Sider>
</template>

<script>
import { getRepoTocApi } from '@/api/repo';
import VMenu from './menu';
import VScrollBar from '../../scrollbar';

export default {
    components: {
        VMenu,
        VScrollBar
    },

    data() {
        return {
            list: null,
            data: null,
            isShow: false,
            repoId: null,
            docId: null,
            activeName: null
        };
    },

    watch: {
        '$route.path': {
            handler(path) {
                if (path === '/doc') {
                    const { repoId, docId } = this.$route.query;

                    this.isShow = true;
                    this.repoId = repoId;
                    this.docId = docId;

                    this.$_init();
                    this.$nextTick(() => {
                        this.activeName = docId;
                    });
                } else {
                    this.isShow = false;
                }
            },
            immediate: true
        },
        docId: {
            handler(docId) {
                this.changeMenuItem(docId);
            },
            immediate: true
        }
    },

    methods: {
        // 初始化
        async $_init() {
            this.list = await this.$_getRepoTocApi();
            console.log(this.docId);
            this.docId || (this.docId = this.$_getFirstDoc());
            this.data = this.$_formatCode(this.list);
        },

        $_getRepoTocApi() {
            return getRepoTocApi(this.repoId).then((res) => res.data);
        },

        /**
         * 格式化对橡树
         * @param {array} list 对象树
         * @return {array}
         */
        $_formatCode(list) {
            const arr = [];

            for (const { title, slug, depth } of list) {
                let _tmpArr = arr;

                for (let i = 0; i < depth - 1; i++) {
                    const _len = _tmpArr.length;

                    _tmpArr = _tmpArr[_len - 1].list || (_tmpArr[_len - 1].list = []);
                }

                _tmpArr.push({ title, slug });
            }

            return arr;
        },

        /**
         * 获取目录列表的第一篇文章
         * @return {string} 文档id
         */
        $_getFirstDoc() {
            for (const item of this.list) {
                const { slug } = item;

                if (slug !== '#') {
                    return slug;
                }
            }
        },

        /**
         * 点击 `menuItem` 组件获取 `name` 值
         * @param {string} docId
         */
        changeMenuItem(docId) {
            this.$store.commit('setDocId', docId);
        }
    }
};
</script>

<style lang="less" scoped>
.ivu-layout-sider {
    background: #fff;
    margin: 24px 0 24px -300px;
    transition: margin 0.5s;
    // overflow-y: auto;

    &.is-show {
        margin-left: 24px;
    }

    .ivu-menu-vertical.ivu-menu-light:after {
        background: none;
    }
}
</style>
