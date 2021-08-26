const a = 500
const b = 100
const c = 15

if (a > b && a > c) {
  console.log("A é o maior número");
}
else if (b > a && b > c) {
  console.log("B é o maior número");
}
else if (a == b && a == c) {
  console.log("A, B e C são iguais")
}
else {
  console.log("C é o maior número")
}