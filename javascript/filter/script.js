//o filter vai te retornar uma nova lista com os item que passarem pelo filtro

//array.filter(callback, thisArg)

const frutas = ['maça fuji', 'maça verde', 'laranja', 'abacaxi'];

frutas.filter((fruta) => fruta.includes('maça'));

//retorno: ['maça fuji', 'maça verde']

function filtraPares(arr) {
  return arr.filter(callback);
}

function callback(item) {
  return item % 2 === 0;
}

const meuArr = [1, 23, 55, 67, 30, 2, 4, 5, 7, 60];

console.log(filtraPares(meuArr));
