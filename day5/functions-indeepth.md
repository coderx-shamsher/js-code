<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# functions in js explain me detailed way and the more code practice problems

Below is a **deep, beginner-friendly README.md** on **Functions in JavaScript**, plus **more practice problem JS files** (question-only templates) so you can code and solve. Functions are a core concept in JS and are covered in MDN’s Functions guide (including hoisting and different syntaxes).[^1][^2]

***

# README.md — Functions in JavaScript (Deep + Easy, English + Hinglish)

## 1) Function kya hota hai? (First principles)

A **function** is a reusable block of code that you can run whenever you want.[^1]
Hinglish: function ek “machine/recipe” hai—inputs do, kaam hota hai, output milta hai.[^3]
Functions help you avoid copy-paste, make code readable, and make debugging easy.[^3]

### Mental model (ASCII)

```
Inputs (arguments) -> [ Function ] -> Output (return)
```


***

## 2) Function Declaration (classic style)

```js
function square(n) {
  return n * n; // output back to the caller
}

console.log(square(5)); // 25
```

Why it works:

- `n` is a parameter (input variable).[^4]
- `return` sends a value back to where the function was called.[^1]


### Important: Return vs Console

Beginners confuse these:

- `console.log()` prints on screen (for humans).
- `return` gives value back (for code to use).[^1]

Example:

```js
function add(a, b) {
  console.log(a + b); // prints, but doesn't return
}

const result = add(2, 3);
console.log(result); // undefined
```

If no `return`, JavaScript returns `undefined` by default.[^1]

***

## 3) Parameters vs Arguments (simple)

- **Parameters**: function definition mein placeholders (`function add(a,b)` → a,b).[^4]
- **Arguments**: function call mein actual values (`add(2,3)` → 2,3).[^4]

Hinglish: parameter = dabba, argument = dabbe ke andar wali cheez.

***

## 4) Function Expression (function as a value)

web.dev explains function expressions as functions created where expressions are allowed, often stored in variables.[^2]

```js
const square = function (n) {
  return n * n;
};

console.log(square(6)); // 36
```

Why it matters:

- JS mein functions “values” hain, so you can store them in variables and pass them around.[^2][^3]

***

## 5) Arrow Functions (modern short syntax)

Arrow functions are a compact alternative to function expressions.[^5]

```js
const add = (a, b) => {
  return a + b;
};
console.log(add(4, 7)); // 11
```


### One-liner arrow (implicit return)

```js
const square = (n) => n * n;
```

This works when body is a single expression; then `{}` and `return` can be omitted.[^5][^2]

Beginner note:
Arrow functions behave differently with `this` (advanced, later).[^5]

***

## 6) Function Scope (local vs global)

Function ke andar declared variables usually **bahar accessible nahi hote** (local scope).[^1]
That’s good because it prevents name clashes and keeps code safe.[^1]

```js
const outside = "global";

function demo() {
  const inside = "local";
  console.log(outside); // ✅ can read global
  console.log(inside);  // ✅ can read local
}

demo();
// console.log(inside); // ❌ ReferenceError
```

Reason: `inside` exists only inside function body scope.[^1]

***

## 7) Hoisting (big interview + beginner confusion)

MDN says: **function declarations are hoisted**, so you can call them before their definition in the file.[^6][^1]

```js
console.log(square(5)); // 25

function square(n) {
  return n * n;
}
```

This runs because declaration is hoisted.[^1]

But MDN also says **function expressions are NOT hoisted like that** (calling before assignment fails).[^6][^1]

```js
// console.log(square(5)); // ❌ error

const square = function (n) {
  return n * n;
};
```

Beginner rule:

- If you want “call anywhere”, use function declaration.
- If you store in variables (`const`), define first then call.[^1]

***

## 8) Default parameters (easy power-up)

MDN mentions default parameters (if argument not passed, a default value is used).[^4]

```js
function greet(name = "Guest") {
  return "Hello " + name;
}

console.log(greet());      // Hello Guest
console.log(greet("Ali")); // Hello Ali
```

Why: if name is `undefined`, default is used.[^4]

***

## 9) Common beginner mistakes (and fixes)

- Writing function but never calling it. Fix: call with `()`.[^1]
- Using `console.log` instead of `return` when you need output for further logic.[^1]
- Calling function expression before it’s assigned (hoisting confusion).[^1]
- Forgetting `return` in arrow one-liners when using `{}` block (block body needs explicit `return`).[^5]

Example mistake:

```js
const add = (a, b) => { a + b }; // returns undefined
```

Fix:

```js
const add = (a, b) => a + b;
```

Arrow expressions return implicitly; block bodies don’t.[^5]

***

# Practice Problems (More) — Separate JS files

Create folder:

