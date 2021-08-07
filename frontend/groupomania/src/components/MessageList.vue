<template>
    <div class="message-list">
        <section>
            <Message />
            <Message />
            <Message />
        </section>
        <aside>
            <div>
                <div class="card">
                    <h1>Accueil</h1>
                    <p>Bienvenue sur votre page d'accueil.</p>
                    <Button text="Ecrire un message" type="btn btn--write" link="writenew"/>
                </div>
                <Footer />
            </div>
        </aside>
    </div>
</template>

<script>
    import Message from "@/components/Message";
    import Button from "@/components/Button";
    import Footer from "@/components/Footer";
    

    export default {
        name: "MessageList",
        components: {
            Message, Button, Footer
        },
        data() {
            return {
                messageList: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .message-list {
        display: flex;
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