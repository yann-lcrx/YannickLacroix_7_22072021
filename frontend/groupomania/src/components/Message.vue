<template>
    <div class="message card">
        <div>
            <h2>{{ title }}</h2>
        </div>
        <p>{{ text }}</p>
        <div class="message__footer">
            <p>{{ author }} | </p>
            <p>{{ replyNumber }} commentaires | </p>
            <router-link to="/homepage"><p v-if="isAuthorized == true">Supprimer</p></router-link>
        </div>
    </div>
</template>

<script>
export default {
        name: "Message",
        props: {
            isAuthorized: Boolean,
            title: String,
            author: String,
            text: String,
            replyNumber: Number
        },
    }
</script>

<style lang="scss" scoped>
    .message{
        text-align: justify;
        &__footer {
            color: #898276;
            font-size: .9rem;
            display: flex;
            flex-flow: nowrap row;
            :nth-child(3) {
                color: darken(#aa2f18, 6);
            }
            p {
                margin-right: 6px
            }
        }
    }
</style>