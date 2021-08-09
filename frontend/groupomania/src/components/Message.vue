<template>
    <a href="">
        <div class="message card">
            <div class="message__info"><h2>Lorem ipsum</h2><p>Par Lorem ipsum</p></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div class="message__info">
                <p>9 commentaires</p>
                <a v-if="isAuthorized == true" href="homepage">Supprimer</a>
            </div>
        </div>
    </a>    
</template>

<script>
export default {
        name: "Message",
        props: {
            isAuthorized: Boolean
        },
    }
</script>

<style lang="scss" scoped>
    .message{
        text-align: justify;
        &__info {
            display: flex;
            flex-flow: nowrap row;
            justify-content: space-between;
            align-content: center;
            :nth-child(2) {
                align-self: center;
            }
            a {
                text-decoration: underline;
                font-size: .9rem
            }
        }
    }
</style>