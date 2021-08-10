<template>
    <div>
        <UserForm link="/homepage" formType="signup" buttonLabel="S'inscrire" buttonClass="btn btn--red"/>    
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