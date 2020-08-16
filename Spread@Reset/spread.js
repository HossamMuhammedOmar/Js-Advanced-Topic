// SPREAD IN FUNCTIONS
/* 
    Expands an iterable
    (array, string, etc.)
    into a list of arguments
*/
function giveMeFour(a, b, c, d) {
  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
  console.log('d', d);
}

const colors = ['red', 'blue', 'yellow', 'green'];

const str = 'GOAT';

// SPREAD IN ARRAY

/*
    Create a new array using
    an existing array. Spreads
    the elements from one
    array into a new array 
*/

let cairo = [
  'naser city',
  'elharam',
  'shrouq city',
  '6 october',
  'elrehab city',
  'madinty',
];

const alexandria = [
  'borg elarab',
  'el3amrea',
  'lebea street',
  'whole sea',
  'red area',
];

const government = [...cairo, ...alexandria];

const cairoCopy = [...cairo];

// SPREAD IN OBJECT
/*
    Copies properties
    from one object
    into another
    object literal.
*/
const feline = {
  legs: 4,
  family: 'Feline',
};

const cat = {
  legs: 4,
  family: 'Lions',
  isPet: true,
};

const lion = {
  ...cat,
  isPet: false,
};

// SPREAD IN
