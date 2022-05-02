function verificaPalindromo(string) {
  if (!string) throw 'String inválida';

  return string === string.split('').reverse.join('');
}

function tryCatchExemplo(string) {
  try {
    //tenta executar a instrução
    verificaPalindromo(string);
  } catch (e) {
    //se ouver erro podemos acessar ele pelo catch
    console.log(e);
    // throw e;
  } finally {
    //o finally é uma instrução que sera chamada independente se tiver erro ou não
    console.log('a string enviada foi: ' + string);
  }
}

tryCatchExemplo('');

//OBJETO ERROR

// new Error(message, fileName, lineNumber);

//todos os parametros são opcionais

const MeuErro = new Error('mensagem inválida');

throw MeuErro;
