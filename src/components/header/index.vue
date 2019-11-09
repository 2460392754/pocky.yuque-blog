<template>
    <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
            <v-logo />
            <v-nav />
        </Menu>
    </Header>
</template>

<script>
import VNav from './nav';
import VLogo from './logo';

export default {
    components: {
        VNav,
        VLogo
    }
};
</script>

<style scoped>
.ivu-menu {
    display: flex;
}
</style>