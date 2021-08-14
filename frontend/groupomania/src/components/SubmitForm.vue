<template>
  <div>
    <form @submit.prevent="emitValidationEvent">
        <input v-model="title" v-if="isPostingMessage == true" :maxlength="maxlength" id="post-message__title" placeholder="Titre" />
        <textarea v-model="text" :id="id" :name="id" :rows="rows" :placeholder="placeholder" required></textarea>
        <Button type="submit" btnclass="btn btn--blue" :text="action" link="message"/>
    </form>
  </div>
</template>

<script>
import Button from "@/components/Button";
import { mapState } from "vuex"

export default {
    name: "SubmitForm",
    components: {
        Button
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
            maxlength: 64,
            title: "",
            text: "",
        }
    },
    methods: {
        emitValidationEvent() {
            if (this.title != "") {
            this.$emit('form-click', {
                title: this.title,
                id_user: this.loggedInUser.id,
                content: this.text
                })
            } else {
                this.$emit('reply-click', {
                    id_user: this.loggedInUser.id,
                    id_post: 120,
                    content: this.text
                })
            }
        },
    },
    computed: {
        ...mapState({
            loggedInUser: 'loggedInUser'
        })
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