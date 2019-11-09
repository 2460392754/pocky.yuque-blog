<template>
    <Layout>
        <Content>
            <router-view />
        </Content>
    </Layout>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.ivu-layout {
    padding: 24px;
    width: calc(100vw - 300px);

    .ivu-layout-content {
        padding: 24px;
        min-height: 280px;
        background: #fff;
    }
}
</style>