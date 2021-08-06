<template>
    <div class="container">
        <UserForm formType="login" buttonLabel="Se connecter" buttonClass="btn btn--login"/>    
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


<style lang="scss" scoped>
    .container {
        max-width: 90%;
        margin: auto;
    }
</style>