<template>
    <div>
        <UserForm link="/homepage" fieldList="[{id: 'username', placeholder: 'nom d'utilisateur'},
                    {id: 'password', placeholder: 'mot de passe'},
                    {id: 'email', type: 'email', placeholder: 'adresse électronique'}]" formType="login" buttonLabel="Se connecter" buttonClass="btn btn--blue"/>    
    </div>
</template>

<script>
    import UserForm from "@/components/UserForm.vue";

    export default {
        name: "Login",
        components: {
            UserForm
        },
};
</script>