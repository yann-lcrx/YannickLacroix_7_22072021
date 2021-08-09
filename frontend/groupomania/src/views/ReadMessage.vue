<template>
    <section>
        <Message isAuthorized />
        <SubmitForm isPostingMessage=false rows=2 action="Répondre"/>

        <div class="Replies">
            <h3>Commentaires</h3>
            <Reply />
            <Reply />
            <Reply />
        </div>

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
    import SubmitForm from "@/components/SubmitForm";
    import Message from "@/components/Message";
    import Reply from "@/components/Reply";

    export default {
            name: "ReadMessage",
            components: {
                Message, SubmitForm, Reply
            }
        }
</script>