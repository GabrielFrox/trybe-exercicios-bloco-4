function biggerName(nomes) {
  maiorNome = ''
  contNome = 0
  for (let key in nomes) {
    if (nomes[key].length > contNome) {
      contNome = nomes[key].length
      maiorNome = nomes[key]
    }
  }
  return maiorNome
}

console.log(biggerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))
