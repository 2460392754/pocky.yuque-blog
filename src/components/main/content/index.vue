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
import { mapState } from 'vuex';

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

    computed: {
        ...mapState(['docRenderDone', 'scrollTop'])
    },

    watch: {
        docRenderDone() {
            this.$nextTick(() => {
                this.$refs.scrollbar.geminiScrollbar.update();
            });
        },
        scrollTop(val) {
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
