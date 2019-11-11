<template>
    <div class="component-menu">
        <v-menuItem
            v-for="(item,index) of data"
            :key="'v-menu-item-'+index"
            :name="item.name"
            :title="item.title"
        >
            <v-menu v-if="item.list" :data="item.list" />
        </v-menuItem>
    </div>
</template>

<script>
import VMenu from './menu';
import VMenuItem from './menuItem';

export default {
    name: 'v-menu',

    components: {
        VMenu,
        VMenuItem
    },

    props: {
        data: {
            type: Array,
            default: () => []
        }
    }
};
</script>
