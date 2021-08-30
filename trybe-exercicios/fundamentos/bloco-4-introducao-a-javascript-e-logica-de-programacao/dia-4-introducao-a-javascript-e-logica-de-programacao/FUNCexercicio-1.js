function palinCheck (palavra) {
  palavra = palavra.toLowerCase()
  p_split = palavra.split('')
  rev = p_split.reverse()
  glue = rev.join('')
  if (palavra == glue) {
    return true + ', a palavra é um palíndromo!'
  }
  else {
    return false + ', a palavra não é um palíndromo'
  }
}
console.log(palinCheck('AraRa'))