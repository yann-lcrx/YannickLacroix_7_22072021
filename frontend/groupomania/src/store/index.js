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
      id: 71,
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjo3MSwicm9sZSI6InVzZXIiLCJpYXQiOjE2Mjg5MzE2MjQsImV4cCI6MTYyOTAxODAyNH0.StRd_7Z8BAjn-Un2Rsk3cJtAyTQvLYQ4RlUTfcbHJac'
    } 
  },
  mutations: {
    GET_SEVERAL_POSTS(state, posts) {
      state.messages = [];
      for (let post of posts) {
        state.messages.push(post);
        console.log(post)
      }
    },
     CREATE_POST(state, post) {
      state.messages.push(post);
      console.log("Réussi")
    },
    CREATE_REPLY(state, reply) {
      state.replies.push(reply);
    },
    CREATE_USER(state, user) {
      state.users.push(user);
      console.log(state.users)
    },
    LOGIN_USER(state, user) {
      state.loggedInUser.name = user.name,
      state.loggedInUser.email = user.email,
      state.loggedInUser.role = user.role
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
      console.log(payload);
      try {
        const data = await fetch('http://localhost:3000/api/auth/login', {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        if (!data.ok) throw (data);
        context.commit('LOGIN_USER', payload);
        return await data.json();
      }
      catch (err) {
        console.error(err);
        //TODO : afficher un message d'erreur
      }
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
