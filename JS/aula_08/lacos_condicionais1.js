// Laços condicionais > Estruturas de Repetição Não Controlada

//While >  enquanto for verdadeira continue executando
//!Cuidado com o Loop Infinito!

const prompt = require("readline-sync");

// *Exemplo1
// let saldo = Number(prompt.question("Qual é o seu saldo? "));

// while (saldo < 0) {
//   saldo = Number(
//     prompt.question("Saldo Inválido! Por favor informe novamente: ")
//   );
// }
// console.log(saldo);

// *Exemplos2
// let notaAluno = Number(prompt.question("Informe a nota do aluno: "));

// let somaNotas = 0; //Acumulador (0 > 10 = 10 > 8 = 18)

// let qtdNotasValidas = 0; //Acumulador de notas válidas

// while (notaAluno >= 0) {
//   somaNotas = somaNotas + notaAluno; //Incrementando o acumulador (somaNotas)
//   // somaNotas = somaNotas + notaAluno <=> somaNotas += notaAluno;
//   qtdNotasValidas = qtdNotasValidas + 1;
//   // qtdNotasValidas = qtdNotasValidas + 1 <=>  qtdNotasValidas += 1 <=> qtdNotasValidas ++ (pós-incremento)

//   notaAluno = Number(prompt.question("Informe a próxima nota: "));
// }

// console.log(somaNotas);
// console.log(qtdNotasValidas);
// console.log("Media das notas dos alunos", somaNotas / qtdNotasValidas);

// *Exemplo3

// //Math.random() => entre 0 e 1
// const numAleatorio = parseInt(Math.random() * 10); //pega só a parte inteira
// // arredonda => Math.round

// let qtdTentativas = 0;

// let numUsuario = Number(prompt.question("Informe um número entre 0 e 10: "));

// console.log("o Número aleatório é: ", numAleatorio);

// while (numAleatorio !== numUsuario) {
//   console.log("Você errou! Tente novamente: ");
//   numUsuario = Number(prompt.question("Informe um novo número entre 0 e 10: "));
//   qtdTentativas += 1;
// }
// console.log(numAleatorio);
// console.log(numUsuario);
// console.log("Você tentou ", qtdTentativas, " vezes");
// console.log("Parabéns! Você acertou! O número era ", numAleatorio);

//*Loop com contador
// let contador = 0;

// while (contador < 5) {
//   console.log(contador);
//   contador++;

//   if (contador == 2) {
//     // break;
//     continue;
//   }
//   console.log("Depois do if....");
// }

// *DO-while
//faz o que esta dentro do laço e depois sai do laço
// executa pelo menos uma vez e a estrutura é diferente do While

// let saldo;
//saldo = undefined
// do {
//   saldo = Number(prompt.question("Informe um saldo válido "));
// } while (saldo < 0);

// console.log(saldo);

while (true) {
  console.log("Olá, mundo");
}
