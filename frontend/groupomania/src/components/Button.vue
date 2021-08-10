<template>
    <div class="button">
        <router-link :to="link"><a :class="type">{{ text }}</a></router-link>
    </div>
</template>

<script>
export default {
    name: "Button",
    props: {
        type: String,
        link: String,
        text: String
    }
}
</script>

<style lang="scss" scoped>
    div {
        text-align: center;
    }
    .btn {
        color: #fefefe;
        text-decoration: none;
        padding: 12px;
        border-radius: 6px;
        box-shadow: 4px 4px 6px 0px rgba(22,22,22,0.7);
        font-weight: bold;
        display: inline-block;
        position: relative;
        z-index: 1;
        &:hover{
            &::after{
                opacity:1;
                border-radius: 6px;
            }
        }
        &::after{
            content: "";
            border-radius: 6px;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;  
            left: 0;
            opacity: 0;
            z-index: -1;
            transition: opacity 250ms;

        }
        &--blue{
            background: linear-gradient(8deg, rgba(6,7,78,1) 0%, rgba(8,14,132,1) 62%, rgba(54,67,159,1) 100%);
            &::after {
                background: linear-gradient(8deg, lighten( rgba(6,7,78,1), 5) 0%, lighten(rgba(8,14,132,1), 5) 62%, lighten(rgba(54,67,159,1), 5) 100%);
            }
        }
        &--red{
            background: linear-gradient(8deg, rgba(190,90,44,1) 0%, rgba(170,47,24,1) 50%, rgba(184,49,19,1) 100%);
            &::after {
                background: linear-gradient(8deg, lighten(rgba(190,90,44,1), 5) 0%, lighten(rgba(170,47,24,1), 5) 50%, lighten(rgba(184,49,19,1), 5) 100%);
            } 
        }
    }
</style>