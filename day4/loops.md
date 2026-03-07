<!-- <img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/> -->


## Big idea (1 minute intro)

**Loops** = repeat the same steps until a condition says “stop”.[^1]

Real-life:

- Loop = “daily routine” repeat until weekend.


***

## Loops (Repeat work)

## 1) What is a loop, exactly?

A loop runs a block of code again and again while a condition stays true.[^3]
Har repeat ko **iteration** bolte hain.[^1]
Loop ke 3 main parts hotay hain: start, condition, and change (so loop eventually stops).[^4]

### Loop mental model (ASCII)

```
Start
  |
  v
Check condition?
  | yes
  v
Run body
  |
  v
Update (change)
  |
  └------> back to condition
  |
  no
  v
End
```


### Super important warning

Agar update missing ho, **infinite loop** ban sakta hai (program stuck).[^4]

***

## 2) `for` loop (most common)

`for` loop is best when you know “kitni dafa repeat karna hai” (count-based).[^4]

### Syntax (easy)

```js
for (initialization; condition; update) {
  // loop body
}
```


### Example: print 1 to 5

```js
for (let i = 1; i <= 5; i++) {
  console.log(i); // 1 2 3 4 5
}
```


### Why it works (step-by-step)

- `let i = 1` runs once (start point).[^4]
- `i <= 5` is checked before every iteration (gatekeeper).[^4]
- After body, `i++` runs (moves toward stopping).[^4]

***

## 3) `while` loop (condition-based)

`while` runs as long as condition is true, and condition is checked **before** body.[^3]

### Syntax

```js
while (condition) {
  // body
}
```


### Example: countdown

```js
let n = 3;

while (n > 0) {
  console.log(n); // 3 2 1
  n--;            // update (very important)
}
```

Why it works:

- Condition `n > 0` true → body runs.[^3]
- `n--` decreases n, so eventually condition becomes false and loop ends.[^3]

***

## 4) `do...while` (runs at least once)

`do...while` checks condition **after** running the body, so it runs **minimum 1 time**.[^5]

### Syntax

```js
do {
  // body
} while (condition);
```


### Example

```js
let x = 0;

do {
  console.log("Runs once at least"); 
  x++;
} while (x < 0);
```

Why it works:

- Body executes first, then condition is tested.[^5]

When to use:

- When you must run the action once (like “show menu once, then ask again”).[^5]

***

## 5) `for...of` vs `for...in` (must-know in dev)

### `for...of` (values of arrays/strings)

`for...of` iterates over **values** from an iterable like Array or String.[^6]

```js
const fruits = ["apple", "mango", "banana"];

for (const item of fruits) {
  console.log(item); // apple mango banana
}
```

Why it works: arrays are iterable, loop gives each value one by one.[^6]

### `for...in` (keys/properties of objects)

In general, `for...in` is used to iterate over **property names (keys)**.[^1]

```js
const user = { name: "Ali", age: 18 };

for (const key in user) {
  console.log(key, user[key]); // name Ali, age 18
}
```

Why it works: objects are key-value collections; `for...in` walks through keys.[^1]

Beginner rule:

- Array values → `for...of`
- Object keys → `for...in`[^6][^1]

***

## 6) `break` and `continue`

These control loop flow (loop ko “steer” karte hain).[^1][^4]

### `break` = stop loop completely

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i); // 1 2 3 4
}
```

`break` exits loop instantly.[^4]

### `continue` = skip current iteration

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i); // 1 2 4 5
}
```

`continue` jumps to next iteration.[^1]

***

## 7) Loop common mistakes (and fixes)

- Infinite loop (update missing). Fix: ensure counter changes and condition can become false.[^4]
- Off-by-one errors (`<` vs `<=`). Fix: decide clearly last value included or not.[^4]
- Using `for...in` on arrays and getting weird keys. Fix: use `for...of` for array values.[^1]

***


## Mini practice (interactive)

Try these (predict output first):

```js
// 1) Loop
for (let i = 0; i < 3; i++) console.log("Hi");

```

`for...of` iterates values of arrays.[^6]

***

## Summary (Loops )

Loops repeat code (`for`, `while`, `do...while`) and help you process lists or repeat steps until a condition changes.[^5][^3][^1]

Real projects mostly use: `for`/`for...of` + small reusable functions.[^6][^2]

***
Bilkul 👍 **clear, short aur to-the-point** samjho 💡

---

## 🔍 Code

```js
for (const key in ob) {
  if (!Object.hasOwn(object, key)) continue;
}
```





<div align="center">⁂</div>

[^1]: https://lia.disi.unibo.it/materiale/JS/developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration.html

[^2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators

[^3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

[^4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

[^5]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while

[^6]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

[^7]: https://playcode.io/javascript/function

[^8]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

[^9]: https://www.w3schools.com/js/js_arrow_function.asp

[^10]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/93434503/bf11405c-12f2-4ba6-86e1-953eba0ef670/operators_day2.js

[^11]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/93434503/6fba9e32-bc16-49b7-9286-ca0313784602/image.jpg

[^12]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/93434503/b113dddf-7a95-478b-bf88-c63ce393a428/image.jpg

[^13]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/93434503/e6b49da0-d11e-4e87-ae46-11be0aaab059/image.jpg

[^14]: https://www.w3schools.com/jsref/jsref_dowhile.asp

[^15]: https://www.w3schools.com/js/js_loop_while.asp

[^16]: https://www.programiz.com/javascript/while-loop

[^17]: https://dev.to/swastikyadav/difference-between-forof-and-forin-loop-in-javascript-j2o

[^18]: https://javascript.info/while-for

[^19]: https://stackoverflow.com/questions/31198073/javascript-for-of-loop-ecmascript-6

[^20]: https://javascript.info/arrow-functions-basics

[^21]: https://www.youtube.com/watch?v=zO5-OnRA5lA

[^22]: https://web.dev/learn/javascript/functions/function-expressions

[^23]: https://mdn2.netlify.app/en-us/docs/web/javascript/reference/statements/for/

[^24]: https://www.geeksforgeeks.org/javascript/javascript-do-while-loop/

[^25]: https://www.almabetter.com/bytes/tutorials/javascript/do-while-for-while-loop-in-javascript

