<template>
    <div class="message-list">
        <aside>
            <div>
                <div class="card">
                    <h1>Accueil</h1>
                    <p>Bienvenue sur votre page d'accueil.</p>
                    <Button text="Ecrire un message" type="btn btn--blue" link="new"/>
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
    

    export default {
        name: "MessageList",
        components: {
            Message, Button, Footer
        },
        data() {
            return {
                messageList: true,
                messages: [
                    {title: "Duck season", author: "Elmer", replyNumber: "12", text: "Je pars à la chasse aux canards !"},
                    {title: "Critique de Space Jam 2", author: "Ce Youtubeur bien connu", replyNumber: "56", text: "Il ne vole pas bien haut."},
                    {title: "Pourquoi les montres suisses sont-elles aussi chères ?", author: "Un homme curieux", replyNumber: "2", text: "En plus, elles ne donnent même pas l'heure plus vite."}
                ]
            }
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