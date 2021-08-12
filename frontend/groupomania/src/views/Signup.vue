<template>
    <div>
        <UserForm isSignup link="/homepage" formType="signup" @form-submit="signupUser" :buttonLabel="btnLabel" :buttonClass="btnClass"/>    
    </div>
</template>

<script>
    import UserForm from "@/components/UserForm.vue";
    import { mapActions } from "vuex";

    export default {
        name: "Signup",
        components: {
            UserForm
        },
        data() {
            return {
                btnLabel: "S'inscrire",
                btnClass: "btn btn--red",
            }
        },
        methods: {
            ...mapActions(['signupUser'])
        }
    }
</script>