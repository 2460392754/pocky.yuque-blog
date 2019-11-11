<template>
    <Dropdown trigger="click" class="base-theme" @on-click="change">
        <div class="title">
            <Icon type="ios-color-palette" />
            <span>主题</span>
            <Icon type="ios-arrow-down"></Icon>
        </div>
        <DropdownMenu slot="list">
            <DropdownItem
                v-for="item of menuList"
                :key="item.name"
                :name="item.name"
                :selected="curMenuName === item.name"
            >
                <span class="text">{{item.title}}</span>
                <span :class="['thumbnail',item.name]"></span>
            </DropdownItem>
        </DropdownMenu>
    </Dropdown>
</template>

<script>
export default {
    data() {
        return {
            curMenuName: 'default',
            menuList: [
                { name: 'default', title: '默认' },
                { name: 'red', title: '红色' },
                { name: 'blue', title: '蓝色' },
                { name: 'green', title: '绿色' },
                { name: 'yellow', title: '黄色' }
            ]
        };
    },

    created() {
        this.$_localTempTheme();
    },

    mounted() {
        this.$_addBodyClass(this.curMenuName);
    },

    methods: {
        /**
         * 点击 下拉菜单
         * @param {string} name `DropdownItem` 设置的 `name` 字段
         */
        change(name) {
            this.$_removeBodyClass(this.curMenuName);
            this.$_addBodyClass(name);
            this.curMenuName = name;
            localStorage.setItem('theme', name);
        },

        /**
         * 设置 `body` 标签的 class
         * @param {string} action add | remove
         * @param {string} value className
         */
        $_getBodyClassList(action, value) {
            document.querySelector('html').classList[action](value);
        },

        $_addBodyClass(type) {
            this.$_getBodyClassList('add', 'theme-' + type);
        },

        $_removeBodyClass(type) {
            this.$_getBodyClassList('remove', 'theme-' + type);
        },

        // 获取本地
        $_localTempTheme() {
            const name = localStorage.getItem('theme');

            name && this.change(name);
        }
    }
};
</script>

<style lang="less" scoped>
.base-theme {
    color: #fff;

    .title {
        cursor: pointer;

        > span {
            margin: 0 6px;
        }
    }

    .thumbnail {
        width: 20px;
        height: 20px;
        display: inline-block;
        vertical-align: middle;
        margin-left: 10px;
        border-radius: 5px;
    }
}
</style>