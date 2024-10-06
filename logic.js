//  ...(1)....
// . Sum of Two Numbers
// Write a function sum(a, b) that takes two numbers as arguments and returns their
// sum.
// Example: sum(3, 4) should return 7.

 function sum(a, b) {
    return a + b;
}

const result = sum(3, 4);
console.log(result);

// 2. Check Even or Odd
// Write a function isEven(n) that returns true if the number n is even, and false if it's
// odd.
// Example: isEven(5) should return false.

function isEven(n) {
    return n % 2 === 0;
}

console.log(isEven(5));  
  

// 2. Check Even or Odd
// Write a function isEven(n) that returns true if the number n is even, and false if it's
// odd.
// Example: isEven(5) should return false.

function isEven(n) {
    if (n % 2 === 0) {
        return true;  // The number is even
    } else {
        return false;  // The number is odd
    }
}
console.log(isEven(5));  
  
// 4. Reverse an Array
// Write a function reverseArray(arr) that takes an array and returns a new array with
// the elements in reverse order.
// Example: reverseArray([1, 2, 3]) should return [3, 2, 1].

function reverseArray(arr) {
    return arr.slice().reverse();
}

console.log(reverseArray([1, 2, 3])); 


// 5. Factorial of a Number
// Write a function factorial(n) that takes a non-negative integer n and returns its
// factorial.
// Example: factorial(5) should return 120.

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;  
    } else {
        return n * factorial(n - 1);  
    }
}

console.log(factorial(5));  

// 6. Count Vowels in a String
// Write a function countVowels(str) that takes a string and returns the number of
// vowels (a, e, i, o, u) in it.
// Example: countVowels('hello world') should return 3.

function countVowels(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels('hello world'));  // Output: 3


// Remove Duplicates from an Array
// Write a function removeDuplicates(arr) that takes an array and returns a new array
// with duplicates removed.
// Example: removeDuplicates([1, 2, 2, 3, 4, 4]) should return [1, 2, 3, 4].

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));  

// 8. Sum of Array Elements
// Write a function sumArray(arr) that takes an array of numbers and returns the sum
// of all the elements.
// Example: sumArray([1, 2, 3, 4]) should return 10.

function sumArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

console.log(sumArray([1, 2, 3, 4])); 

// 9. Convert Celsius to Fahrenheit
// Write a function celsiusToFahrenheit(c) that converts Celsius to Fahrenheit using the
// formula F = C * 9/5 + 32.
// Example: celsiusToFahrenheit(0) should return 32.

function celsiusToFahrenheit(c) {
    return (c * 9/5) + 32;
}

console.log(celsiusToFahrenheit(0));  
console.log(celsiusToFahrenheit(25)); 

// 10. Check if a Number is Prime
// Write a function isPrime(n) that returns true if n is a prime number and false otherwise.
// Example: isPrime(7) should return true.

function isPrime(n) {
    if (n <= 1) return false; 
    if (n <= 3) return true;  

    if (n % 2 === 0 || n % 3 === 0) return false; 

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false; 
    }

    return true; 
}


console.log(isPrime(7));  







