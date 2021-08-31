function sumUntil(num) {
  cont2 = 0
  soma = 0
  for (cont = 1; cont <= num; cont += 1) {
    soma += cont
  }
  return soma
}

console.log(sumUntil(5))
