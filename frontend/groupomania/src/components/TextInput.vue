<template>
    <div>
        <input :id="id" :placeholder="placeholder" :type="type" :maxlength="maxlength" required>
    </div>
</template>

<script>
    export default {
        name: "TextInput",
        props: {
            id: {
                Type: String
            },
            placeholder: {
                Type: String
            },
            type: {
                Type: String
            },
            maxlength: Number
        },
    }
</script>

<style scoped lang="scss">
    input {
        margin-bottom: 12px;
        width: 100%;
        font-size: 1.3rem;
        padding-top: 6px;
        padding-bottom: 6px;
        border-radius: 8px;
        border: 1px #cecece solid;
        text-indent: 8px;
    }
</style>