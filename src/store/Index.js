import { createStore } from 'vuex'

const store = createStore({
  state: {
    templateBgColor: '',
    activeElement: '',
    elementColor: '',
    addText: null,
    addImage: null,
    addButton: null
  },
  getters: {},
  mutations: {
    UPDATE_TEMPLATE_BG: (state, payload) => {
      state.templateBgColor = payload
    },
    UPDATE_ELEMENT_COLOR: (state, payload) => {
      state.elementColor = payload
    },
    UPDATE_ACTIVE_ELEMENT: (state, payload) => {
      state.activeElement = payload
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
    changeElementColor({ commit }, payload) {
      commit('UPDATE_ELEMENT_COLOR', payload)
    },
    setActiveElement({ commit }, payload) {
      commit('UPDATE_ACTIVE_ELEMENT', payload)
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
