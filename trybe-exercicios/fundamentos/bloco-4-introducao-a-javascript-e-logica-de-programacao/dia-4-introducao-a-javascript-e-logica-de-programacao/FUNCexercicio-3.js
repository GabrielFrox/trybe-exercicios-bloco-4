function minor(numeros) {
  let menorIndice = numeros[0]
  for (let key in numeros) {
    if (numeros[key] < numeros[menorIndice]) {
      menorIndice = key
    }
  }
  return menorIndice
}

console.log(minor([2, 4, 6, 7, 10, 0, -3]))
