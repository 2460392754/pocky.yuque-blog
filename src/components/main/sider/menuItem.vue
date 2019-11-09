<template>
    <MenuItem :name="name">
        <Icon type="ios-document" />
        <span>{{title}}</span>
    </MenuItem>
</template>

<script>
export default {
    props: {
        name: {
            type: [String, Number],
            default: ''
        },

        title: {
            type: String,
            default: ''
        }
    }
};
</script>
