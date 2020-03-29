import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    migrationServices: []
  },
  mutations: {
    SET_MIGRATION_SERVICES(state, services) {
      state.migrationServices = services;
    }
  },
  actions: {
    loadMigrationServices({ commit }) {
      axios
        .get(
          "https://my-json-server.typicode.com/romanhandke/json-placeholder/services"
        )
        .then(response => {
          let posts = response.data;
          commit("SET_MIGRATION_SERVICES", posts);
        })
        .catch(error => console.log(error));
    }
  },
  modules: {}
});
