<template>
    <section>
        <Message singleMessage isAuthorized :title="title" :author="author" :text="text" :replyNumber="replyNumber"/>
        <SubmitForm isPostingMessage=false rows=2 action="Répondre" placeholder="Qu'en pensez-vous ?" id="post-Message__text"/>

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

    export default {
            name: "ReadMessage",
            components: {
                Message, SubmitForm, Reply
            },
            data() {
                return {
                    title: 'Extra Life Café, dernier bastion de l\'arcade à Paris',
                    author: 'Yannick',
                    text: 'Entre modernité et tradition, un café vraiment pas piqué des hannetons. Je recommande chaudement.',
                    replyNumber: 3,
                    replies:[
                        {author: "Yannick", text: "Passionnant !"},
                        {author: "MrMiam", text: "Quelle heure ?"}
                    ]
                }
            },
            methods: {
                test() {
                    console.log('Oui, ça marche')
                }
            }
        }
</script>

<style lang="scss" scoped>
    form {
        margin-bottom: 32px
    }
</style>