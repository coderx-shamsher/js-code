<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# vairables scopes in js and give me the practice probelms

Below is a **deep but beginner-friendly** explanation of **variable scope in JavaScript** (English + Hinglish mix) + **practice problems in separate JS files** you can create and solve.

***

# README.md — Variable Scope in JavaScript (Deep + Easy)

## What is “scope”?

**Scope** means: “Where can a variable be used/accessed?”
Hinglish: variable ka “area/limit” jahan tak woh visible hai.

If a variable is **inside scope**, you can use it.
If it’s **outside scope**, you get `ReferenceError: x is not defined`.

***

## Types of scope you must learn

### 1) Global scope

Variable declared **outside** any function/block is usually global.

```js
const siteName = "MyApp"; // global

function show() {
  console.log(siteName); // ✅ works (global accessible inside)
}

show();
console.log(siteName); // ✅ works
```

**Why it works:** functions can “see” variables that are defined outside them.

**Beginner warning:** Too many globals = confusion + bugs, because any code can change them.

***

### 2) Function scope (local scope)

Variables declared **inside a function** live only inside that function.

```js
function demo() {
  let secret = "1234";   // local to demo()
  console.log(secret);   // ✅
}

demo();
// console.log(secret);  // ❌ ReferenceError
```

**Why it works:** when function ends, its local variables are not available outside.

***

### 3) Block scope (`let` and `const`)

A **block** is anything inside `{ ... }` like `if`, `for`, `while`.

```js
if (true) {
  let msg = "inside block";
  console.log(msg); // ✅
}

console.log(msg); // ❌ ReferenceError
```

**Why it works:** `let` and `const` are block-scoped, so they stay inside `{}` only.

***

### 4) `var` is NOT block-scoped (common trap)

`var` behaves differently: it is **function-scoped**, not block-scoped.

```js
if (true) {
  var x = 10;
}

console.log(x); // ✅ 10 (surprising!)
```

**Why it happens:** `var` ignores block boundaries, so it “leaks” out of the block (within the same function/global).

**Beginner rule:** Prefer `let`/`const`. Avoid `var` in new code.

***

## Scope chain (lexical scoping) — the “search system”

When you use a variable name, JavaScript searches like this:

1. Check current block/function
2. If not found, go one level up (outer function)
3. Keep going up until global
4. If nowhere found → `ReferenceError`

### Example

```js
const a = "global";

function outer() {
  const b = "outer";

  function inner() {
    const c = "inner";
    console.log(a); // ✅ found in global
    console.log(b); // ✅ found in outer
    console.log(c); // ✅ found in inner
  }

  inner();
}

outer();
```

Hinglish: inner function “upar upar” search karta hai until it finds the variable.

***

## Shadowing (same name inside)

You can create a variable with the same name in an inner scope. This is called **shadowing**.

```js
let name = "Outside";

function test() {
  let name = "Inside";
  console.log(name); // Inside
}

test();
console.log(name); // Outside
```

**Why it works:** inner `name` is a different variable; it hides the outer one inside that scope.

**Beginner mistake:** thinking inner variable updates outer automatically (it doesn’t).

***

## Best practices (simple rules)

- Use **const by default**.
- Use **let** only when you need to re-assign.
- Avoid **var**.
- Keep globals minimal.
- Use clear names to avoid shadowing confusion.

***

# Practice Problems — separate JS files (question templates)

Create folder:

```
scope-practice/
  S01_global_vs_local.js
  S02_block_scope.js
  S03_var_traps.js
  S04_scope_chain.js
  S05_shadowing.js
  S06_debug_tasks.js
```


## S01_global_vs_local.js

```js
/**
 * Global vs Local
 */

// Q1: Make a global variable appName = "ScopeApp"
// Print it inside a function and outside.
// TODO

// Q2: Create a function createUser() with a local variable username.
// Print username inside. Then try printing outside (comment it).
// TODO

// Q3: Make two functions both having a local variable named count.
// Print count from both functions. Confirm they are independent.
// TODO
```


## S02_block_scope.js

```js
/**
 * Block scope with let/const
 */

// Q1: Inside an if block, declare let msg = "Hello".
// Print inside block. Try printing outside (comment it).
// TODO

// Q2: Make a for loop with let i.
// Print i inside loop.
// After loop ends, try printing i (comment it).
// TODO

// Q3: Make a const inside a block. Try re-assigning it.
// Observe the error (keep re-assign line commented if needed).
// TODO
```


## S03_var_traps.js

```js
/**
 * var traps (block leakage)
 */

// Q1: Use var inside if block and access it outside.
// Observe: it works.
// TODO

// Q2: Now do the same with let and confirm it fails outside block.
// TODO

// Q3: Create a function demoVar() and declare var x inside.
// Try accessing x outside the function (comment it).
// TODO
```


## S04_scope_chain.js

```js
/**
 * Scope chain (lexical scoping)
 */

// Q1: Make global variable site = "global-site"
// Make function outer() with variable theme = "dark"
// Inside outer, make inner() printing both site and theme
// Call outer()
// TODO

// Q2: Add inner variable theme = "light" and print theme.
// Observe which one is used.
// TODO
```


## S05_shadowing.js

```js
/**
 * Shadowing practice
 */

// Q1: Declare let city = "Amritsar" globally
// Inside function, declare let city = "Delhi"
// Print city inside and outside.
// TODO

// Q2: Change inner variable name to cityName and see clarity.
// TODO
```


## S06_debug_tasks.js

```js
/**
 * Debug tasks (fix the code)
 */

// Task 1: Fix scope error
function test1() {
  let a = 10;
}
// console.log(a); // ❌ Fix: how to print a properly?

// Task 2: Fix block scope confusion
if (true) {
  let msg = "hi";
}
// console.log(msg); // ❌ Fix: how to use msg correctly?

// Task 3: Avoid var leakage
if (true) {
  var x = 5;
}
console.log(x); // prints 5, but rewrite using let/const safely
// TODO
```


***

## Quick question (so I can customize next practice)

You solve in **Node.js (VS Code terminal)** or **Browser console**?
<span style="display:none">[^1][^10][^11][^12][^13][^14][^2][^3][^4][^5][^6][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/93434503/bf11405c-12f2-4ba6-86e1-953eba0ef670/operators_day2.js

[^2]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/93434503/6fba9e32-bc16-49b7-9286-ca0313784602/image.jpg

[^3]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/93434503/b113dddf-7a95-478b-bf88-c63ce393a428/image.jpg

[^4]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/93434503/e6b49da0-d11e-4e87-ae46-11be0aaab059/image.jpg

[^5]: https://www.w3schools.com/js/js_scope.asp

[^6]: https://www.geeksforgeeks.org/javascript/javascript-scope/

[^7]: https://www.programiz.com/javascript/variable-scope

[^8]: https://dev.to/yugjadvani/five-types-of-scope-in-javascript-a-deep-dive-for-developers-285a

[^9]: https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript

[^10]: https://dev.to/jeetvora331/different-types-of-scope-in-javascript-3cdi

[^11]: https://www.freecodecamp.org/news/scope-in-javascript-global-vs-local-vs-block-scope/

[^12]: https://developer.mozilla.org/en-US/docs/Glossary/Scope

[^13]: https://www.simplilearn.com/tutorials/javascript-tutorial/scope-of-variables-in-javascript

[^14]: https://www.youtube.com/watch?v=KyqmbIkZGIo

