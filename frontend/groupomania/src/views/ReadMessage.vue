<template>
    <section>
        <Message />
        <form>
            <textarea name="write-message" id="" cols="30" rows="10"></textarea>
            <Button type="btn btn--message" text="Répondre" link="message"/>
        </form>
        <Reply />
        <Reply />
        <Reply />

    </section>
</template>

<style lang="scss" scoped>
    textarea {
        border-radius: 8px;
        border: 1px #cecece solid;
        width: 100%;
        margin-bottom: 16px
    }
    form {
        margin-bottom: 32px
    }
</style>

<script>
    import Message from "@/components/Message";
    import Button from  "@/components/Button";
    import Reply from "@/components/Reply";

    export default {
            name: "ReadMessage",
            components: {
                Message, Button, Reply
            }
        }
</script>