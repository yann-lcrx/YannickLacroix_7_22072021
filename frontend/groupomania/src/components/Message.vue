<template>
    <div class="message card">
        <div>
            <h1 v-if="singleMessage">{{ title }}</h1>
            <h2 v-else>{{ title }}</h2>
        </div>
        <p>{{ content }}</p>
        <div class="message__footer">
            <p>{{ author }} </p>
            <p v-if="isAuthorized == true && singleMessage == true" @click="emitDeleteEvent">Supprimer</p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: "Message",
    props: {
        title: String,
        author: String,
        content: String,
        replyNumber: Number,
        userId: Number,
        singleMessage: Boolean,
        link: String,
        isAuthorized: Boolean
    },
    methods: {
        emitDeleteEvent() {
            this.$emit('del-post-click', {
                id_user: this.loggedInUser.id
            })   
        }
    },
    computed: {
        ...mapState({
            loggedInUser: 'loggedInUser'
        })
    }
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
            :nth-child(2) {
                color: darken(#aa2f18, 6);
                cursor: pointer;
            }
            p {
                margin-right: 6px
            }
        }
    }
</style>