<template>
    <div>
        <UserForm link="/homepage" formType="signup" @input-keyup="changeData" :fieldList="fieldList" :buttonLabel="btnLabel" :buttonClass="btnClass"/>    
    </div>
</template>

<script>
    import UserForm from "@/components/UserForm.vue";

    export default {
        name: "Signup",
        components: {
            UserForm
        },
        data() {
            return {
                fieldList: [
                    {id: "username", placeholder: "Nom d'utilisateur", maxlength: 32},
                    {id: "password", type: "password", placeholder: "Mot de passe", maxlength: 32},
                    {id: "email", type: "email", placeholder: "Adresse électronique"},
                ],
                btnLabel: "S'inscrire",
                btnClass: "btn btn--red",
                username: "",
                password: "",
                email: ""
            }
        },
        methods: {
            changeData(payload) {
                this.username = payload;
                console.log(this.username);
            }
        }
    }
</script>