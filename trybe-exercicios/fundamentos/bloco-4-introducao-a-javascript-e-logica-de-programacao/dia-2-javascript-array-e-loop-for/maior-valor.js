let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var maior_h = 0
var maior = 0

for (var index = 0; index < numbers.length; index += 1) {
  maior_h = numbers[index]
  if (maior_h > maior) {
    maior = maior_h
  }
}
console.log('O maior valor foi ' + maior)