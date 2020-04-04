import axios from "axios";

const baseUri = "https://my-json-server.typicode.com/romanhandke/ziuma/";
const migrationServices = "migrationServices";
const educationServices = "educationServices";
const about = "about";
const dws = "dws";
const sites = "sites";

export const actions = {
  loading({ commit }) {
    commit("SET_LOADING");
  },
  loadMigrationServices({ commit }) {
    axios
      .get(baseUri + migrationServices)
      .then(response => {
        let posts = response.data;
        commit("SET_MIGRATION_SERVICES", posts);
      })
      .catch(error => console.log(error));
  },
  loadEducationServices({ commit }) {
    axios
      .get(baseUri + educationServices)
      .then(response => {
        let posts = response.data;
        commit("SET_EDUCATION_SERVICES", posts);
      })
      .catch(error => console.log(error));
  },
  loadAboutData({ commit }) {
    axios
      .get(baseUri + about)
      .then(response => {
        let posts = response.data;
        commit("SET_ABOUT", posts);
      })
      .catch(error => console.log(error));
  },
  loadDwsData({ commit }) {
    axios
      .get(baseUri + dws)
      .then(response => {
        let posts = response.data;
        commit("SET_DWS", posts);
      })
      .catch(error => console.log(error));
  },
  loadSites({ commit }) {
    axios
      .get(baseUri + sites)
      .then(response => {
        let posts = response.data;
        commit("SET_SITES", posts);
      })
      .catch(error => console.log(error));
  }
};
