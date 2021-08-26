let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var cont_odd = 0
var check = 0

for (var index = 0; index < numbers.length; index += 1) {
  check = numbers[index] % 2
  if (check != 0) {
    cont_odd += 1
  }
}

if (cont_odd > 0) {
  console.log('No array temos um total de ' + cont_odd + ' números ímpares')
}
else {
  console.log('Nenhum valor ímpar encontrado')
}