<template>
    <section>
        <h1>Rédiger un message</h1>
        <SubmitForm :id="post-message__text" :action="action" :rows="rows" :placeholder="placeholder" isPostingMessage @form-click="createPost"/>
    </section>
</template>

<style lang="scss" scoped>
    input {
        font-size: unset;
    }
</style>

<script>
import SubmitForm from "@/components/SubmitForm";
import { mapActions } from 'vuex'

export default {
        name: "NewMessage",
        components: {
            SubmitForm
        },
        data() {
            return {
                placeholder: "Votre message",
                rows: 10,
                action: "Publier"
            }
        },
        methods: {
            ...mapActions(['createPost'])
        }
    }
</script>