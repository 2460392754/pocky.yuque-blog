<template>
    <div class="layout-doc" :class="[isShow ? 'is-show' : '']">
        <v-scroll-bar>
            <h2>Toc</h2>
            <v-menu :data="data" />
        </v-scroll-bar>
    </div>
</template>

<script>
import VMenu from './menu';
import VScrollBar from '../../scrollbar';

export default {
    components: {
        VMenu,
        VScrollBar
    },

    data() {
        return {
            isShow: false,
            data: null
        };
    },

    watch: {
        '$route.path': {
            handler(path) {
                this.data = null;
                this.isShow = path === '/doc';
            },
            immediate: true
        },

        '$store.state.docRenderDone'() {
            this.$nextTick(this.$_init);
        }
    },

    methods: {
        // 初始化
        $_init() {
            const domList = this.$_getDom();

            this.data = this.$_formatObjectTree(domList);
        },

        // 获取dom
        $_getDom() {
            const list = ['h1', 'h2', 'h3', 'h4'];
            const tmpArr = [];

            for (const label of list) {
                tmpArr.push(`.doc-page .content>${label}`);
            }

            return document.querySelectorAll(tmpArr.join(','));
        },

        // 格式化成对橡树
        $_formatObjectTree(domList) {
            const list = ['h1', 'h2', 'h3', 'h4'];
            const arr = [];

            for (const dom of domList) {
                const { innerText: title, id: name, localName } = dom;
                let _tmpArr = arr;

                for (let i = 0, pos = list.indexOf(localName); i < pos; i++) {
                    const _len = _tmpArr.length;

                    _tmpArr = _tmpArr[_len - 1].list || (_tmpArr[_len - 1].list = []);
                }

                _tmpArr.push({ title, name });
            }

            return arr;
        }
    }
};
</script>

<style lang="less">
.layout-doc {
    background: #fff;
    width: 250px;
    padding: 20px;
    margin: 24px -250px 24px 0;
    transition: margin 0.5s;

    &.is-show {
        margin-right: 24px;
    }

    .component-menu-item {
        .component-menu {
            margin-left: 20px;
        }
    }
}
</style>
