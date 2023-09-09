var bebida = "café";
var valor = "R$" + " ";

switch(bebida){
    case "café":
        valor += 8.50
        console.log("Você escolheu" + " " + bebida + " " + "pelo valor de " + valor)
        break;
    case "chá":
        valor += 4.20
        console.log("Você escolheu" + " " + bebida + " " + "pelo valor de " + valor)
        break;
    case "leite":
        valor += 2.50
        console.log("Você escolheu" + " " + bebida + " " + "pelo valor de " + valor)
        break; 
    default:
        console.log("Por gentileza, escolha entre café, leite ou chá")
}
