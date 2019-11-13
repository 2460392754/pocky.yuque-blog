<template>
    <div class="component-error-content">
        <div class="content">
            <img :src="src" :alt="code" />
            <div class="text">
                <h4>{{ code }}</h4>
                <h5>{{ desc }}</h5>
            </div>
            <div class="btn-content">
                <Button type="primary" to="/">回到主页</Button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        code: {
            type: [String, Number],
            default: ''
        },
        desc: {
            type: String,
            default: ''
        },
        src: {
            type: String,
            default: ''
        }
    }
};
</script>

<style lang="less">
.component-error-content {
    width: 100%;
    height: 100%;
    background: #f8f8f9;

    .content {
        width: 700px;
        height: 600px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -60%);

        img {
            display: block;
            width: 100%;
            height: 100%;
        }

        .text {
            position: absolute;
            left: 0px;
            top: 0px;

            h4 {
                position: absolute;
                left: 0px;
                top: 0px;
                font-size: 80px;
                font-weight: 700;
            }

            h5 {
                position: absolute;
                width: 700px;
                left: 0px;
                top: 100px;
                font-size: 20px;
                font-weight: 700;
                color: #67647d;
            }
        }

        .back-btn-group {
            position: absolute;
            right: 0px;
            bottom: 20px;
        }

        .btn-content {
            text-align: center;
            margin-top: 50px;
        }
    }
}
</style>
