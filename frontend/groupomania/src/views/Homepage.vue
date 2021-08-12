<template>
    <section>
        <MessageList />
    </section>
</template>

<style lang="scss" scoped>
</style>

<script>
    import MessageList from "@/components/MessageList";
    import { mapActions } from "vuex"

    export default {
        name: "Homepage",
        components: {
            MessageList
        },
        beforeMount() {
            this.getSeveralPosts
        },
        methods: {
            ...mapActions(['getSeveralPosts'])
        }
    }
</script>