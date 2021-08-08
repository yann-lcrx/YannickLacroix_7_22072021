<template>
    <footer>
      <p>Copyright Groupomania 2021, tous droits réservés.</p>
      <ul>
        <li><a href="google.com">Mentions légales</a></li>
        <li><a href="google.com">Nous contacter</a></li>
      </ul>
    </footer>
</template>

<script>
export default {
    Name: "Footer",
    props: {

    }
}
</script>

<style lang="scss" scoped>
    footer {
        background-color: #000077;
        color: #fff;
        height: 100px;
        padding-top: 12px;
        text-align: center;
    }
    ul {
        list-style-type: none;
        text-indent:0px;
        padding-left: 0px;
        display: flex;
        justify-content: center;
    }
    li {
        margin-right: 12px
    }
    a {
        text-decoration: underline;
    }
</style>