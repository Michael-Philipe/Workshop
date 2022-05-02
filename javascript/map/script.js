// Array.map(callback, thisArg)
//callback(item, index, array)

//usando map

const array = [1, 2, 3, 4, 5];

array.map((item) => item * 2); //retorno: [2, 4, 6, 8, 10]

// Usando forEach

const array2 = [1, 2, 3, 4, 5];

array.forEach((item) => item * 2); // retorno: undefined

//usando o this com o map

const apple = {
  value: 2,
};

const orange = {
  value: 3,
};

function mapComThis(arr, thisArg) {
  return arr.map(function (item) {
    return item * this.value;
  }, thisArg);
}

const nums = [1, 2];
console.log('this -> apple', mapComThis(nums, apple));
console.log('this -> orange', mapComThis(nums, orange));

//-------------------

function mapSemThis(arr) {
  return arr.map(function (item) {
    return item * 2;
  });
}

const nums2 = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums2));
