// 1. Object Property Access
// • Question: Create an object named car with properties make, model, and year. How would
// you access and print the model of the car?


let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020
  };
  
  console.log(car.model);
  
//   2. Array Iteration
// • Question: Given an array of numbers, write a for loop that prints each number in the array


let numbers = [1, 2, 3, 4, 5];


for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// 3. Array Sum Function
// • Question: Write a function that takes an array of numbers as an argument and returns the
// sum of all elements in the array

 
function sumArray(array) {
    let sum = 0;
    
   
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  
    return sum;
  }

  let number = [1, 2, 3, 4, 5];
  console.log(sumArray(numbers));
  
//   4. Date Manipulation
// • Question: How would you create a new Date object in JavaScript and extract the current year
// from it?


let currentDate = new Date();

let currentYear = currentDate.getFullYear();

console.log(currentYear);

// 5. If-Else Statement
// • Question: Write a function that takes a number as an argument and returns "Positive" if the
// number is greater than 0, "Negative" if the number is less than 0, and "Zero" if the number is
// 0.

// number  positive, negative, or zero
function checkNumber(num) {
    if (num > 0) {
      return "Positive";
    } else if (num < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
  }

  console.log(checkNumber(10));   

//   6. While Loop
// • Question: Write a while loop that prints numbers from 1 to 5.


let i = 1;

while (i <= 5) {
  console.log(i);
  i++; 
}

// 7. Math Operations
// • Question: Write a function that calculates the square root of a number using JavaScript's
// Math object.

// Function to calculate the square root of a number
function calculateSquareRoot(num) {
    return Math.sqrt(num);
  }
  
  
  console.log(calculateSquareRoot(25));  // Output: 5

//   8. Array Filtering
// • Question: Write a function that takes an array of numbers and returns a new array
// containing only the even numbers.

function filterEvenNumbers(arr) {
  // Use filter and check for valid numbers before applying the even number condition
  return arr.filter(num => typeof num === 'number' && num % 2 === 0);
}

// Example usage
const such = [1, 2, 'hello', 4, null, 6, undefined, 8, 9, 10];
const evenNumbers = filterEvenNumbers(such);
console.log(evenNumbers);

// 9. Function with Default Parameters
// • Question: Create a function that multiplies two numbers. If the second number is not
// provided, it should default to 10.

function multiply(a, b = 10) {
  return a * b;
}

console.log(multiply(5));   

// 10. Object Methods
// • Question: Create an object calculator with methods add, subtract, multiply, and divide. Each
// method should take two numbers as arguments and return the result of the corresponding
// operation.

const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    if (b === 0) {
      return 'Error: Division by zero is not allowed';
    }
    return a / b;
  }
};

console.log(calculator.add(5, 3));      
console.log(calculator.subtract(5, 3)); 

// 11. Nested If-Else
// • Question: Write a function that checks a student's grade and returns "A" for marks above 90,
// "B" for marks between 80 and 90, "C" for marks between 70 and 80, and "F" for marks below
// 70.

function checkGrade(marks) {
  if (marks > 90) {
    return "A";
  } else if (marks > 80) {
    return "B";
  } else if (marks > 70) {
    return "C";
  } else {
    return "F";
  }
}

console.log(checkGrade(95));  

// 13. For Loop with Break
// • Question: Write a for loop that iterates through an array of numbers and breaks the loop
// when it encounters the number 5.

const tnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < tnumbers.length; i++) {
  if (tnumbers[i] === 5) {
    console.log('Number 5 encountered, breaking the loop.');
    break; // Break the loop when the number 5 is found
  }
  console.log(tnumbers[i]); // Print each number before the loop breaks
}

console.log('Loop terminated.');

// 14. Date Comparison
// • Question: Write a function that takes two dates as arguments and returns true if the first
// date is earlier than the second date

function isEarlier(date1, date2) {
 
  return new Date(date1) < new Date(date2);
}


const date1 = '2023-01-01';
const date2 = '2024-01-01';

console.log(isEarlier(date1, date2)); 


// 15. Switch Statement
// • Question: Write a switch statement that takes a day of the week (1 for Monday, 2 for
// Tuesday, etc.) and returns the name of the day.

function getDayName(day) {
  let dayName;
  
  switch(day) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    case 7:
      dayName = "Sunday";
      break;
    default:
      dayName = "Invalid day"; 
  }
  
  return dayName;
}

console.log(getDayName(1)); 
console.log(getDayName(6)); 






  
     
  


  