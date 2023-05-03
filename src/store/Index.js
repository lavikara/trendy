import { createStore } from 'vuex'

const store = createStore({
  state: {
    templateBgColor: ''
  },
  getters: {},
  mutations: {
    UPDATE_TEMPLATE_BG: function (state, payload) {
      state.templateBgColor = payload
    }
  },
  actions: {
    changeTemplateBg({ commit }, payload) {
      commit('UPDATE_TEMPLATE_BG', payload)
    }
  },
  modules: {}
})

export default store
