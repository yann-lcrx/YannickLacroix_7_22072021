<template>
  <header class="header" v-if="isConnected">
      <router-link to="/homepage"><img src="../assets/icon-left-font-monochrome-white.png" alt="logo groupomania" class="header__logo"></router-link>
      <nav class="header__nav" >
          <ul>
            <li><router-link to="/profile">Profil</router-link></li>
            <li @click="emitLogoutEvent"><router-link to="/login">Se déconnecter</router-link></li>
          </ul>
      </nav>
    </header>
    <header class="header" v-else>
      <router-link to="/login"><img src="../assets/icon-left-font-monochrome-white.png" alt="logo groupomania" class="header__logo"></router-link>
    </header>
</template>

<script>
export default {
    name: "Header",
    props: {
        isConnected: Boolean
    },
    methods: {
      emitLogoutEvent() {
        console.log('cliqué');
        this.$emit('logout-click')
      }
    }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 85px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background-color: #080f88;
  margin-bottom: 32px;

  > a {
    align-self: center;
  }
  &__logo{
    max-width: 200px;
    margin-left: 12px;
  }
  &__nav {
    align-self: center; 
    ul{
      text-indent: 0px;
      list-style-type: none;
      color:#fefefe;
      font-weight: bold;
      display: flex;
      li {
        margin-right: 24px;
      }
    }
  }
}

</style>