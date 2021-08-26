let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var soma = 0
var media = 0
for (index = 0; index < numbers.length; index += 1) {
  soma = soma + numbers[index]
}

media = soma / numbers.length
console.log(media)