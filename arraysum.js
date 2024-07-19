// Array of numbers
const numbers = [23, 45, 12, 56, 78, 89, 5, 90, 67, 34];

// Function to calculate the sum of the numbers
function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// Function to calculate the average of the numbers
function calculateAverage(numbers) {
    let sum = calculateSum(numbers);
    return sum / numbers.length;
}

// Function to find the maximum value in the array
function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

// Function to find the minimum value in the array
function findMin(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

// Function to sort the numbers in ascending order
function sortNumbers(numbers) {
    return numbers.slice().sort((a, b) => a - b);
}

// Calculate the sum, average, maximum, and minimum
const sum = calculateSum(numbers);
const average = calculateAverage(numbers);
const max = findMax(numbers);
const min = findMin(numbers);
const sortedNumbers = sortNumbers(numbers);

// Display the results
console.log('Numbers: ' + numbers.join(', '));
console.log('Sum: ' + sum);
console.log('Average: ' + average.toFixed(2));
console.log('Maximum: ' + max);
console.log('Minimum: ' + min);
console.log('Sorted Numbers: ' + sortedNumbers.join(', '));
