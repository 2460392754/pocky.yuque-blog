<template>
    <div class="component-menu-item">
        <a class="link">
            <span :data-id="name" @click.self="click">{{title}}</span>
        </a>
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: ''
        },

        title: {
            type: String,
            default: ''
        }
    },

    methods: {
        click(e) {
            const { id } = e.target.dataset;
            const dom = this.$_getDom(id);

            this.$store.commit('setScrollTop', dom.offsetTop);
        },

        $_getDom(selector) {
            return document.getElementById(selector);
        }
    }
};
</script>

<style lang="less">
.component-menu-item {
    // font-size: 12px;

    span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: block;
    }
}
</style>