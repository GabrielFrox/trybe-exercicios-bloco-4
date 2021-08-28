let n = 9
var contInv = n
var contDiv = 0

for (let nCheck = 0; nCheck < n; nCheck += 1) {
  if (n % contInv == 0) {
    contDiv += 1
  }
  contInv -= 1
}

if (contDiv == 2) {
  console.log('O número ' + n + ' é primo!')
}
else {
  console.log('O número ' + n + ' não é primo!')
}