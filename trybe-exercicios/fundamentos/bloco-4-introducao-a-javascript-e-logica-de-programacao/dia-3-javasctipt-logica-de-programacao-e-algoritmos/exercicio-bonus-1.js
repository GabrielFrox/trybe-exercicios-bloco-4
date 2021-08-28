var ast = "*"
var cont_ast = 1
var n = 26
var nSec = n
var quantOdd = 0
var cont_blank = n
var blank = " "

// Bloco de verificação de quantidade de números ímpares (Identifica o número de linhas para a pirâmide)
for (let i = 0; i < n; i += 1) {  
  if (nSec % 2 != 0) {
    quantOdd += 1
  }
  nSec -= 1
} 
// ------------------------------------------------------

// Bloco onde os números ímpares são definidos e impressos
for (let index = 0; index < quantOdd; index += 1) {
  if (cont_ast == 1) {
    cont_blank = Math.trunc(n / 2)
    console.log(blank.repeat(cont_blank) + ast)
    cont_ast += 1
  }
  if (cont_ast != 1) {
    if (cont_ast % 2 == 0) {
      cont_ast += 1
      cont_blank -= 1
    }
    else if (cont_ast != 0) {
      cont_ast += 2
      cont_blank -= 1
    }
  }
  if (index < quantOdd - 2) {
    console.log(blank.repeat(cont_blank) + "*" + blank.repeat(cont_ast - 2) + "*")
  }
  else if (index < quantOdd - 1) {
    console.log(blank.repeat(cont_blank) + "*" + ast.repeat(cont_ast - 1))
  }
}

// GAMBIARRA WINS!