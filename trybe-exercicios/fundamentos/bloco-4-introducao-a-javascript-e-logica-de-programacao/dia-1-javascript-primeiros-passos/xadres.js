const piece = "rEi"
const piece_corr = piece.toLocaleLowerCase()

switch (piece_corr) {
  case "rei":
    console.log("O rei pode se movimentar 1 casa em qualquer direção, conta com um movimento especial chamado roque. O jogo acaba quando o rei é derrubado")
    break;

  case "dama":
    console.log("A dama/rainha pode se mover livremente em quantidade indefinida de casas em qualquer direção, sem curvas (diagonal ou reta)")
    break;
  
  case "torre":
    console.log("A torre pode se mover livremente em quantidade indefinida de casas em retas")
    break;

  case "bispo":
    console.log("O bispo pode se mover livremente em quantidade indefinida de casas na diagonal")
    break;
  
  case "cavalo":
    console.log("O cavalo pode se movimentar em L")
    break;

  case "peao":
    console.log("O peão só pode se movimentar 1 casa, derruba outras peças na diagonal")
    break;

  default:
    console.log("Inválido")
    break;
}