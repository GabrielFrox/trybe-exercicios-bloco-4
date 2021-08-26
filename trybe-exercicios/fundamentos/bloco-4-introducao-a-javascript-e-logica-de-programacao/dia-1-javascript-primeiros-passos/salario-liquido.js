var salario = 2600.22
var inss = 0
var ir = 0
var parc = 0

if (salario <= 1556.94) {
  inss = salario * 0.08
  salario -= inss
}

else if (salario >= 1556.95 && salario <= 2594.92) {
  inss = salario * 0.09
  salario -= inss
  if (salario >= 1903.99) {
    ir = salario / 100 * 7.5
    parc = ir - 142.80
    salario -= parc
  }
}

else if (salario >= 2594.93 && salario <= 5189.82) {
  inss = salario * 0.11
  salario -= inss
  if (salario >= 1903.99 && salario <= 2826.65) {
    ir = salario / 100 * 7.5
    parc = ir - 142.80
    salario -= parc
  }
  else if (salario >= 2826.66  && 3751.05){
    ir = salario * 0.15
    parc = ir - 354.80
    salario -= parc  
  }
  else if (salario >= 3751.06 && salario <= 4664.68) {
    ir = salario / 100 * 22.5
    parc = ir - 636.13
    salario -= parc
  }
}

else if (salario > 5189.82) {
  inss = salario - 570.88
  salario -= inss
  if (salario >= 3751.06 && salario <= 4664.68) {
    ir = salario / 100 * 22.5
    parc = ir - 636.13
    salario -= parc
  }
  else if (salario >= 4664.68)
  ir = salario / 100 * 27.5
  parc = ir - 869.36
  salario -= parc
}

var salario_two_decimals = parseFloat(salario).toFixed(2) 
console.log("O salário liquído será de R$", salario_two_decimals)