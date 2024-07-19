// Define an array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even Numbers:', evenNumbers);

// Map to square each number
let squaredNumbers = numbers.map(num => num * num);
console.log('Squared Numbers:', squaredNumbers);

// Reduce to calculate sum
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum of Numbers:', sum);
