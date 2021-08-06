<template>
    <a href="">
        <div class="message">
            <div class="message__header"><h2>Lorem ipsum</h2><p>Par Lorem ipsum</p></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>9 commentaires</p>
        </div>
    </a>    
</template>

<script>
export default {
        name: "Message",
        props: {
            
        },
    }
</script>

<style lang="scss" scoped>
    a {
        color: unset;
        text-decoration: none;
    }
    .message{
        padding: 8px;
        background-color: #fefefe;
        border-radius: 12px;
        margin-bottom: 24px;
        border: 1px solid #cecece;
        text-align: justify;
        &__header {
            display: flex;
            flex-flow: nowrap row;
            justify-content: space-between;
            > p {
                align-self: center;
            }
        }
    }
</style>