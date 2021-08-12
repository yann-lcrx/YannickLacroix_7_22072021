<template>
    <div>
        <UserForm link="/homepage" formType="login" :buttonLabel="btnLabel" :buttonClass="btnClass"/>    
    </div>
</template>

<script>
    import UserForm from "@/components/UserForm.vue";

    export default {
        name: "Login",
        components: {
            UserForm
        },
        data() {
            return {
                fieldList: [
                    {id: "username", placeholder: "Nom d'utilisateur", maxlength: 32},
                    {id: "password", type: "password", placeholder: "Mot de passe", maxlength: 32}
                ],
                btnLabel: "Se connecter",
                btnClass: "btn btn--blue"
            }
        }
    };
</script>