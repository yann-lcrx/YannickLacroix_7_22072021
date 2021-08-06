<template>
    <div id="login">    
        <section>
            <h1>Bienvenue sur Groupomania</h1>
            <div>
                <div>
                    <img src="../assets/icon.png" alt="icône Groupomania" class="icon">
                </div>
                <div>
                    <form>
                        <TextInput id="username" placeholder="Nom d'utilisateur"/>
                        <TextInput id="password" placeholder="Mot de passe"/>
                        <TextInput type="email" id="email" placeholder="Adresse électronique"/>
                        <div class="buttons">
                            <a href="" class="btn btn--signup">S'inscrire</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
    #login{
        max-width: 90%;
        margin: auto;
    }
    h1 {
        text-align: initial;
        font-size: 2rem;
    }
    .icon {
        max-width: 380px;
        mix-blend-mode: darken;
    }
    section > div {
        display: flex;
        div {
            flex: 1;
        }
    }
    .btn {
        color: #fefefe;
        text-decoration: none;
        padding: 10px;
        border-radius: 6px;
        box-shadow: 4px 4px 6px 1px rgba(22,22,22,0.7);
        font-weight: bold;
        &--signup{
            background-color: #aa2f18;
        }
    }
    input {
        margin-bottom: 12px;
        width: 100%;
        font-size: 1.3rem;
        padding: 6px;
        border-radius: 8px;
        border: 1px gray solid;
    }

    .buttons{
        width: 100%;
        max-width: 600px;
        margin: auto;
        margin-top: 24px;
    }
</style>

<script>
    import TextInput from "@/components/TextInput.vue";

    export default {
        name: "Signup",
        components: {
            TextInput,
        }
    }
</script>