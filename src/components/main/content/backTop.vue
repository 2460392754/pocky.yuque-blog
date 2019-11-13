<template>
    <div :class="classes" @click="back">
        <i class="ivu-icon ivu-icon-ios-arrow-up"></i>
        <span>backTop</span>
    </div>
</template>

<script>
import { on as onEvent, off as offEvent } from 'view-design/src/utils/dom';
import { scrollTop } from 'view-design/src/utils/assist';

export default {
    props: {
        // 最小显示高度是显示组件
        height: {
            type: Number,
            default: 400
        },

        // 过度动画时间
        duration: {
            type: Number,
            default: 1000
        },

        // 基于 scroll 滚动的容器
        scrollEl: {
            type: HTMLDivElement,
            default: () => window
        }
    },

    data() {
        return {
            isShow: false
        };
    },

    computed: {
        classes() {
            return ['component-back-top', this.isShow && 'show'];
        }
    },

    watch: {
        scrollEl: {
            handler(el) {
                this.$_onEvent();
            }
        }
    },

    beforeDestroy() {
        this.$_offEvent();
    },

    methods: {
        // 返回到顶部
        back() {
            this.$_scrollTop(this.scrollEl, 0);
            this.$emit('on-click');
        },

        // 设置 el 的 scrollTop 属性
        $_scrollTop(el, n) {
            scrollTop(el, el.scrollTop, n);
        },

        // 事件回调
        $_eventCallback(e) {
            this.isShow = this.scrollEl.scrollTop >= this.height;
        },

        // 绑定事件
        $_onEvent() {
            onEvent(this.scrollEl, 'scroll', this.$_eventCallback); // 滚动
            onEvent(this.scrollEl, 'resize', this.$_eventCallback); // 文档窗口变化
        },

        // 解绑事件
        $_offEvent() {
            offEvent(this.scrollEl, 'scroll', this.$_eventCallback);
            offEvent(this.scrollEl, 'resize', this.$_eventCallback);
        }
    }
};
</script>

<style lang="less" scoped>
.component-back-top {
    position: fixed;
    top: 0px;
    opacity: 0;
    left: 50%;
    transform: translate(-50%);
    background: #fff;
    padding: 5px 20px;
    border: 2px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    z-index: 9999;
    transition: all 0.5s;

    &.show {
        top: 100px;
        opacity: 1;
    }

    > .ivu-icon {
        margin-right: 15px;
    }
}
</style>
