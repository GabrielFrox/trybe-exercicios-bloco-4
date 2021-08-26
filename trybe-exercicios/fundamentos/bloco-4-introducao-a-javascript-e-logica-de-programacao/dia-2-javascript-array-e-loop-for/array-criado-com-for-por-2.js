let numbers = []
var div = 0
var res = []

for (var index = 0; index < 25; index += 1) {
  numbers.push(index + 1)
}

for (var n_index = 0; n_index < numbers.length; n_index += 1) {
  div = numbers[n_index] / 2
  res.push(div)
}

console.log(res)