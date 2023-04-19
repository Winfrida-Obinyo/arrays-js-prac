// Write a function that takes an array of 
// numbers and returns the sum of all the even numbers in the array.
function sumEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5, 6];
console.log(sumEvenNumbers(numbers)); 

// Write a function that takes an array of numbers and returns the
//  average of all the numbers in the array.
function getAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    const average = sum / arr.length;
    return average;
  }
  const numbers1 = [1, 2, 3, 4, 5];
console.log(getAverage(numbers));

// Write a function that takes an array of 
// numbers and returns the highest number in the array.

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  const numbers3 = [1, 4, 2, 7, 3, 9];
console.log(findMax(numbers));

// Write a function that takes an array of
//  numbers and returns the lowest number in the array.
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  const numbers4 = [1, 4, 2, 7, 3, 9];
console.log(findMin(numbers));
// Write a function that takes an array of strings and 
// returns a new array that contains only the strings that have a length of three characters.

function filterStrings(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length === 3) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  const strings = ["apple", "banana", "kiwi", "orange", "cat", "dog"];
console.log(filterStrings(strings)); 

