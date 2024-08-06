// Example data
let inputMoney = 1000; // Initial amount
let rate = [10, 5, 15]; // Example rates in percentage for different scenarios
let deductionMoney = [50, 30, 70]; // Example deduction amounts for different scenarios

// Calculating result for the first scenario (i = 0)
let i = 0;
let result = inputMoney / 100 * rate[i] - deductionMoney[i];
console.log("Result:", result); // Output: Result: 50 (for the given example values)
