import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [
      {id: 1, title: "Duck season", author: "Elmer le chasseur fou", replyNumber: 12, content: "Je pars à la chasse aux canards !"},
      {id: 2, title: "Critique de Space Jam A New Legacy", author: "Ce Youtubeur bien connu", replyNumber: 56, content: "Il ne vole pas bien haut."},
      {id: 3, title: "Pourquoi les montres suisses sont-elles aussi chères ?", author: "Un homme curieux", replyNumber: 2, content: "En plus, elles ne donnent même pas l'heure plus vite."}
    ],
    replies: [
      {id: 1, author: "François", content:"C'est génial", postId:"1"},
      {id: 2, author: "Michel", content:"C'est pas mal", postId:"1"},
      {id: 3, author: "Cerise", content:"C'est franchement pas terrible", postId:"2"}
    ],
    users: [
      {id: 1, name: "François", password:"AaZZ8520", email:"francoisvaillant@gmail.com"},
      {id: 2, name: "Michel", password:"AaZZ8520", email:"michelvaillant@gmail.com"},
      {id: 3, name: "Sarah", password:"AaZZ8520", email:"sarahvaillant@gmail.com"},
    ],
    loggedInUser: {
      name: "Yannick",
      email: "faussebonneemail@gmail.com",
      role: "Administrateur",
      id: 71,
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjo3MSwicm9sZSI6InVzZXIiLCJpYXQiOjE2Mjg3NzQ2NDksImV4cCI6MTYyODg2MTA0OX0.RuQXfrCC8gWHtwWT4K5tAwNV7030rNeuyxnVNMlRjeM'
    } 
  },
  mutations: {
    GET_SEVERAL_POSTS(state, posts) {
      state.messages = [];
      state.messages.push(posts)
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
  actions: {
    async getSeveralPosts(context) {
      await fetch('http://localhost:3000/api/posts/from/0/5')
      .then(data => data.json())
      .then(jsonMessageList => {
        context.commit('CREATE_POST', jsonMessageList)
        }
      )
      .catch(function (err) {
        console.error(err)
      })
    },
    async createPost(context, payload) {
      await fetch('http://localhost:3000/api/posts', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.state.loggedInUser.token
        },
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
      await fetch('http://localhost:3000/api/auth/login', {
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
        context.commit('LOGIN_USER', payload)
      })
      .catch(function(err) {
        console.error(err)
      })
    },

    async createReply(context, payload) {
      await fetch('http://localhost:3000/api/replies', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.state.loggedInUser.token
        },
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
