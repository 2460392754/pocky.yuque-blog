<template>
    <div class="about-page">
        <img :src="avatar" />

        <div class="info">
            <Icon size="40" type="ios-quote" class="left" />
            <h1 class="name">{{ name }}</h1>
            <h3 class="nickname">{{ nickname }}</h3>
            <p class="job">
                <Icon size="18" type="ios-briefcase-outline" />
                <span>{{ job }}</span>
            </p>
            <p class="birthDate">
                <Icon size="18" type="ios-nutrition-outline" />
                <span>{{ birthDate }}</span>
            </p>
            <p class="city">
                <Icon size="18" type="ios-pin-outline" />
                <span>{{ city }}</span>
            </p>
            <p class="description">
                <Icon size="18" type="ios-paper-outline" />
                <span>{{ description }}</span>
            </p>
            <p class="email">
                <Icon size="18" type="ios-mail-outline" />
                <span>{{ email }}</span>
            </p>
            <Icon size="40" type="ios-quote" class="right" />
        </div>
    </div>
</template>

<script>
import { getUserInfoApi } from '../api/user';
import { aboutConfig } from '../config';

export default {
    data() {
        return {
            nickname: null,
            avatar: null,
            ...aboutConfig
        };
    },

    created() {
        this.$_getUserInfo();
    },

    methods: {
        // 获取用户信息
        async $_getUserInfo() {
            const res = await getUserInfoApi();
            const { avatar_url, name, description, created_at, updated_at } = res.data;

            this.avatar = avatar_url;
            this.nickname = name;
            this.createTime = created_at;
            this.updateTime = updated_at;
            this.description || (this.description = description);
        }
    }
};
</script>

<style lang="less" scoped>
.about-page {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    width: 750px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .info {
        margin-left: 60px;
        min-width: 280px;

        .ivu-icon {
            margin-right: 5px;
            vertical-align: middle;
        }

        .name,
        .nickname {
            margin-bottom: 10px;
        }

        p {
            margin-bottom: 5px;
        }

        .left {
            transform: rotateY(-180deg) translateX(50px);
        }

        .right {
            float: right;
            transform: translateX(50px);
        }
    }
}
</style>
