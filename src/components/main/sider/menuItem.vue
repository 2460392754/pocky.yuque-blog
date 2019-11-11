<template>
    <MenuItem :name="name">
        <Icon type="ios-document" />
        <span>{{title}}</span>
    </MenuItem>
</template>

<script>
export default {
    props: {
        name: {
            type: [String, Number],
            default: ''
        },

        title: {
            type: String,
            default: ''
        }
    }
};
</script>

<style lang="less">
.ivu-layout-sider-children {
    .ivu-menu-item {
        display: flex;
        align-items: center;

        span {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            display: block;
        }
    }
}
</style>