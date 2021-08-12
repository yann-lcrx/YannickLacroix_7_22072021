<template>
    <div class="message card">
        <div>
            <h1 v-if="singleMessage">{{ title }}</h1>
            <h2 v-else>{{ title }}</h2>
        </div>
        <p>{{ content }}</p>
        <div class="message__footer">
            <p>{{ author }} | </p>
            <router-link to="message#commentaires"><p>{{ replyNumber }} commentaires | </p></router-link>
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
        content: String,
        replyNumber: Number,
        userId: Number,
        singleMessage: Boolean
    },
}
</script>

<style lang="scss" scoped>
    .message{
        text-align: justify;
        &__footer {
            color: #5F584C;
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