<template>
    <section :class="formType">
        <h1>Bienvenue sur Groupomania !</h1>
        <div>
            <div>
                <img src="../assets/icon.png" alt="icône Groupomania">
            </div>
            <form @submit="emitSubmitEvent" class="card">
                    <TextInput @input-keyup="emitKeyupEvent" v-for="(field, index) in fieldList" :fieldList="fieldList" :key="index" :maxlength="field.maxlength" :id="field.id" :placeholder="field.placeholder" :type="field.type"/>
                    <div class="buttons">
                        <Button :link="link" type="submit" :btnclass="buttonClass" :text="buttonLabel" />
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
        methods: {
            emitSubmitEvent() {
                this.$emit('form-submit')
            },
            emitKeyupEvent(payload) {
                this.$emit('input-keyup', payload)
            }
        },
        props: {
            formType: String,
            buttonLabel: String,
            buttonClass: String,
            link: String,  
            fieldList: Array
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