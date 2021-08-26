let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mult = []

for (let index = 0; index < numbers.length; index += 1) {
  var first = numbers[index]
  var second = numbers[index + 1]
  if (index == 9) {
    second = 2
  }
  var calculo = first * second
  mult.push(calculo)
}

console.log(mult)