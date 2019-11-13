<template>
    <div class="layout-logo">
        <img class="logo" alt="logo" src="@/assets/logo.png" />
        <span>语雀 blog</span>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.layout-logo {
    color: #fff;
    background: rgba(0, 0, 0, 0.28);
    padding: 0 15px;
    height: 30px;
    border-radius: 3px;
    position: relative;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;

    .logo {
        width: 15px;
        margin-right: 10px;
    }
}
</style>
