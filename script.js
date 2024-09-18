console.log("bom dia");

// Switch case - É um tipo de condicional que avalia uma expressão, é útil para quando se tem muitas condições
// não da pra fazer condições de comparação no switch case

let lancheSaudavel = "Morango";

switch (lancheSaudavel){
    case "Banana":
        console.log("Oba, vamos fazer uma vitamina!");
        break;

    case "Manga":
        console.log("Vamos fazer um suco!");
        break;

    case "Cajá":
        console.log("Faça um suco de caja");
        break;
    default:
        console.log("Desculpe, não temos esse sabor!");
        break;
}