<template>
    <Layout>
        <Content>
            <v-scroll-bar ref="scrollbar">
                <router-view />
            </v-scroll-bar>
        </Content>
    </Layout>
</template>

<script>
import VScrollBar from '../../scrollbar';

export default {
    components: {
        VScrollBar
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