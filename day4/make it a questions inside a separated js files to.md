<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# make it a questions inside a separated js files to i can solve this problems by coding

Below are **separate JS files** (question-only templates) you can create and solve by writing code inside. These practice sets cover **variables, operators, conditionals, loops, and functions** like beginner exercise platforms do.[^1][^2]

***

## Folder structure (suggested)

Create a folder like this:

```
js-practice/
  01_variables.js
  02_operators.js
  03_conditionals.js
  04_loops.js
  05_functions.js
```

Each file below has only questions + starter code. You fill the `// TODO` parts.

***

## 01_variables.js

```js
/**
 * Practice: Variables
 * Rules:
 * - Use let/const properly
 * - Use meaningful variable names
 */

// Q1: Create a variable called 'fullName' and store your full name in it.
// Print it.
const fullName = ""; // TODO
console.log(fullName);

// Q2: Create a variable 'age' (number). Print it.
let age = 0; // TODO
console.log(age);

// Q3: Update age by adding 1 (birthday). Print new age.
// TODO

// Q4: Create 3 variables: city, country, isStudent (boolean). Print all.
// TODO

// Q5: Swap values (classic):
// let a = 10, b = 20
// After swapping: a should be 20, b should be 10
let a = 10;
let b = 20;
// TODO (swap without changing the numbers 10 and 20)
console.log("a:", a, "b:", b);

// Q6: Create a const 'pi' = 3.14159 and print it.
// TODO

// Q7: Declare let x; print x. Observe output (undefined).
// TODO
```


***

## 02_operators.js

```js
/**
 * Practice: Operators
 * Cover:
 * - Arithmetic + - * / % **
 * - Assignment = += -= *= /= %= **=
 * - Comparison == === != !== > >= < <=
 * - Logical && || !
 * - typeof
 */

// Q1: Calculate and print:
// 45 + 55, 100 - 37, 12 * 8, 100 / 4
// TODO

// Q2: Remainder practice:
// Print remainder of 29 divided by 5 using %
// TODO

// Q3: Power practice:
// Print 2 ** 5
// TODO

// Q4: Assignment operator:
// let points = 10; increase it by 5 using += and print
let points = 10;
// TODO

// Q5: Comparison:
// Check and print results:
// "5" == 5
// "5" === 5
// TODO

// Q6: Logical:
// Create booleans: isLoggedIn=true, isAdmin=false
// Print result of (isLoggedIn && isAdmin)
// Print result of (isLoggedIn || isAdmin)
// TODO

// Q7: NOT operator:
// Print !true and !false
// TODO

// Q8: typeof checks:
// Print typeof "Ali", typeof 123, typeof null
// TODO
```


***

## 03_conditionals.js

```js
/**
 * Practice: Conditional Statements
 * Cover:
 * - if
 * - if...else
 * - if...else if...else
 * - ternary operator
 */

// Q1: Given age, print:
// - "Child" if age < 13
// - "Teen" if age < 18
// - "Adult" otherwise
const age = 16; // change and test
// TODO

// Q2: Even/odd:
// Given num, print "Even" or "Odd"
const num = 27;
// TODO

// Q3: Grade system:
// marks 90+ A, 80+ B, 70+ C, 60+ D, else F
const marks = 83;
// TODO

// Q4: Login simulation:
// username must be "admin" AND password must be "1234"
// Print "Login success" else "Invalid credentials"
const username = "admin";
const password = "1234";
// TODO

// Q5: Ternary:
// Given temperature, if > 30 print "Hot" else "Normal"
const temp = 35;
// TODO (use ternary)

// Q6: Truthy/Falsy:
// If inputString is empty => "Please enter value" else "Thanks"
const inputString = "";
// TODO
```


***

## 04_loops.js

```js
/**
 * Practice: Loops
 * Cover:
 * - for
 * - while
 * - do...while
 * - break / continue
 */

// Q1: Print numbers 1 to 10 using for loop
// TODO

// Q2: Print numbers 10 to 1 using while loop
// TODO

// Q3: Sum of 1 to n (n=10) using loop; print sum
const n = 10;
// TODO

// Q4: Multiplication table of 5 (5x1 to 5x10)
// TODO

// Q5: Count vowels in a string using loop
const str = "javascript";
// TODO

// Q6: Skip even numbers from 1 to 20 using continue (print only odds)
// TODO

// Q7: Find first number divisible by 7 between 1 and 50 using break
// TODO

// Q8: do...while practice:
// Start from i=5 and print i until i becomes 1 (decrement)
// TODO
```


***

## 05_functions.js

```js
/**
 * Practice: Functions
 * Cover:
 * - function declaration
 * - parameters/arguments
 * - return
 * - arrow functions (optional)
 */

// Q1: Create a function greet(name) that returns "Hello, <name>"
function greet(name) {
  // TODO
}
console.log(greet("Ali"));

// Q2: Create add(a,b) that returns sum
// TODO

// Q3: Create isEven(num) => returns true if even else false
// TODO

// Q4: Create maxOfTwo(a,b) => return bigger number
// TODO

// Q5: Create factorial(n) using a loop inside function
// factorial(5) = 120
// TODO

// Q6: Create function countDigits(num) => returns number of digits
// Example: 12345 => 5
// TODO

// Q7: Arrow function practice:
// const square = (n) => n*n
// Make it and test square(6)
// TODO

// Q8: Function + conditionals:
// Create getGrade(marks) returning "A/B/C/D/F" based on marks
// TODO
```


***

## One quick question (so I can tailor next practice set)

You want these practice files to be solved in **Node.js** (VS Code + terminal) or **Browser console** (Chrome DevTools)?
<span style="display:none">[^10][^11][^12][^13][^14][^3][^4][^5][^6][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php

[^2]: https://www.jschallenger.com/javascript-basics/

[^3]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/93434503/bf11405c-12f2-4ba6-86e1-953eba0ef670/operators_day2.js

[^4]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/93434503/6fba9e32-bc16-49b7-9286-ca0313784602/image.jpg

[^5]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/93434503/b113dddf-7a95-478b-bf88-c63ce393a428/image.jpg

[^6]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/93434503/e6b49da0-d11e-4e87-ae46-11be0aaab059/image.jpg

[^7]: https://www.codechef.com/practice/javascript

[^8]: https://www.geeksforgeeks.org/javascript/practice-javascript-online/

[^9]: https://www.w3schools.com/js/js_examples.asp

[^10]: https://coderslab.com/en/javascript-challenge/loops

[^11]: https://dev.to/zachgoll/lesson-5-javascript-functions-loops-and-conditionals-fullstackroadmap-ej0?url=https%3A%2F%2Fdev.to%2Fzachgoll%2Flesson-5-javascript-functions-loops-and-conditionals-fullstackroadmap-ej0

[^12]: https://www.w3schools.com/js/js_exercises.asp

[^13]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills/Conditionals

[^14]: https://www.linkedin.com/pulse/30-javascript-coding-exercises-beginners-intermediate-svekis--1feef

