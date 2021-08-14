import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [],
    replies: [
      {id: 1, author: "François", content:"C'est génial", postId:"1"},
      {id: 2, author: "Michel", content:"C'est pas mal", postId:"1"},
      {id: 3, author: "Cerise", content:"C'est franchement pas terrible", postId:"2"}
    ],
    loggedInUser: {
      name: "Yannick",
      email: "faussebonneemail@gmail.com",
      role: "Administrateur",
      id: localStorage.getItem('userId'),
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

    CREATE_REPLY(state, reply) {
      state.replies.push(reply);
    },

    CREATE_USER(state, user) {
      state.users.push(user);
      //TODO déterminer que faire de cette fonction
    },

    LOGIN_USER(state, user) {
      localStorage.setItem('token', user.token);
      localStorage.setItem('userId', user.id_user)
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
        context.commit('CREATE_POST', payload)
      })
      .catch(function(err) {
        console.error(err)
      })
    },

    async signupUser(context, payload) {
      await fetch('http://localhost:3000/api/auth/signup', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(function(res) {
        if (res.ok) {
          return res.json
        }
      })
      .then(function() {
        context.commit('CREATE_USER', payload)
      })
      .catch(function(err) {
        console.error(err)
      })
    },
    
    async loginUser(context, payload) {
      await fetch('http://localhost:3000/api/auth/login', {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(user => {
          context.commit('LOGIN_USER', user);
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
      .then(function(res) {
        if (res.ok) {
          return res.json
        }
      })
      .then(function() {
        context.commit('CREATE_REPLY', payload)
      })
      .catch(function(err) {
        console.error(err)
      })
    },
  }
})
