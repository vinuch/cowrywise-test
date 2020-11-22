import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    homeImages: null,
    loading: true,
    searching: false,
    showingResult: false,
    selectedImage: {},
  },
  mutations: {
    SET_HOME_IMAGES(state, payload) {
      state.homeImages = payload;
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    SET_SEARCHING(state, payload) {
      state.searching = payload;
    },
    SET_SELECTED_IMAGE(state, payload) {
      state.selectedImage = payload;
    },
    SET_SHOWING_RESULT(state, payload) {
      state.showingResult = payload;
    },

  },
  actions: {
    getLatestAfricanPhotos({ commit }) {
      commit('SET_SHOWING_RESULT', false);
      commit('SET_LOADING', true);
      axios.get('https://api.unsplash.com/search/photos/?page=1&per_page=9&query=african&client_id=vCFLmJ0o24YUgY759zqXUQX0IR3e1JnSCODoWyjXzEA')
        .then((response) => {
          console.log(response.data.results);
          commit('SET_HOME_IMAGES', response.data.results);
          commit('SET_LOADING', false);
        });
    },
    searchPhotos({ commit }, searchTerm) {
      commit('SET_LOADING', true);
      commit('SET_SEARCHING', true);
      axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=9&query=${searchTerm}&client_id=vCFLmJ0o24YUgY759zqXUQX0IR3e1JnSCODoWyjXzEA`)
        .then((response) => {
          console.log(response);

          commit('SET_HOME_IMAGES', response.data.results);
          commit('SET_LOADING', false);
          commit('SET_SEARCHING', false);
          commit('SET_SHOWING_RESULT', true);
        });
      //
    },
  },
  getters: {
    homeImages(state) {
      return state.homeImages;
    },
    loading(state) {
      return state.loading;
    },
    searching(state) {
      return state.searching;
    },
    selectedImage(state) {
      return state.selectedImage;
    },
    showingResult(state) {
      return state.showingResult;
    },
  },
  modules: {
  },
});
