export const mutations = {
  SET_LOADING(state) {
    state.loading = !state.loading;
  },
  SET_MIGRATION_SERVICES(state, services) {
    state.migrationServices = services;
  },
  SET_EDUCATION_SERVICES(state, services) {
    state.educationServices = services;
  },
  SET_ABOUT(state, aboutData) {
    state.aboutData = aboutData;
  },
  SET_DWS(state, dwsData) {
    state.dwsData = dwsData;
  },
  SET_SITES(state, sites) {
    state.sites = sites;
  }
};
