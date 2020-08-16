/*
    Executes a reducer function
    on each element of the array,
    resulting in a single value.
*/
const numbers = [5, 10, 15, 20, 25]; // 75
// Total of Numbers Array

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// for (let num of numbers) {
//   sum += num;
// }

// for (let num in numbers) sum += numbers[num];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

// console.log(sum);

//  Finding MAx Value Of Array
const grades = [89, 96, 58, 77, 62, 93, 81, 99, 73];

const maxGrade = grades.reduce((max, currentValue) => {
  if (currentValue > max) return currentValue;
  return max;
});

const maxDegree = grades.reduce((max, currentVal) => {
  return Math.max(max, currentVal);
});

const minGrade = grades.reduce((min, currentVal) => {
  if (min > currentVal) return currentVal;
  return min;
});

// max          currentVal
// 89           96           return 89
// 89           58           return 58
// 58           77           return 58
// 58           62           return 58
// 58           93           return 58
// 58           81           return 58
// 58           99           return 58
// 58           73           return 58
// total => 58

const minDegree = grades.reduce((min, currentVal) => {
  return Math.min(min, currentVal);
});
