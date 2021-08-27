let ast = '*'
let n = 5
var fator_red = 0

for (let index = 0; index < n; index += 1) {
  for (let i = 0; i < 1; i += 1) {
    fator_red += 1
  }
  console.log(ast.repeat(fator_red))
}