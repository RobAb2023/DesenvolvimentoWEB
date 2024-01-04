// *operador ternário
//forma mais curta de fazer um 'if' e um 'else' em uma linha
//qdo tem somente duas condições, isso ou aquilo
//mais util para retornar valor

const idade = 10;
//uma forma
//idade >= 18 ? console.log("maior de idade") : console.log("menor de idade");

//outra forma
const mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade";
//console.log(mensagem);

//pode concatenar os dois mas
//!não é uma boa pratica
//const mensagem = idade >= 18 ? "Maior de idade": idade >= 16 ? "Pode votar":"Não pode votar";
console.log(mensagem);

// * truthy or falsy
//Falsy: 0, undefined, null. '', NaN
//Truthy: todos os demais valores
//o que é considerado verdadeiro e falso dentro das condicionais
// ' ' Uma string com qualquer conteúdo, mesmo que seja um espaço,
// é considerada um truthy. Apenas a string vazia é considerada um falsy.

if (50 > 100) {
  console.log("Falta um tanto");
} else {
  if ("1" == "-1") {
    console.log("Quase lá");
  }

  if (!null) {
    console.log("Sucesso");
  }
}
//50 não é maior que 100
// "1"é diferente de "-1"
//Correto. !null é considerado um valor truthy
// (traduzido como verdadeiro) no JavaScript.
