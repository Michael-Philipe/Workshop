//promisse
// inicialmente se valor é desconhecido. ele pode então ser resolvido ou rejeitado
//pode ter 3 estados 1) pending 2) fullfilled 3) rejected

const myPromise = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    resolve(console.log('resolvoda!'));
  }, 2000);
});

//fetch

fetch(url, options)
  .then((response) => response.json())
  .then((json) => console.log(json));
//retorna uma promise
