<template>
    <section :class="formType">
        <h1>Bienvenue sur Groupomania !</h1>
        <div>
            <div>
                <img src="../assets/icon.png" alt="icône Groupomania">
            </div>
            <form class="card">
                    <div v-for="(field, index) in fieldList" :key="index">
                        <TextInput :id="field.id" :placeholder="field.placeholder" :type="field.type"/>
                    </div>
                    <div class="buttons">
                        <Button link="#" :type="buttonClass" :text="buttonLabel" />
                    </div>
                    <p>Mot de passe oublié ? Cliquez <a href="google.com">ici</a>.</p>
            </form>
        </div>
    </section>
</template>

<script>
    import TextInput from "./TextInput.vue";
    import Button from "./Button.vue";

    export default {
        name: "UserForm",
        components: {
            TextInput, Button
        },
        data() {
            return {
                fieldList: [
                    {id: "username", placeholder: "nom d'utilisateur"},
                    {id: "password", placeholder: "mot de passe"},
                    {id: "email", type: "email", placeholder: "adresse électronique"}
                ]
            }
        },
        props: {
            formType: String,
            buttonLabel: String,
            buttonClass: String,
            //fieldList: Array
        }
};
</script>

<style scoped lang="scss">
    section{
        > div {
            display: flex;
            margin-bottom: 32px;
            justify-content: space-between;
        }
    }
    form {
        flex: 0.9;
        max-width: 500px;
        margin-top: 24px;
        padding: 16px;
        text-align: center
    }
    h1 {
        text-align: initial;
        font-size: 2rem;
    }
    img {
        max-width: 380px;
        mix-blend-mode: darken;
    }
    input {
        margin-bottom: 12px;
        width: 100%;
        font-size: 1.3rem;
        padding: 6px;
        border-radius: 8px;
        border: 1px gray solid;
    }

    .buttons {
        max-width: 600px;
        margin: auto;
        margin-top: 24px;
        justify-content: center;
        display: flex;
        margin-bottom: 32px
    }
    a {
        text-decoration: underline;
    }
</style>