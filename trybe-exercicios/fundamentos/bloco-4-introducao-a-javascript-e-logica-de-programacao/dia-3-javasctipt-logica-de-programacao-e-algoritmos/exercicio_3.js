let ast = '*'
let blank = " "
let n = 10
var fator_red = 0
var fator_blank = n

for (let index = 0; index < n; index += 1) {
  for (let i = 0; i < 1; i += 1) {
    fator_red += 1
    fator_blank -= 1
  }
  console.log(blank.repeat(fator_blank) + ast.repeat(fator_red))
}