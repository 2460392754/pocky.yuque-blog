<template>
    <div class="layout-nav">
        <MenuItem name="0" to="/">
            <Icon type="ios-home-outline" />
            <span>首页</span>
        </MenuItem>

        <a target="_blank" href="https://github.com/2460392754/yuque-blog">
            <MenuItem name="1">
                <Icon type="logo-github" />
                <span>github</span>
            </MenuItem>
        </a>

        <a target="_blank" href="https://www.yuque.com/pocky">
            <MenuItem name="2">
                <Icon type="ios-egg-outline" />
                <span>语雀</span>
            </MenuItem>
        </a>

        <MenuItem name="3">
            <v-theme />
        </MenuItem>
    </div>
</template>

<script>
import VTheme from './theme';

export default {
    components: {
        VTheme
    },

    methods: {
        change(e) {
            console.log(e);
        }
    }
};
</script>

<style lang="less" scoped>
.layout-nav {
    margin: 0 auto;
    margin-right: 20px;
}
</style>