<template>
    <div class="index-page">
        <Card v-for="(item,index) of list" :key="'card-'+index">
            <h2>{{item.name}}</h2>
            <Icon type="md-bookmarks" size="100" />
            <p>文章篇数: {{item.items_count}}</p>
            <p class="description">{{item.description}}</p>
            <p class="create_time">创建时间: {{item.created_at}}</p>
            <p class="update_time">更新时间: {{item.content_updated_at}}</p>
            <Button type="primary" @click="changeBtnClick(item.id)">进入</Button>
        </Card>
    </div>
</template>

<script>
import { getRepoListApi } from '@/api/repo';
import { formatDate } from '../utils';

export default {
    data() {
        return {
            list: null
        };
    },

    created() {
        this.$_init();
    },

    methods: {
        async $_init() {
            const list = await this.$_getRepoList();
            this.list = this.$_formatCode(list);
        },

        $_getRepoList() {
            return getRepoListApi().then((res) => res.data);
        },

        /**
         * 格式化代码
         * @param {array} list
         * @return {array}
         */
        $_formatCode(list) {
            const NEED_NAME_LIST = [
                'content_updated_at',
                'created_at',
                'description',
                'items_count',
                'likes_count',
                'name',
                'id'
            ];
            const FORMAT_DATE_LIST = ['content_updated_at', 'created_at'];

            const tmpArr = [];
            for (const data of list) {
                const tmpObj = {};

                for (const [key, value] of Object.entries(data)) {
                    if (!NEED_NAME_LIST.includes(key)) {
                        continue;
                    }

                    tmpObj[key] = FORMAT_DATE_LIST.includes(key) ? formatDate(value) : value;
                }

                tmpArr.push(tmpObj);
            }

            return tmpArr;
        },

        changeBtnClick(id) {
            this.$router.push(`/doc?repoId=${id}`);
        }
    }
};
</script>

<style lang="less" scoped>
.index-page {
    display: flex;
    flex-wrap: wrap;

    .ivu-card {
        text-align: center;
        margin: 30px;
        width: 300px;

        .ivu-card-body {
            margin: 10px;

            > * {
                margin: 6px;
            }

            .description {
                // text-align: left;
                padding: 0px 20px;
            }

            .create_time,
            .update_time {
                color: #808695;
                font-size: 12px;
            }
        }
    }
}
</style>