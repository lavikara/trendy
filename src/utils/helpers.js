export const searchArray = (idKey, searchArray) => {
  for (let i = 0; i < searchArray.length; i++) {
    if (searchArray[i].id === idKey) {
      return searchArray[i]
    }
  }
}
