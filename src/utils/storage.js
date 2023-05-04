export default {
  removeItem(key) {
    return localStorage.removeItem(key)
  },

  setItem(key, item) {
    return localStorage.setItem(key, JSON.stringify(item))
  },
  getItem(key) {
    return JSON.parse(localStorage.getItem(key))
  },

  clearStorage() {
    return localStorage.clear()
  }
}
