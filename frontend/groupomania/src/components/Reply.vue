<template>
    <a href="">
        <div class="reply card">
            <p>Lorem ipsum</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </a>    
</template>

<script>
export default {
        name: "Reply",
        props: {
            
        },
    }
</script>

<style lang="scss" scoped>
    .reply{
        text-align: justify;
        > p:first-child {
            font-weight: bold;
        }
    }
</style>