<template>
    <div ref="geminiScrollbar">
        <div class="gm-scrollbar -vertical">
            <div class="thumb"></div>
        </div>
        <div class="gm-scrollbar -horizontal">
            <div class="thumb"></div>
        </div>
        <div class="gm-scroll-view">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import GeminiScrollbar from 'gemini-scrollbar';
import 'gemini-scrollbar/gemini-scrollbar.css';

export default {
    name: 'GeminiScrollbar',

    props: {
        autoCreate: {
            type: Boolean,
            default: true
        },
        autoshow: {
            type: Boolean,
            default: false
        },
        forceGemini: {
            type: Boolean,
            default: false
        },
        minThumbSize: {
            type: Number,
            default: 20
        },
    },

    data() {
        return {
            geminiScrollbar: null
        };
    },

    mounted() {
        this.$_init();
    },

    updated() {
        this.geminiScrollbar.update();
    },

    beforeDestroy() {
        this.geminiScrollbar.destroy();
    },

    methods: {
        $_init() {
            this.geminiScrollbar = new GeminiScrollbar({
                element: this.$refs.geminiScrollbar,
                createElements: false,
                onResize: () => {
                    this.$emit('resize');
                },
                ...this.$props
            });

            this.geminiScrollbar.create();
        },

        $_setScrollTop(val) {
            this.geminiScrollbar._viewElement.scrollTop = val;
        }
    }
};
</script>
