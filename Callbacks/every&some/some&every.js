/*
    tests whether all elements in the array pass the provided function.
    It returns a Boolean value
*/

const words = ['dogl', 'dag', 'dig', 'dug', 'bag', 'deg'];

const threeL = words.every((word) => word.length === 3);

const allEndIsG = words.every((word) => {
  const last = word.length - 1;
  return word[last] === 'g';
});

const everyStartWithD = words.every((word) => word[0] === 'd');

/*
    Similar to every, but returns true if ANY of
    the array elements pass the test function
*/

const someEndIsG = words.some((word) => {
  const last = word.length - 1;
  return word[last] === 'g';
});

const someStartWithD = words.some((word) => word[0] === 'd');
