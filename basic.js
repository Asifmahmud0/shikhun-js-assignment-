//Problem 1: Write a function to calculate the area of a triangle.
function triangleArea(base, height) {
    const area = (base * height) / 2;
    return area;
  }
  
  
  const base = 50;
  const height = 23;
  const area = triangleArea(base, height);
  console.log(`The area is ${area}`);


  //Problem 2: Write a function to convert degrees to radians.
  
  
  function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
  }
   const degrees = 120;
   const radians = degreesToRadians(degrees);
  console.log(`${degrees} degrees is equal to ${radians} radians`);

  //Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.

  //Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.
  //Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.
  function mergeArrays(array1, array2) {
    return [array1,array2];
  }
  
  const array1 = ['mango', 'banana', 'apple'];
  const array2 = ['saturday', 'sunday', 'monday'];
  const mergedArray = mergeArrays(array1, array2);
  
  console.log(mergedArray); 
  
 // Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.
 function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "This is a leap year";
  } else {
    return "Not a leap year";
  }
}
const year = 2023; 
const result = isLeapYear(year);

console.log(result);

//Problem 9: Write a function to find the maximum of five numbers.
function asnumber(num1, num2, num3, num4, num5) {
  let max = num1;

  if (num2 > max) {
    max = num2;
  }
  if (num3 > max) {
    max = num3;
  }
  if (num4 > max) {
    max = num4;
  }
  if (num5 > max) {
    max = num5;
  }

  return max;
}


const num1 = 12;
const num2 = 24;
const num3 = 8;
const num4 = 42;
const num5 = 18;

const maxNumber = asnumber(num1, num2, num3, num4, num5);

console.log(`The maximum of the five numbers is: ${maxNumber}`);



  


/*
1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.

 If-Else Statement: This statement is executed based on the condition inside the if-else statement.Here we need to use multiple statements for numerous decisions.This statement is used to choose between two options.One statement will be executed. It can be if or else.It is tough to edit if-else statements.

 Switch Case Statement: Switch statements execute as per the user decision.	Here, we need to use a single statement for numerous decisions.This statement is used to choose among multiple options.
 Here, each case will be executed one after the other.In the switch case, the values are based on user preference.It is easy to modify the switch case.

 2.What is JavaScript, and what is its primary purpose in web development?

 JavaScript (JS) is a computer programming language used to make websites and applications dynamic and interactive.It’s unique because it can run directly in your browser, not just on a server.JavaScript is the electrical and plumbing systems. JS brings dynamism and interactivity to the website. For example, pop-ups, animations, video and social media embeds, drop-down menus, and many other website components are created using JavaScript.
 JavaScript's primary purpose in web development is to create dynamic and interactive web pages.Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers. JavaScript is so popular that it's the most used programming language in the world, used as a client-side programming language by 97.0% of all websites. Client-side languages are those whose action takes place on the user's computer, rather than on the server.


3. Explain the difference between var, let, and const when declaring variables in JavaScript.

 var: The var keyword declares a function-scoped or global variable, optionally initializing it to a value.Function-scoped means that the variable is only available within the function it was declared in. Global variables are available throughout your entire code.

 const: The const keyword declares a block-scoped, immutable constant variable, i.e. a variable that can’t be reassigned.Constants are also called “immutable variables”, but that’s a bit of a misnomer since they are actually variables – just ones that can’t be reassigned.

 let: The let keyword declares a block-scoped local variable, optionally initializing it to a value.
 Block-scoped means that the variable is only available within the block it was declared in, which is usually denoted by curly braces {}.

 5. What is the difference between "null" and "undefined" in JavaScript?

 Null :  Null means an empty or non-existent value. Null is assigned, and explicitly means nothing.null is also an object.
 Undefined : Undefined means a variable has been declared, but the value of that variable has not yet been defined.

 */