a<template>
    <div class="error-500-page">
        <V-error-content :code="code" :desc="desc" :src="src" />
    </div>
</template>

<script>
import VErrorContent from '@/components/errorContent';
import Error500 from '@/assets/error/500.svg';

export default {
    components: {
        VErrorContent
    },

    data() {
        return {
            code: 500,
            desc: 'Oh~~鬼知道服务器经历了什么~',
            src: Error500
        };
    }
};
</script>
