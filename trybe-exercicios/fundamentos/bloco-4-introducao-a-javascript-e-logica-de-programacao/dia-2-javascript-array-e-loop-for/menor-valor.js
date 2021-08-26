let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var menor_h = 0
var menor = numbers[0]

for (var index = 0; index < numbers.length; index += 1) {
  menor_h = numbers[index]
  if (menor_h < menor)
  menor = menor_h
}

console.log(menor)