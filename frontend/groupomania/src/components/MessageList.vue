<template>
    <div class="message-list">
        <aside>
            <div class="card">
                <h1>Accueil</h1>
                <p>Bienvenue sur votre page d'accueil.</p>
                <router-link to="new"><Button text="Ecrire un message" btnclass="btn btn--blue"/></router-link>
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
    import { mapState, mapActions } from 'vuex'
    

    export default {
        name: "MessageList",
        components: {
            Message, Button
        },
        beforeMount() {
            this.getSeveralPosts()
        },
        methods: {
            ...mapActions(['getSeveralPosts']),
            messageList() {
                return true;
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
        flex-flow: row-reverse nowrap;
        margin-bottom: 24px
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