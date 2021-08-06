<template>
    <div>
        <a :class="type" :href="link">{{ text }}</a>
    </div>
</template>

<script>
export default {
    name: "Button",
    props: {
        type: String,
        link: URL,
        text: String
    }
}
</script>

<style lang="scss" scoped>
    .btn {
        color: #fefefe;
        text-decoration: none;
        padding: 10px;
        border-radius: 6px;
        box-shadow: 4px 4px 6px 1px rgba(22,22,22,0.7);
        font-weight: bold;
        &--login{
            background-color: #080f88;
        }
        &--signup{
            background-color: #aa2f18;
        }
    }
</style>