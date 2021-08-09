<template>
    <section>
        <h1>Rédiger un message</h1>
        <SubmitForm :action="action" :rows="rows" :placeholder="placeholder" isPostingMessage/>
    </section>
</template>

<style lang="scss" scoped>
    input {
        font-size: unset;
    }
</style>

<script>
import SubmitForm from "@/components/SubmitForm";

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
        }
    }
</script>