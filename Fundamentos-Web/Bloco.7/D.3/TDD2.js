const assert = require('assert');
// escreva a função addOne aqui
const addOne = (arr) => {
  newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    newArr[index] = arr[index] + 1;
  }
  return newArr;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

//Função 2 
const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (arr) => {
  let wordsLenght;
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    wordsLenght = arr[index].length;
    newArr[index] = wordsLenght;
  }
  return newArr;
}
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);

//Função 3
const assert = require('assert');
// escreva a função sumAllNumbers aqui
const sumAllNumbers = (arr) => {
  let sum = 0;
  for (let index = 0; index < arr.length; index += 1) {
    sum += arr[index];
  }
  return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);

//Função 4
const assert = require('assert');
// escreva a função findTheNeedle aqui

const findTheNeedle = (arr, word) => {
  let result = -1;
  for (let index in arr) {
    if (word === arr[index]) {
      result = Number(index);
    }
  }
  return result;
};

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);