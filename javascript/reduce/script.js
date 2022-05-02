//Executa uma função em todos os elementos do array, retornando um valor único

//array.reduce(callback, initialValue)

// const callbackFn = function(accumulator, currentValue, index, array){
//   do something
// }

//somar todos os numeros de uma array

function somaNumeros(arr) {
  return arr.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(somaNumeros(arr));

//crie uma função que recebe uma lista de preços e um numero representando o saldo disponivel. calcule qual sera o saldo final apos subtrair todos os preços da lista enviada

const list = [
  { name: 'sabao em po', preco: 30 },
  { name: 'cereal', preco: 12 },
  { name: 'toalha', preco: 30 },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, list) {
  return list.reduce((acc, current) => {
    return acc - current.preco;
  }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, list));
