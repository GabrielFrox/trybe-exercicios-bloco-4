function bigger(numeros) {
  let maiorIndice = 0
  for (let key in numeros) {
    if (numeros[key] > numeros[maiorIndice]) {
      maiorIndice = key
    }
  }
  return maiorIndice
}

console.log(bigger([2, 3, 6, 7, 10, 1]))