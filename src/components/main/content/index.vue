<template>
    <Layout>
        <Content>
            <v-back-top :scroll-el="scrollEl" />

            <v-scroll-bar ref="scrollbar">
                <router-view />
            </v-scroll-bar>
        </Content>
    </Layout>
</template>

<script>
import VScrollBar from '../../scrollbar';
import VBackTop from './backTop';

export default {
    components: {
        VScrollBar,
        VBackTop
    },

    data() {
        return {
            scrollEl: null
        };
    },

    watch: {
        '$store.state.docRenderDone'() {
            this.$nextTick(() => {
                this.$refs.scrollbar.geminiScrollbar.update();
            });
        },
        '$store.state.scrollTop'(val) {
            this.$refs.scrollbar.$_setScrollTop(val);
        }
    },

    mounted() {
        this.scrollEl = this.$refs.scrollbar.geminiScrollbar._viewElement;
    }
};
</script>

<style lang="less" scoped>
.ivu-layout {
    padding: 24px;
    width: calc(100vw - 600px);

    .ivu-layout-content {
        padding: 24px;
        min-height: 280px;
        background: #fff;
    }
}
</style>
