import { createStore } from 'vuex'

const store = createStore({
  state: {
    templateBgColor: '',
    addText: null,
    addImage: null,
    addButton: null
  },
  getters: {},
  mutations: {
    UPDATE_TEMPLATE_BG: (state, payload) => {
      state.templateBgColor = payload
    },
    UPDATE_ADD_TEXT: (state, payload) => {
      state.addText = payload
    },
    UPDATE_ADD_IMAGE: (state, payload) => {
      state.addImage = payload
    },
    UPDATE_ADD_BUTTON: (state, payload) => {
      state.addButton = payload
    }
  },
  actions: {
    changeTemplateBg({ commit }, payload) {
      commit('UPDATE_TEMPLATE_BG', payload)
    },
    addText({ commit }, payload) {
      commit('UPDATE_ADD_TEXT', payload)
    },
    addImage({ commit }, payload) {
      commit('UPDATE_ADD_IMAGE', payload)
    },
    addButton({ commit }, payload) {
      commit('UPDATE_ADD_BUTTON', payload)
    }
  },
  modules: {}
})

export default store
