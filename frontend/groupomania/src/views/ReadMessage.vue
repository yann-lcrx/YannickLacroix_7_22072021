<template>
    <section>
        <Message :singleMessage="singleMessage" @del-post-click="deletePost" v-for="(message, index) in messages" :isAuthorized="isAdmin" :key="index" :title="message.title" :author="message.author" :content="message.content" link="/message"/>
        <SubmitForm @reply-click="createReply" rows=2 action="Répondre" placeholder="Qu'en pensez-vous ?" id="post-Message__text"/>

        <div class="Replies">
            <div>
                <h2>Commentaires</h2>
                <p>({{replyCount}})</p>
            </div>
            <Reply v-for="(reply) in replies" :key="reply.id" :author="reply.author" :content="reply.content" :isAuthorized="isAdmin" :id="reply.id" @del-reply-click="deleteReply" />
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
        data() {
            return {
                singleMessage: true
            }
        },
        computed: {
            ...mapState({
                messages: "messages",
                replies: "replies",
                replyCount: "replyCount",
                isAdmin: "isAdmin"
            })
        },
        beforeMount() {
            this.getOnePost(), this.getReplies()
        },
        methods: {
            ...mapActions(['getOnePost','getReplies', 'createReply', 'deletePost', 'deleteReply'])
        },
    }
</script>

<style lang="scss" scoped>
    form {
        margin-bottom: 32px
    }
    .Replies > div:first-child {
        display: flex;
        flex-flow: row nowrap;
    }
</style>