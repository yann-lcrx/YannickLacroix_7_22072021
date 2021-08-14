<template>
    <div class="reply card">
        <div class="reply__info">
            <p>{{ author }}</p>
            <router-link to="/message"><p>Supprimer</p></router-link>
        </div>
        <p>{{ content }}</p>
    </div>
</template>

<script>
export default {
        name: "Reply",
        props: {
            id: Number,
            postId: Number,
            isAuthorized: Boolean,
            author: String,
            content: String
        },
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
            justify-content: space-between;
            align-content: center;
            :first-child {
                font-weight: bold;
            }
            :nth-child(2) {
                align-self: center;
                text-decoration: underline;
                font-size: .9rem;
                color: darken(#aa2f18, 6);
                font-weight: unset
            }
        }
    }
</style>