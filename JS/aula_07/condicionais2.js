const prompt = require("readline-sync");

//Muito util qdo sua variavel possui valores especificos
//! sempre colocar o break no final de cada case
const permissoes = "professor"; // 'aluno' || 'professor' || 'admin'

switch (permissoes) {
  case "aluno":
    console.log("Você pode somente visualizar as aulas!");
    break;
  case "professor":
    console.log("você pode alterar as aulas e adicionar exercicios");
    break;
  case "admin":
    console.log("Você pode fazer o que quiser no sistema!");
    break;
  default:
    console.log("Não sei quem você é no sistema");
    break;
}
