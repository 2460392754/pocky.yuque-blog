<template>
    <div class="error-404-page">
        <V-error-content :code="code" :desc="desc" :src="src" />
    </div>
</template>

<script>
import VErrorContent from '@/components/errorContent';
import Error404 from '@/assets/error/404.svg';

export default {
    components: {
        VErrorContent
    },

    data() {
        return {
            code: 404,
            desc: 'Oh~~您的页面好像飞走了~',
            src: Error404
        };
    }
};
</script>
