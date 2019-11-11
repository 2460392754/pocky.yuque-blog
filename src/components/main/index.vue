<template>
    <Main>
        <Layout>
            <v-sider />
            <v-content />
            <v-toc />
        </Layout>
    </Main>
</template>

<script>
import VSider from './sider';
import VContent from './content';
import VToc from './toc';

export default {
    components: {
        VSider,
        VContent,
        VToc
    }
};
</script>

<style scoped>
main > .ivu-layout {
    flex-direction: inherit;
    /* min-height: calc(100vh - 66px); */
    height: calc(100vh - 66px);
}
</style>