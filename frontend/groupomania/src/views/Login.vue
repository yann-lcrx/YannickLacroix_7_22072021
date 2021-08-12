<template>
    <div>
        <UserForm link="/homepage" formType="login" @form-submit="loginUser" :buttonLabel="btnLabel" :buttonClass="btnClass"/>    
    </div>
</template>

<script>
    import UserForm from "@/components/UserForm.vue";
    import { mapActions } from "vuex"

    export default {
        name: "Login",
        components: {
            UserForm
        },
        data() {
            return {
                btnLabel: "Se connecter",
                btnClass: "btn btn--blue"
            }
        },
        methods: {
            ...mapActions(['loginUser'])
        }
    };
</script>