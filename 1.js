//1. Considere o seguinte array:
//const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00];
//a. Imprima no console o índice do primeiro salário maior que 7.500 utilizando o findIndex 
//b. Crie uma nova lista filtrada com os salários que são maior que 8.000 utilizando o filter

const salarios = [];
let salario = null;

do {
    salario = (Math.random() * 20000) + 1320;
    salarios.push(salario.toFixed(2)-0)
} while (salario <= 15000 || salarios.length < 3)

const index = salarios.findIndex(salario => salario > 20000);
const bemPagos = salarios.filter(valor => valor > 8000)

console.log(...salarios)
console.log(`${index}`)
console.log(salarios[index])
console.log(...bemPagos);