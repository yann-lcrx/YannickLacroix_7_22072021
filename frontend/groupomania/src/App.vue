<template>
  <div id="app">
    <Header :isConnected="isConnected" />
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
import Header from '@/components/Header';
import '@/scss/variables.scss'

  export default {
    name:"App",
    components : {
      Footer, Header
    },
  methods : {
    messageList(){
      return false;
    },
    test(){
      console.log("Réussi")
    }
  },
  data() {
    return {
      isConnected: true
    }
  }
  }
</script>

<style lang="scss">
$col-text: #2c3e50;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $col-text;
  background-color: #eeeeee;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $col-text;

    &.router-link-exact-active {
      color: #42b983;
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

input {
    margin-bottom: 12px;
    width: 100%;
    font-size: 1.3rem;
    padding-top: 6px;
    padding-bottom: 6px;
    border-radius: 8px;
    border: 1px #cecece solid;
    text-indent: 8px;
}

</style>
