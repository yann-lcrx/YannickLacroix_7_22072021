<template>
    <div>
        <p> ça fonctionne </p>
    </div>
</template>

<script>
export default {
        name: "Reply",
        props: {
            
        },
    }
</script>

<style lang="scss" scoped>
    .reply{
        text-align: justify;
        &__header {
            display: flex;
            flex-flow: nowrap row;
            justify-content: space-between;
            > p {
                align-self: center;
            }
        }
    }
</style>