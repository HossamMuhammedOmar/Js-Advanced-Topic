const prices = [400.5, 3000, 99.99, 53.99, 12.0, 9500];

const badSort = prices.slice().sort();

const sort = prices.slice().sort((a, b) => a - b);

const desSort = prices.slice().sort((a, b) => b - a);
