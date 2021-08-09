<template>
    <div class="button">
        <a :class="type" :href="link">{{ text }}</a>
    </div>
</template>

<script>
export default {
    name: "Button",
    props: {
        type: String,
        link: String,
        text: String
    }
}
</script>

<style lang="scss" scoped>
    div {
        text-align: center;
    }
    .btn {
        color: #fefefe;
        text-decoration: none;
        padding: 12px;
        border-radius: 6px;
        box-shadow: 4px 4px 6px 1px rgba(22,22,22,0.7);
        font-weight: bold;
        &--login{
            background-color: #080f88;
        }
        &--message{
            background-color: #080f88;
            display: inline-block;
        }
        &--signup{
            background-color: #aa2f18;
        }
        &--delete{
            background-color: #aa2f18;
            display: inline-block;
        }
    }
</style>