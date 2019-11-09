<template>
    <Sider :width="300" hide-trigger :class="[isShow ? 'is-show' : '']">
        <Menu
            :active-name="activeName"
            theme="light"
            width="auto"
            :open-names="['1']"
            @on-select="changeMenuItem"
        >
            <v-menu :data="data" />
        </Menu>
    </Sider>
</template>

<script>
import { getRepoTocApi } from '@/api/repo';
import VMenu from './menu';

export default {
    components: {
        VMenu
    },

    data() {
        return {
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
            const list = await this.$_getRepoTocApi();

            this.docId || (this.docId = list[0].slug);
            this.data = this.$_formatCode(list);
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
         * 点击 `menuItem` 组件获取 `name` 值
         * @param {string} docId
         */
        changeMenuItem(docId) {
            this.$store.commit('setDocId', docId);
        }
    }
};
</script>

<style lang='less' scoped>
.ivu-layout-sider {
    background: #fff;
    // transform: translateX(-300px - 24px);
    margin: 24px 0 24px 24px;
    margin-left: -300px;

    &.is-show {
        // transform: translateX(0px);
        margin-left: 24px;
    }

    .ivu-menu-vertical.ivu-menu-light:after {
        background: none;
    }
}
</style>