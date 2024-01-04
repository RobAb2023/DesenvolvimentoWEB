//Utilize sempre o Camel case no Javascript!

// JS possui tipagem dinâmica: infere os tipos de dados
//JS possui uma tipagem fraca : ele não retorna o erro
//crt+ship+p -> reload window
// seleciona o que quer comentar + ctrl+/

var nomeAluno = "Roberta Abreu"; // String (texto): utilize sempre aspas
var idade = 27; //number
var alturaDoAluno = 1.89; //number
var estudando = true; // Boolean true or false: sempre utilize o que foi definido
console.log(nomeAluno + " " + idade + " ", alturaDoAluno);
console.log(estudando);
console.log(typeof nomeAluno); //typeof : mostra o tipo da var

var semConteudo; //declarando uma variável sem atribuir valores
console.log(semConteudo);

var curso = "Front-End em React",
  topico = " JS Básico 1";
console.log(curso, topico);
//! NÃO utilize var nos seus códigos porque ele é uma variável global !!!
//Opções de variaveis : let e const (melhores opções)
// let : pode alterar a variavel
//const: não pode alterar a variavel

let notaAluno = 10;
const mediaAluno = 8;

notaAluno = 9;
mediaAluno = 5; // ! não é permitido alterar uma const
console.log(notaAluno);
console.log(mediaAluno);
