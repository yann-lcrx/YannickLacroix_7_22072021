<template>
    <section>
        <Message singleMessage isAuthorized :title="title" :author="author" :text="text" :replyNumber="replyNumber"/>
        <SubmitForm @form-click="createReply" isPostingMessage=false rows=2 action="Répondre" placeholder="Qu'en pensez-vous ?" id="post-Message__text"/>

        <div class="Replies">
            <h2>Commentaires</h2>
            <Reply isAuthorized v-for="(reply, index) in replies" :key="index" :author="reply.author" :text="reply.text"/>
        </div>

    </section>
</template>

<script>
    import SubmitForm from "@/components/SubmitForm";
    import Message from "@/components/Message";
    import Reply from "@/components/Reply";
    import { mapState } from 'vuex';

    export default {
            name: "ReadMessage",
            components: {
                Message, SubmitForm, Reply
            },
            data() {
                return {
                    title: 'Extra Life Café, dernier bastion de l\'arcade à Paris',
                    author: 'Yannick',
                    content: 'Entre modernité et tradition, un café vraiment pas piqué des hannetons. Je recommande chaudement.',
                    replyNumber: 3,
                }
            },
            computed: {
                ...mapState({
                    messages: "messages",
                    replies: "replies"
                })
            }
        }
</script>

<style lang="scss" scoped>
    form {
        margin-bottom: 32px
    }
</style>