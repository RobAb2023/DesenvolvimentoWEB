// operadores Booleanos: comparações
// atribuição (=)
// comparação igualdade (==)
// comparação igualdade conteudo e tipo (===)
//!Recomenda usar sempre (===)

const num1 = 10;
const num2 = 12; //string

console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 == "10");
console.log(num1 === "10");

console.log(num1 !== num2);
console.log(num1 != num2);

console.log(num1 < num2); //menor
console.log(num1 > num2); // maior
console.log(num1 <= num2); // menor e igual
console.log(num1 >= num2); //maior e igual

//conjunções lógicas
//juntar duas comparações

const idade1 = 20;
const idade2 = 39;
const idade3 = 10;

console.log(idade1 >= 18);
console.log(idade2 >= 18);

console.log(idade1 >= 18 && idade2 >= 18);
console.log(idade1 >= 18 || idade2 >= 18);

console.log(idade1 >= 18 && idade2 >= 18 && idade3 >= 18); // precisam todos verdadeiros
console.log(idade1 >= 18 || idade2 >= 18 || idade3 >= 18); // um ou outro : true

//inversão (negação)

console.log(!true); //false

console.log(!(idade3 >= 18)); //false
//retorna true se a pessoa for menor de idade
console.log(idade2 >= 18); //true
