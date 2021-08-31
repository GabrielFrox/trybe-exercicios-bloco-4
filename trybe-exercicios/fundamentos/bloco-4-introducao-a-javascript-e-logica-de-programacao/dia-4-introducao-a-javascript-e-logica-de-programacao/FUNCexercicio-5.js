function moreRepeatableNumber(numeros) {
  let cont = 0
  let contBigg = 0
  let moreRe = numeros[0]
  for (let key in numeros) {
    cont = 0
    for (let key2 in numeros) {
      if (numeros[key] == numeros[key2]) {
        cont += 1
      }
      if (cont > contBigg) {
        contBigg = cont
        moreRe = numeros[key]
      }
    }
  }
  return moreRe + '|' + contBigg
}

console.log(moreRepeatableNumber([2, 3, 8, 5, 8, 2, 3, 8, 8, 8]))