<template>
    <div>
        <input :id="id" :placeholder="placeholder" :type="type">
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
            }
        },
    }
</script>

<style scoped lang="scss">
    input {
        margin-bottom: 12px;
        width: 100%;
        font-size: 1.3rem;
        padding: 6px;
        border-radius: 8px;
        border: 1px gray solid;
    }
</style>