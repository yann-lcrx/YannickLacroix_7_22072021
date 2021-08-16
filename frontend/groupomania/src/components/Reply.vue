<template>
    <div class="reply card">
        <div class="reply__info">
            <p>{{ id }}</p>
            <p> | {{ author }} | </p>
            <p v-if="isAuthorized == true" @click="emitDelReplyEvent">Supprimer</p>
        </div>
        <p>{{ content }}</p>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "Reply",
    props: {
        id: Number,
        postId: Number,
        isAuthorized: Boolean,
        author: String,
        content: String
    },
    methods: {
        emitDelReplyEvent() {
            this.$emit('del-reply-click', {
                id_user: this.loggedInUser.id,
                id: this.id
            })   
        },
    },
    computed: {
        ...mapState({
            loggedInUser: 'loggedInUser'
        })
    }
}
</script>

<style lang="scss" scoped>
    .reply{
        text-align: justify;
        padding-top: 6px;
        padding-bottom: 6px;
        > p {
            margin-top: 2px;
        }
        &__info {
            display: flex;
            flex-flow: nowrap row;
            align-content: center;
            p {
                margin-right: 8px
            }
            :first-child{
                font-size: .8rem;
                align-self: center;
            }
            :nth-child(2) {
                font-weight: bold;
            }
            :nth-child(3) {
                align-self: center;
                text-decoration: underline;
                font-size: .9rem;
                color: darken(#aa2f18, 6);
                cursor: pointer;
                font-weight: unset
            }
        }
    }
</style>