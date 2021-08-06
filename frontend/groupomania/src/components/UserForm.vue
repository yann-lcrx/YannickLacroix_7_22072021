<template>
    <section :class="formType">
        <h1>Bienvenue sur Groupomania !</h1>
        <div>
            <div>
                <img src="../assets/icon.png" alt="icône Groupomania">
            </div>
            <form>
                    <TextInput id="username" placeholder="Nom d'utilisateur"/>
                    <TextInput id="password" type="password" placeholder="Mot de passe"/>
                    <div class="buttons">
                        <Button link="#" :type="buttonClass" :text="buttonLabel" />
                    </div>
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
    props: {
        formType: String,
        buttonLabel: String,
        buttonClass: String,
        fieldList: {
            Type: Object
        }
    }
};
</script>

<style scoped lang="scss">
    section{
        > div {
            display: flex;
            margin-bottom: 32px;
            justify-content: space-between;
            form {
                flex: 0.9;
            }
        }
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
        width: 100%;
        max-width: 600px;
        margin: auto;
        margin-top: 24px;
    }
</style>