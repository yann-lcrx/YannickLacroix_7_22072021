<template>
    <div>
        <UserForm formType="signup" buttonLabel="S'inscrire" buttonClass="btn btn--signup"/>    
    </div>
</template>

<script>
    import UserForm from "@/components/UserForm.vue";

    export default {
        name: "Signup",
        components: {
            UserForm
        },
};
</script>