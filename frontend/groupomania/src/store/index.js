import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [
      {id: 1, title: "Duck season", author: "Elmer le chasseur fou", replyNumber: 12, text: "Je pars à la chasse aux canards !"},
      {id: 2, title: "Critique de Space Jam A New Legacy", author: "Ce Youtubeur bien connu", replyNumber: 56, text: "Il ne vole pas bien haut."},
      {id: 3, title: "Pourquoi les montres suisses sont-elles aussi chères ?", author: "Un homme curieux", replyNumber: 2, text: "En plus, elles ne donnent même pas l'heure plus vite."}
    ],
    replies: [
      {id: 1, author: "François", text:"C'est génial", postId:"1"},
      {id: 2, author: "Michel", text:"C'est pas mal", postId:"1"},
      {id: 3, author: "Cerise", text:"C'est franchement pas terrible", postId:"2"}
    ],
    users: {
      name: "Yannick"
    },
    loggedInUser: {
      name: "Yannick",
      email: "faussebonneemail@gmail.com",
      role: "Administrateur"
    }
  },
  mutations: {
     CREATE_POST(state, post) {
      state.messages.push(post);
      console.log("Réussi")
    }
  },
  actions: {
    createPost(context, payload) {
      context.commit('CREATE_POST', payload)
    }
  }
})
