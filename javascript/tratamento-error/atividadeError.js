/*Atividade: validação de erros por tipo
O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
Se o array não for do tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance um erro do tipo TypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof*/

const validaArray = (arr, num) => {
  try {
    if (!arr && !num) throw new ReferenceError('Envie os parametros');

    if (typeof arr !== 'object')
      throw new TypeError('array must be of type object');

    if (typeof num !== 'number')
      throw new TypeError('num must be of type Number');

    if (arr.length !== num)
      throw new RangeError('The length of array must be equal to num');

    return arr;
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log('Este erro é um reference error');
      //console.log(e.name)
      //console.log(e.stack)
      // console.log(e.message);
      throw e;
    } else if (e instanceof TypeError) {
      console.log('Este erro é um TypeError error');
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log('Este erro é um RangeERror error');
      console.log(e.message);
    } else {
      console.log('typo de erro não esperado: ' + e);
      console.log(e.message);
    }
  }
};

// console.log(validaArray([], 5));
