<template>
    <section>
        <Message singleMessage isAuthorized v-for="(message, index) in messages" :key="index" :title="message.title" :author="message.author" :content="message.content" link="/message"/>
        <SubmitForm @reply-click="createReply" rows=2 action="Répondre" placeholder="Qu'en pensez-vous ?" id="post-Message__text"/>

        <div class="Replies">
            <h2>{{replyCount}} commentaires</h2>
            <Reply isAuthorized v-for="(reply, index) in replies" :key="index" :author="reply.author" :content="reply.content"/>
        </div>

    </section>
</template>

<script>
    import SubmitForm from "@/components/SubmitForm";
    import Message from "@/components/Message";
    import Reply from "@/components/Reply";
    import { mapState, mapActions } from 'vuex';

    export default {
        name: "ReadMessage",
        components: {
            Message, SubmitForm, Reply
        },
        computed: {
            ...mapState({
                messages: "messages",
                replies: "replies",
                replyCount: "replyCount"
            })
        },
        beforeMount() {
            this.getOnePost(), this.getReplies()
        },
        methods: {
            ...mapActions(['getOnePost','getReplies', 'createReply'])
        },
    }
</script>

<style lang="scss" scoped>
    form {
        margin-bottom: 32px
    }
</style>