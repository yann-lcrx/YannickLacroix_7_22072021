<template>
  <div>
    <form @submit.prevent="emitValidationEvent">
        <TextInput v-if="isPostingMessage == true" :maxlength="maxlength" id="post-message__title" placeholder="Titre" />
        <textarea :id="id" :name="id" :rows="rows" :placeholder="placeholder" required></textarea>
        <Button type="submit" btnclass="btn btn--blue" :text="action" link="message"/>
    </form>
  </div>    
</template>

<script>
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";

export default {
    name: "SubmitForm",
    components: {
        Button, TextInput
    },
    props: {
        action: String,
        rows: Number,
        isPostingMessage: Boolean,
        placeholder: String,
        id: String,
        onClick: Function
    },
    data() {
        return {
            maxlength: 64
        }
    },
    methods: {
        emitValidationEvent() {
            this.$emit('form-click', {
                title: document.getElementById('post-message__title').value,
                author: "Francis",
                replyNumber: 9,
                text: document.getElementById('post-message__text').value
            })
        }
    }
}
</script>

<style>
#post-message__title {
    font-size: 1.1rem;
}
textarea {
    border-radius: 8px;
    border: 1px #cecece solid;
    width: 100%;
    margin-bottom: 16px;
    font-family: Arial, Helvetica, sans-serif;
    padding-top: 6px;
    padding-bottom: 6px;
    text-indent: 8px;
    resize: none;
}
form {
    margin-bottom: 32px
}
</style>