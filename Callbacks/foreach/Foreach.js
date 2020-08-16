// FOREACH \\
/* 
    Accepts a callback function.
    Calls the function
    once per element
    in the array.
*/

const numbers = [5, 10, 15, 20, 25, 30];

numbers.forEach(function (num) {
  console.log(num * 2);
});

const names = ["A", "B", "C", "D", "e"];

function printNames(n) {
  console.log(n.toLowerCase());
}

names.forEach(printNames);

const cities = [
  {
    name: "Cairo",
    zipCode: "123",
    country: "Egypt",
  },
  {
    name: "Aswan",
    zipCode: "321",
    country: "Egypt",
  },
  {
    name: "Gada",
    zipCode: "253",
    country: "Saudi Arabian",
  },
];

cities.forEach(function (city) {
  console.log(city.name.toUpperCase());
});

const courses = ["Javascript", "HTML", "CSS", "Bootstrab", "DataStrucure"];
// forEach With Index
courses.forEach(function (course, idx) {
  console.log(idx, course);
});
