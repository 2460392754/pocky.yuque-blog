<template>
    <Main>
        <Layout>
            <v-sider />
            <v-content />
        </Layout>
    </Main>
</template>

<script>
import VSider from './sider';
import VContent from './content';

export default {
    components: {
        VSider,
        VContent
    }
};
</script>

<style scoped>
main > .ivu-layout {
    flex-direction: inherit;
    min-height: calc(100vh - 66px);
}
</style>