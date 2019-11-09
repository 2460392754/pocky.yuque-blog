<template>
    <div class="component-menu">
        <template v-for="(item,index) of data">
            <v-subMenu
                v-if="item.list"
                :key="'v-submenu'+index"
                :name="name+'-'+index"
                :title="item.title"
                :list="item.list"
            >
                <v-menu :data="item.list" :name="name + 1" />
            </v-subMenu>

            <v-menuItem v-else :key="'v-menuItem'+index" :name="item.slug" :title="item.title" />
        </template>
    </div>
</template>

<script>
import VMenu from './menu';
import VMenuItem from './menuItem';
import VSubMenu from './submenu';

export default {
    name: 'v-menu',

    components: {
        VMenuItem,
        VSubMenu,
        VMenu
    },

    props: {
        data: {
            type: Array,
            default: () => []
        },

        name: {
            type: [String, Number],
            default: 0
        }
    }
};
</script>

<style>
</style>