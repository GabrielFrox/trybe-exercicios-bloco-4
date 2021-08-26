var nota = 45

if (nota >= 90 && nota <= 100) {
  nota = "A"
  console.log("Sua nota foi", nota);
}

else if (nota >=80 && nota < 90) {
  nota = "B"
  console.log("Sua nota foi", nota)
}

else if (nota >= 70 && nota < 80) {
  nota = "C"
  console.log("Sua nota foi", nota)
}

else if (nota >= 60 && nota < 70) {
  nota = "D"
  console.log("Sua nota foi", nota)
}

else if (nota >= 50 && nota < 60) {
  nota = "E"
  console.log("Sua nota foi", nota)
}

else if (nota >= 0 && nota < 50) {
  nota = "F"
  console.log("Sua nota foi", nota)
}

else {
  console.log("ERRO!")
}