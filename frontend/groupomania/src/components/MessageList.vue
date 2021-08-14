<template>
    <div class="message-list">
        <aside>
            <div>
                <div class="card">
                    <h1>Accueil</h1>
                    <p>Bienvenue sur votre page d'accueil.</p>
                    <Button text="Ecrire un message" btnclass="btn btn--blue" link="new"/>
                </div>
                <Footer />
            </div>
        </aside>
        <section>
            <Message isAuthorized v-for="(message, index) in messages" :key="index" :title="message.title" :author="message.author" :content="message.content" :link="'/message?id=' + message.id" />
        </section>
    </div>
</template>

<script>
    import Message from "@/components/Message";
    import Button from "@/components/Button";
    import Footer from "@/components/Footer";
    import { mapState, mapActions } from 'vuex'
    

    export default {
        name: "MessageList",
        components: {
            Message, Button, Footer
        },
        data() {
            return {
                messageList: true,
                messageId: this.message.id,
                baseLink: "/homepage?id="
            }
        },
        beforeMount() {
            this.getSeveralPosts()
        },
        methods: {
            ...mapActions(['getSeveralPosts']),
            getFormattedLink() {
                console.log(this.data.baseLink);
                console.log(this.data.messageId);
                console.log(this.data.baseLink + this.data.messageId);
                return this.data.baseLink + this.data.messageId;
            }
        },
        computed: {
            ...mapState({
                messages: "messages"
            })
        }
    }
</script>

<style lang="scss" scoped>
    .message-list {
        display: flex;
        flex-flow: row-reverse nowrap
    }
    section {
        flex: 1;
        margin-right: 32px;
    }
    aside {
        width: 270px;
        > div {
            position: fixed;
            width: 270px;
        }
    }
    footer {
        padding: 12px;
        border-radius: 12px;
        height: unset;
        ul{
            flex-flow: column nowrap
        }
    }
    .button {
        margin-bottom: 8px
    }
</style>