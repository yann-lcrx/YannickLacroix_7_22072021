<template>
    <div>
        <section>
            <Message />
            <Message />
            <Message />
        </section>
        <aside>
            <Button text="Ecrire un message" class="btn btn--write" link="google.com"/>
        </aside>
    </div>
</template>

<script>
    import Message from "@/components/Message";
    import Button from "@/components/Button";

    export default {
        name: "MessageList",
        components: {
            Message, Button
        }
    }
</script>

<style lang="sass" scoped>

</style>