export const searchArray = (idKey, myArray) => {
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i].id === idKey) {
      return myArray[i]
    }
  }
}
