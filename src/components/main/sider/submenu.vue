<template>
    <div>
        <Submenu :name="name">
            <template slot="title">
                <Icon type="ios-folder" />
                <span>{{title}}</span>
            </template>

            <slot />
        </Submenu>
    </div>
</template>

<script>
export default {
    name: 'v-submenu',

    props: {
        name: {
            type: [String, Number],
            default: ''
        },

        title: {
            type: String,
            default: ''
        },

        list: {
            type: Array,
            default: () => []
        }
    }
};
</script>

<style>
</style>