<template>
  <div id="app">
    <header class="header" v-if="isConnected()">
      <router-link to="/homepage"><img src="./assets/icon-left-font-monochrome-white.png" alt="logo groupomania" class="header__logo"></router-link>
      <nav class="header__nav" >
          <ul>
            <li><router-link to="/profile">Profil</router-link></li>
            <li><router-link to="/login">Se déconnecter</router-link></li>
          </ul>
      </nav>
    </header>
    <header class="header" v-else>
      <router-link to="/login"><img src="./assets/icon-left-font-monochrome-white.png" alt="logo groupomania" class="header__logo"></router-link>
    </header>
    <div class="container">
      <div id="nav">
        <router-link to="/">Vue Home</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/signup">Signup</router-link> |
        <router-link to="/homepage">Home</router-link> |
        <router-link to="/new">New</router-link> |
        <router-link to="/message">Read</router-link> |
        <router-link to="/profile">Account settings</router-link> |
        
      </div>
      <router-view />
    </div>
    <Footer v-if="messageList() == false"/>
  </div>
</template>

<script>
import Footer from '@/components/Footer';

  export default {
    name:"App",
    components : {
      Footer
    },
  methods : {
    isConnected(){
      return false;
    },
    messageList(){
      return false;
    }
  }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #eeeeee;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.header {
  $col-layout: #080f88;
  width: 100%;
  height: 100px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background-color: #080f88;
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

.container {
  max-width: 80%;
  margin: auto;
  > div {
    max-width: 1240px;
    margin: auto;
  }
  > section {
    max-width: 1240px;
    margin: auto;
  }
}

.card {
  padding: 10px;
  background-color: #fefefe;
  border-radius: 12px;
  margin-bottom: 24px;
  border: 1px solid #cecece;
}

a {
  color: unset;
  text-decoration: none;
}

h1 {
  font-size: 1.5rem;
}

h2 {
  font-size: 1.3rem;
}

</style>
