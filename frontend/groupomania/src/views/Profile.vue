<template>
    <Account @user-submit="deleteUser" />
</template>

<style lang="scss" scoped>
</style>

<script>
import Account from "@/components/Account";
import { mapActions } from "vuex";

export default {
        name: "Profile",
        components: {
            Account
        },
        methods: {
            ...mapActions(['deleteUser'])
        }
    }
</script>