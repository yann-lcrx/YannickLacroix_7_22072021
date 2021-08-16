import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [],
    replies: [],
    replyCount: 0,
    isAdmin: false,
    loggedInUser: {
      name: localStorage.getItem('name'),
      id: parseFloat(localStorage.getItem('userId')),
      token: localStorage.getItem('token')
    } 
  },
  mutations: {
    GET_SEVERAL_POSTS(state, posts) {
      state.messages = [];
      for (let post of posts) {
        state.messages.push(post);
      }
    },

    GET_ONE_POST(state, post) {
      state.messages = [];
      state.messages.push(post)
    },

    CREATE_POST(state, post) {
      state.messages.push(post);
    },

    DELETE_POST(state) {
      state.messages = [];
    },

    GET_REPLIES(state, replies) {
      state.replies = [];
      state.replyCount = 0;
      for (let reply of replies) {
        state.replies.push(reply);
        state.replyCount++;
      }
    },

    CREATE_REPLY(state, reply) {
      state.replies.push(reply);
    },

    DELETE_REPLY(state) {
      state.replies = []
    },

    LOGIN_USER(state, user) {
      if(user.role == "admin") {
        console.log(user.role);
        state.isAdmin = true;        
      } else {
        console.log(user.role);
        state.isAdmin = false;
      }
      localStorage.setItem('role', user.role)
      localStorage.setItem('token', user.token);
      state.loggedInUser.token = user.token;
      localStorage.setItem('userId', user.id_user);
      state.loggedInUser.id = user.id_user
    },

    LOGOUT(state) {
      state.isAdmin = false;
      state.loggedInUser.token = "";
      state.loggedInUser.name = "";
      state.loggedInUser.id = null;
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('name');
      localStorage.removeItem('role');
    }
  },
  getters: {
    formattedHeaders: state => {
      return { 'Accept': 'application/json',
      'Content-Type': 'application/json', 
      "authorization" : "bearer "+state.loggedInUser.token
    }
    }
  },
  actions: {
    async getSeveralPosts(context) {
      await fetch('http://localhost:3000/api/posts/from/1/100', {
        headers: { "authorization" : "bearer "+ this.state.loggedInUser.token }
        })
        .then(res => res.json())
        .then(posts => {
          context.commit('GET_SEVERAL_POSTS', posts.posts)
        })
        .catch(function(err) {
          console.error(err)
        })
    },

    async getOnePost(context) {
      let postId = (new URL(window.location.href).searchParams.toString()).slice(3);
      await fetch('http://localhost:3000/api/posts/' + postId, {
        headers: { "authorization" : "bearer "+ this.state.loggedInUser.token }
        })
        .then(res => res.json())
        .then(post => {
          context.commit('GET_ONE_POST', post.post)
        })
        .catch(function(err) {
          console.error(err)
        })
    },
    
    async createPost(context, payload) {
      await fetch('http://localhost:3000/api/posts', {
        method: "POST",
        headers: this.getters.formattedHeaders,
        body: JSON.stringify(payload)
      })
      .then(function(res) {
        if (res.ok) {
          return res.json
        }
      })
      .then(function() {
        context.commit('CREATE_POST', payload);
        router.push({ name: 'Homepage' })
      })
      .catch(function(err) {
        console.error(err)
      })
    },

    async deletePost(context, payload) {
      try {
        let postId = (new URL(window.location.href).searchParams.toString()).slice(3);
        let res = await fetch('http://localhost:3000/api/posts/' + postId, {
          method: "DELETE",
          headers: this.getters.formattedHeaders,
          body: JSON.stringify(payload)
        })
        if (!res.ok) throw { res };
        context.commit('DELETE_POST');
        router.push({ name: 'Homepage' })
      } catch {
        console.error()
      }
    },

    async getReplies(context) {
      let postId = (new URL(window.location.href).searchParams.toString()).slice(3);
      await fetch('http://localhost:3000/api/replies/' + postId, {
        headers: { "authorization" : "bearer "+ this.state.loggedInUser.token }
        })
        .then(res => res.json())
        .then(replies => {
          context.commit('GET_REPLIES', replies.replies)
        })
        .catch(function(err) {
          console.error(err)
        })
    },

    async createReply(context, payload) {
      await fetch('http://localhost:3000/api/replies', {
        method: "POST",
        headers: this.getters.formattedHeaders,
        body: JSON.stringify(payload)
      })
      .then(res => res.json)
      .then(function() {
        location.reload()
      })
      .catch(function(err) {
        console.error(err)
      })
    },

    async deleteReply(context, payload) {
      try {
        let res = await fetch('http://localhost:3000/api/replies/' + payload.id, {
          method: "DELETE",
          headers: this.getters.formattedHeaders,
          body: JSON.stringify({id_user: payload.id_user})
        })
        if (!res.ok) throw { res };
        context.commit('DELETE_REPLY');
        router.push({ path: `/homepage` })
      } catch {
        console.error()
      }
    },

    async signupUser(context, payload) {
      try{
        const res = await fetch('http://localhost:3000/api/auth/signup', {
          method: "POST",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
        if (!res.ok) throw { res };
        router.push({ name: 'Login' })
      } catch {
        console.error()
      }
    },

    async loginUser(context, payload) {
        try {
          let res = await fetch('http://localhost:3000/api/auth/login', {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          })
          if (!res.ok) throw { res };
          const user = await res.json();
          localStorage.setItem('name', payload.name);
          this.state.loggedInUser.name = payload.name;
          context.commit('LOGIN_USER', user);
          router.push({ name: 'Homepage' })
        } catch {
          console.error()
        }
    },

    async deleteUser(context, payload) {
      try {
        let res = await fetch('http://localhost:3000/api/auth/', {
          method: "DELETE",
          headers: this.getters.formattedHeaders,
          body: JSON.stringify(payload)
        })
        if (!res.ok) throw { res };
        context.commit('LOGOUT');
        router.push({ name: 'Signup' })
      } catch {
        console.error()
      }
    },

    async logout(context) {
      context.commit('LOGOUT')
    }
  }
})
