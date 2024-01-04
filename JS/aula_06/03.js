//primeiroprecisa importar a biblioteca
const prompt = require("readline-sync");
const idade = prompt.question("qual idade?"); //leem somente como texto

//coerção Explicita: converte manual
const idadeNumber = Number(idade);

console.log(idadeNumber, typeof idadeNumber);

//para abrir arquivos do browser, precisa instalar a biblioteca readline-sync ( npm install readline-sync)
// node modules - arquivos da biblioteca instalou
//package.json : mostra todas as bibliotecas instaladas
//package-lock : controle e atualização das (dependencies)

//como converter
console.log(Number("X")); //NaN: not a number

//converter manualmente

console.log(String(10), typeof String(10));

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean(2));

//coerção Implícita

//qdo some num com texto, usa conversao automatica
console.log(1 + "1");

//qdo uso string + number : ele converte o num em texto e depois concatena (soma) e em outra operação ele roda
console.log(10 - "5");
console.log(10 / "5");

//exemplos

let n = 1 + "1";
n = n - 1; //subtração
console.log(n);

console.log(2 + 3 + 4 + "5"); // 5 + 4 + '5' = '95'

console.log("5" + 2 + 3 + 4); //'52' + 3 + 4 = '523' = '5234'

console.log("10" - "4" - "3" - 2 + "5"); // 6 - '3' - 2 + '5' = 3 - 2 + '5' = '15'
