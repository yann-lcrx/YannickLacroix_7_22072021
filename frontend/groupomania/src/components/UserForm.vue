<template>
    <section :class="formType">
        <h1>Bienvenue sur Groupomania !</h1>
        <div>
            <div>
                <img src="../assets/icon.png" alt="icône Groupomania">
            </div>
            <form @submit.prevent="emitSubmitEvent" class="card">
                    <input v-model="username" id="username" maxlength="32" placeholder="Nom d'utilisateur" required />
                    <input v-model="password" id="password" maxlength="32" placeholder="Mot de passe" type="password" required />
                    <input v-model="email" v-if="isSignup == true" id="email" placeholder="Adresse électronique" type="email" required />
                    <div class="buttons">
                        <Button :link="link" type="submit" :btnclass="buttonClass" :text="buttonLabel" />
                    </div>
                    <p>{{ question }} <router-link :to="alternativeUrl">ici</router-link>.</p>
            </form>
        </div>
    </section>
</template>

<script>
    import Button from "./Button.vue";

    export default {
        name: "UserForm",
        components: {
            Button
        },
        methods: {
            emitSubmitEvent() {
                this.$emit('form-submit', {
                    name: this.username,
                    password: this.password,
                    email: this.email
                })
            },
        },
        props: {
            formType: String,
            buttonLabel: String,
            buttonClass: String,
            link: String,
            isSignup: Boolean,
            question: String,
            alternativeUrl: String
        },
        data() {
            return {
                username: "",
                password: "",
                email: ""
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