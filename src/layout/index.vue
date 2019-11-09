<template>
    <div class="layout-index">
        <Layout>
            <v-header />
            <v-main />
        </Layout>
    </div>
</template>

<script>
import VHeader from '../components/header';
import VMain from '../components/main';

export default {
    components: {
        VHeader,
        VMain
    }
};
</script>

<style lang="less">
.layout-index {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
</style>