```
js-practice-functions/
  F01_basics.js
  F02_return_and_scope.js
  F03_parameters.js
  F04_loops_inside_functions.js
  F05_function_expressions_arrows.js
  F06_mini_projects.js
```


## F01_basics.js

```js
/**
 * Functions Basics
 */

// Q1: make function sayHi() that prints "Hi"
function sayHi() {
  // TODO
}
sayHi();

// Q2: greet(name) -> return "Hello, <name>"
function greet(name) {
  // TODO
}
console.log(greet("Ali"));

// Q3: add(a,b) -> return sum
// TODO

// Q4: subtract(a,b) -> return difference
// TODO

// Q5: multiply(a,b) -> return product
// TODO
```


## F02_return_and_scope.js

```js
/**
 * Return + Scope
 */

// Q1: What does this return? Fix it so it returns value.
function brokenAdd(a, b) {
  // TODO: return a + b
  console.log(a + b);
}
const r = brokenAdd(2, 3);
console.log("Result:", r); // should be 5

// Q2: Make a function isAdult(age) returning true if age >= 18 else false
// TODO

// Q3: Make function demoScope() where you create a local variable and print it.
// Then try to print that local variable outside (commented) to see error.
// TODO
```


## F03_parameters.js

```js
/**
 * Parameters / Defaults
 */

// Q1: greet(name="Guest") using default parameter
// TODO

// Q2: make function fullName(first, last) return "first last"
// TODO

// Q3: make function calcBill(price, taxPercent=5) return finalAmount
// Example: calcBill(100) => 105
// TODO

// Q4: make function clamp(num, min, max)
// returns min if num < min, max if num > max, else num
// TODO
```


## F04_loops_inside_functions.js

```js
/**
 * Loops inside functions
 */

// Q1: sumToN(n) => 1+2+...+n
// TODO

// Q2: factorial(n) => n!
// TODO

// Q3: countVowels(str) => number of vowels in str
// TODO

// Q4: reverseString(str) => reversed string
// TODO

// Q5: findMax(arr) => largest number in array
// TODO

// Q6: average(arr) => average of numbers
// TODO
```


## F05_function_expressions_arrows.js

```js
/**
 * Function expressions + Arrow functions
 */

// Q1: function expression: const isEven = function(n) { ... }
// return true if even else false
// TODO

// Q2: arrow function: const square = (n) => n*n
// TODO

// Q3: arrow function with block body: const add = (a,b) => { return a+b; }
// TODO

// Q4: create an array of numbers and use a loop + a function to print squares
// (No map yet, loop only)
// TODO
```


## F06_mini_projects.js

```js
/**
 * Mini Projects using functions
 */

// Project 1: Calculator
// make functions: add, sub, mul, div
// then call them and print results nicely
// TODO

// Project 2: Password strength (very basic)
// function checkPassword(pwd):
// - if length < 6 => "Weak"
// - else if contains a number => "Good"
// - else => "Okay"
// TODO

// Project 3: Shopping discount
// function finalPrice(price):
// - if price >= 1000 => 10% off
// - else no discount
// TODO
```


***

## One question (so practice fits you)

You want these practice problems to be solvable in **Node.js (VS Code terminal)** or **browser console**?
<span style="display:none">[^10][^11][^12][^13][^14][^15][^16][^17][^18][^19][^20][^21][^22][^23][^24][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

[^2]: https://web.dev/learn/javascript/functions/function-expressions

[^3]: https://web.dev/learn/javascript/functions

[^4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions

[^5]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

[^6]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function

[^7]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/93434503/bf11405c-12f2-4ba6-86e1-953eba0ef670/operators_day2.js

[^8]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/93434503/6fba9e32-bc16-49b7-9286-ca0313784602/image.jpg

[^9]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/93434503/b113dddf-7a95-478b-bf88-c63ce393a428/image.jpg

[^10]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/93434503/e6b49da0-d11e-4e87-ae46-11be0aaab059/image.jpg

[^11]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

[^12]: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

[^13]: https://dev.to/a_b_102931/back-to-basics-functions-hoisting-and-scope-3l5o

[^14]: https://www.cs.unb.ca/~bremner/teaching/cs2613/books/mdn/Reference/Functions/Arrow_functions/

[^15]: https://dev.to/milburngomes/javascript-arrow-functions-expressions-394f

[^16]: https://www.greatfrontend.com/questions/quiz/how-does-hoisting-affect-function-declarations-and-expressions

[^17]: https://data-flair.training/blogs/javascript-function/

[^18]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types

[^19]: https://www.w3schools.com/js/js_arrow_function.asp

[^20]: https://javascript.info/function-expressions

[^21]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function

[^22]: https://devdoc.net/web/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Arrow_functions.html

[^23]: https://web.dev/learn/javascript

[^24]: https://d-libro.com/topic/function-hoisting/

