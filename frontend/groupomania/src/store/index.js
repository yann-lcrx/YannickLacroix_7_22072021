import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [
      {title: "Duck season", author: "Elmer le chasseur fou", replyNumber: 12, text: "Je pars à la chasse aux canards !"},
      {title: "Critique de Space Jam A New Legacy", author: "Ce Youtubeur bien connu", replyNumber: 56, text: "Il ne vole pas bien haut."},
      {title: "Pourquoi les montres suisses sont-elles aussi chères ?", author: "Un homme curieux", replyNumber: 2, text: "En plus, elles ne donnent même pas l'heure plus vite."}
  ]
  },
  mutations: {
     CREATE_POST(state, post) {
      state.messages.push(post);
      console.log("Réussi")
    }
  },
  actions: {
    /*createPost(context) {
      const title = document.getElementById('post-message__title').value;
      const text = document.getElementById('post-message__text').value;
      context.commit('CREATE_POST', title, text)
    }*/
    createPost(context, payload) {
      console.log(payload);
      context.commit('CREATE_POST', payload)
    }
  }
})
