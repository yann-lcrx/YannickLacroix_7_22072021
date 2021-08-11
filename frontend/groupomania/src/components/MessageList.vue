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
            <router-link to="/message"><Message isAuthorized v-for="(message, index) in messages" :key="index" :title="message.title" :author="message.author" :text="message.text" :replyNumber="message.replyNumber" /></router-link>
        </section>
    </div>
</template>

<script>
    import Message from "@/components/Message";
    import Button from "@/components/Button";
    import Footer from "@/components/Footer";
    import { mapState } from 'vuex'
    

    export default {
        name: "MessageList",
        components: {
            Message, Button, Footer
        },
        data() {
            return {
                messageList: true,
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