//Estrutura de Controle de Fluxo
//conseguimos mudar a ordem de execução
const prompt = require("readline-sync");

const idade = Number(prompt.question("qual eh a sua idade?"));

const maiorIdade = idade >= 18;

//  Condicional (If / else)

if (maiorIdade) {
  console.log("Você eh maior de Idade!");
} else {
  console.log("Você eh menor de idade!");
}

const mediaAluno1 = 10;
const mediaAluno2 = 6;

if (mediaAluno1 >= 7) {
  console.log("aprovado");
} else {
  console.log("reprovado");
}

if (mediaAluno2 >= 7) {
  console.log("aprovado");
} else {
  console.log("reprovado");
}

//1. Preciso ser maior de idade
//2. Preciso ter uma CNH (PPD)

const idadeDaPessoa = 18;
const temCNH = true;

if (idadeDaPessoa >= 18 && temCNH) {
  console.log("Você pode dirigr !");
} else {
  console.log("Você NÃO pode dirigir!");
}
