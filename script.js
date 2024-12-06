// My JavaScript Arrays and Strings Assignment

// Array Tasks
console.log("Array Manipulation Tasks");
console.log("------------------------");

// Task 1: Working with fruits array
let fruits = ['apple', 'banana', 'orange'];
console.log("My fruits array:", fruits);

// Adding mango to my array
fruits.push('mango');
console.log("Added mango:", fruits);

// Removing the last fruit
let removed = fruits.pop();
console.log("Removed " + removed);
console.log("Final fruits array:", fruits);

// Task 2: Sorting numbers
let myNumbers = [3, 1, 5, 2, 4];
console.log("\nMy unsorted numbers:", myNumbers);

// Sorting the numbers
myNumbers.sort((a, b) => a - b);
console.log("My sorted numbers:", myNumbers);

// Task 3: Using array methods
let nums = [3, 1, 5, 2, 4];
console.log("\nStarting with numbers:", nums);

// Doubling all numbers
let doubled = nums.map(function(num) {
    return num * 2;
});
console.log("Doubled numbers:", doubled);

// Getting only odd numbers
let odds = nums.filter(function(num) {
    return num % 2 !== 0;
});
console.log("Odd numbers only:", odds);

// Adding all numbers
let total = nums.reduce(function(sum, num) {
    return sum + num;
}, 0);
console.log("Sum of all numbers:", total);

// String Tasks
console.log("\nString Manipulation Tasks");
console.log("-------------------------");

// Task 1: String length
let myMessage = "Hello, World!";
console.log("My message:", myMessage);
console.log("Length of my message:", myMessage.length);

// Task 2: Changing letter case
let myText = "Hello, World!";
console.log("\nOriginal text:", myText);
console.log("In uppercase:", myText.toUpperCase());
console.log("In lowercase:", myText.toLowerCase());

// Task 3: Getting parts of a string
let mySentence = "The quick brown fox jumps over the lazy dog";
console.log("\nFull sentence:", mySentence);
let part1 = mySentence.substring(4, 15);  // getting "quick brown"
console.log("Part of sentence:", part1);

// Task 4: Splitting into words
let splitText = "The quick brown fox";
console.log("\nText to split:", splitText);
let wordArray = splitText.split(" ");
console.log("Split into words:", wordArray);
console.log("Number of words:", wordArray.length);
