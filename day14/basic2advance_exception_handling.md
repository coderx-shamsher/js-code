# **Exception Handling in JavaScript**
### *The Complete Beginner-to-Intermediate Guide to throw, try/catch/finally, and Error Objects*

---

## 📚 Table of Contents

1. [What Is Exception Handling? (And Why Should You Care?)](#chapter-1)
2. [Understanding Errors — What Goes Wrong and Why](#chapter-2)
3. [The `throw` Statement — Creating and Throwing Errors](#chapter-3)
4. [The `try/catch` Block — Catching Errors Gracefully](#chapter-4)
5. [The `finally` Block — Code That Always Runs](#chapter-5)
6. [Error Objects — The Anatomy of an Error](#chapter-6)
7. [Built-In Error Types — JavaScript's Error Family](#chapter-7)
8. [Custom Error Classes — Building Your Own Error Types](#chapter-8)
9. [Nested try/catch and Re-throwing Errors](#chapter-9)
10. [Real-World Patterns and Best Practices](#chapter-10)
11. [Grand Capstone Project](#chapter-11)

---

# Chapter 1: What Is Exception Handling? (And Why Should You Care?) {#chapter-1}

## 1.1 — Starting From Zero: The Perfect World vs. The Real World

Let's begin with a story.

Imagine you write a program that asks a user to enter two numbers and then divides the first by the second. In your head, you picture a smooth interaction:

```
User enters: 10
User enters: 2
Result: 5
```

Perfect. Clean. Logical. Your code works exactly as intended.

But then someone uses your program in a way you didn't expect:

```
User enters: 10
User enters: 0       ← dividing by zero — mathematically impossible
Result: ???
```

Or worse:

```
User enters: 10
User enters: "banana"   ← a word instead of a number
Result: ???
```

Or your program tries to fetch data from the internet — and the internet goes down. Or it reads a file — and the file doesn't exist. Or it calls a function — and someone passed the wrong type of data.

**These unexpected situations are called exceptions** — moments where your program encounters something it doesn't know how to handle using normal logic.

Without any special handling, JavaScript will simply **crash** when it hits an exception. The program stops. Everything after that point is never executed. The user sees an error message they don't understand. Your application breaks.

> 💡 **Real-World Analogy:** Think of driving a car. Normally, you drive smoothly from point A to point B. But what if you get a flat tyre? Without a spare tyre and the knowledge to change it (your "exception handling"), your journey is over. With preparation, you pull over, change the tyre, and continue. Exception handling is your spare tyre kit for code.

---

## 1.2 — What Is Exception Handling?

**Exception handling** is a programming technique that lets you:

1. **Detect** when something goes wrong
2. **Respond** to it gracefully instead of crashing
3. **Continue** running (or exit cleanly with a proper message)

It's the difference between a program that says **"Something went wrong. Please try again."** and a program that just **freezes or throws a wall of red error text** at the user.

In JavaScript, exception handling is built around three core tools:

| Tool | What It Does |
|---|---|
| `throw` | You create and "throw" an error when something goes wrong |
| `try / catch` | You "try" risky code; if it fails, you "catch" the error |
| `finally` | Code that runs no matter what — success or failure |

And all of this revolves around **Error Objects** — special JavaScript objects that represent what went wrong, where, and why.

---

## 1.3 — Why Exception Handling Matters (Real Consequences)

Here's what happens **without** exception handling:

```javascript
// No exception handling
const data = JSON.parse("this is not valid JSON");  // ← This throws an error
console.log("Processing data...");   // ← This line NEVER runs
console.log("Done!");                // ← This line NEVER runs
```

The program simply **stops dead** at the error. Everything after it is abandoned.

Here's what happens **with** exception handling:

```javascript
// With exception handling
try {
    const data = JSON.parse("this is not valid JSON");
    console.log("Parsing succeeded!");
} catch (error) {
    console.log("Parsing failed, but we handled it.");
    console.log("The error was:", error.message);
}
console.log("Program continues running normally!");
```

**Output:**
```
Parsing failed, but we handled it.
The error was: Unexpected token h in JSON at position 1
Program continues running normally!
```

The error happened — but your program survived it, told the user something meaningful, and kept going.

---

## 1.4 — Where You'll See This in Real Life

Exception handling is used **everywhere** in professional code:

- **Login forms** — handle wrong passwords, expired sessions, network failures
- **API calls** — handle server timeouts, bad responses, missing data
- **File uploads** — handle files that are too large, wrong format, corrupted
- **Database queries** — handle connection failures, missing records
- **User input** — handle unexpected data types, empty fields, invalid formats
- **Payment processing** — handle declined cards, network errors, timeout

Every professional JavaScript application you've ever used was built with exception handling. Without it, the first unexpected situation would crash everything.

---

📝 **Key Takeaways — Chapter 1**

- **Exceptions** are unexpected events that occur during program execution
- Without handling them, your program **crashes completely**
- Exception handling lets you **detect, respond to, and recover from** errors
- The three tools are: `throw`, `try/catch`, and `finally`
- Exception handling is used in **every real-world application**
- The goal is **graceful failure** — your program handles problems without breaking the user experience

---

# Chapter 2: Understanding Errors — What Goes Wrong and Why {#chapter-2}

## 2.1 — The Two Categories of Errors

Before we start handling errors, we need to understand what kinds of errors exist. In programming, errors generally fall into two broad categories:

### Category 1: Syntax Errors (Before Your Code Runs)

These are mistakes in how you *write* your code. JavaScript reads your code before running it, and if it finds something that breaks the rules of the language, it refuses to run *anything* at all.

```javascript
// ❌ Syntax Error — missing closing parenthesis
function greet(name {
    console.log("Hello, " + name);
}
// JavaScript sees this and says "This code is broken, I won't run any of it"
```

**Syntax errors cannot be caught with try/catch** — they happen before execution even begins. Your code editor (VS Code) will usually show these with a red underline.

### Category 2: Runtime Errors (While Your Code Runs)

These are errors that happen *while* the program is running. The code is written correctly, but something unexpected happens during execution. **These are the errors exception handling is designed for.**

```javascript
// This is syntactically perfect code
// But it will crash when it runs:

let user = null;
console.log(user.name);  // ← RUNTIME ERROR: Cannot read property 'name' of null
```

The code looks fine to JavaScript when it reads it. But when it tries to *run* that second line, it discovers `user` is `null` and `null` doesn't have a `.name` property. Crash.

---

## 2.2 — Common Causes of Runtime Errors

Understanding *why* errors happen helps you anticipate and handle them. Here are the most common causes:

### 1. Working with `null` or `undefined`

```javascript
// You expect an object — you get null
let product = getProductFromDatabase(id);  // Returns null if not found
console.log(product.price);  // 💥 Cannot read property 'price' of null
```

### 2. Wrong Data Types

```javascript
// You expect a number — you get a string
function double(n) {
    return n * 2;
}
double("five");  // Returns NaN — not a crash, but logically wrong
```

### 3. Invalid JSON

```javascript
JSON.parse("{broken json}");  // 💥 SyntaxError: Unexpected token b
```

### 4. Network Failures

```javascript
fetch("https://api.example.com/data")  // What if the server is down?
// This will throw an error if the network is unavailable
```

### 5. Accessing Non-Existent Array Indices

```javascript
let fruits = ["apple", "banana"];
console.log(fruits[10]);  // Returns undefined (not a crash, but logically wrong)
console.log(fruits[10].toUpperCase());  // 💥 Cannot read property 'toUpperCase' of undefined
```

### 6. Calling Non-Functions

```javascript
let number = 42;
number();  // 💥 TypeError: number is not a function
```

### 7. Division Edge Cases

```javascript
let result = 10 / 0;  // Not a crash in JS — returns Infinity
// But in other logic contexts, this can cause issues
```

---

## 2.3 — The Error Object: JavaScript's Way of Describing Failures

When JavaScript encounters a runtime error, it doesn't just stop — it creates a special object called an **Error object**. This object is a container of information about what went wrong.

Think of it like a **police report**: when something bad happens, a report is filed with details — what happened, where it happened, and any relevant information.

An Error object has three key pieces of information:

```
Error Object
├── name     → What kind of error is this? ("TypeError", "ReferenceError", etc.)
├── message  → Human-readable description of what went wrong
└── stack    → A trace showing exactly where in the code the error occurred
```

We'll explore Error objects deeply in Chapter 6 and 7. For now, just know they exist and that `catch` gives you access to them.

---

## 2.4 — Errors vs. Exceptions: Is There a Difference?

You'll hear both terms used. Here's the distinction:

- **Error** — A general term for something that went wrong. Can refer to the Error object, a syntax mistake, a logic bug, etc.
- **Exception** — Specifically, a runtime error that *interrupts normal program flow*. This is what `throw`, `try`, and `catch` deal with.

In everyday JavaScript conversation, people use "error" and "exception" interchangeably. You'll see both — don't let this confuse you. They mean essentially the same thing in this context.

---

📝 **Key Takeaways — Chapter 2**

- **Syntax errors** happen before code runs and cannot be caught — fix them in your editor
- **Runtime errors** happen during execution — these are what exception handling handles
- Common causes: `null`/`undefined` access, wrong data types, invalid JSON, network failures
- When a runtime error occurs, JavaScript creates an **Error object** with `name`, `message`, and `stack`
- "Error" and "exception" are used interchangeably in JavaScript

---

# Chapter 3: The `throw` Statement — Creating and Throwing Errors {#chapter-3}

## 3.1 — What Does "Throwing" Mean?

In everyday English, to "throw" something means to launch it away from you toward something (or someone) else.

In programming, **throwing an error** means:

1. Creating an error object describing what went wrong
2. Launching it into the execution flow
3. Causing JavaScript to immediately stop what it's doing and look for something to *catch* that error

> 💡 **Real-World Analogy:** Imagine you're a factory worker on an assembly line. Your job is to inspect products. When you find a defective product, you don't silently put it back on the belt — you throw it into the "reject bin" and call out "DEFECTIVE!" That call-out stops the line until someone addresses it. The `throw` statement is your "DEFECTIVE!" call.

---

## 3.2 — The Basic Syntax of `throw`

```javascript
throw expression;
```

That's it. `throw` is a keyword followed by a value (the "expression"). That value can technically be anything — a string, a number, a boolean, or most usefully, an **Error object**.

```javascript
// You CAN throw anything (but shouldn't throw primitives — more on this later)
throw "Something went wrong";      // throwing a string
throw 42;                          // throwing a number
throw true;                        // throwing a boolean
throw { message: "Custom error" }; // throwing a plain object

// ✅ The RIGHT way — throw an Error object:
throw new Error("Something went wrong");
```

---

## 3.3 — Your First `throw` — A Simple Example

Let's write a function that validates an age:

```javascript
// A function that checks if an age is valid
function validateAge(age) {

    // Check if the age is a number
    if (typeof age !== "number") {
        // Something is wrong — throw an error!
        throw new Error("Age must be a number, but got: " + typeof age);
    }

    // Check if the age is a positive number
    if (age < 0) {
        throw new Error("Age cannot be negative. Got: " + age);
    }

    // Check if the age is realistic
    if (age > 150) {
        throw new Error("Age seems unrealistic. Got: " + age);
    }

    // If we reach here, the age is valid
    console.log("Age is valid:", age);
}

// Testing with valid input
validateAge(25);        // ✅ Age is valid: 25

// Testing with invalid input
validateAge(-5);        // 💥 Error: Age cannot be negative. Got: -5
validateAge("twenty");  // 💥 Error: Age must be a number, but got: string
validateAge(200);       // 💥 Error: Age seems unrealistic. Got: 200
```

When `throw` executes, **everything after it in the current function stops immediately**. The error travels up the call stack looking for a `catch` block. If it doesn't find one, the program crashes.

---

## 3.4 — `throw` Stops Execution Immediately

This is crucial to understand. `throw` is like hitting an emergency stop button:

```javascript
function processData(data) {
    console.log("Step 1: Starting processing");    // ← Runs

    if (!data) {
        throw new Error("No data provided!");      // ← Throws here
    }

    console.log("Step 2: Validating data");        // ← NEVER runs if throw executed
    console.log("Step 3: Saving to database");     // ← NEVER runs if throw executed
    console.log("Step 4: Sending confirmation");   // ← NEVER runs if throw executed
}

processData(null);
// Output:
// Step 1: Starting processing
// Uncaught Error: No data provided!
// (Steps 2, 3, 4 are never executed)
```

---

## 3.5 — Why Throw? The Purpose of Manual Errors

JavaScript already throws errors automatically when things go wrong. So why would *you* manually throw errors?

**Because sometimes code is "wrong" in ways JavaScript can't detect automatically.**

Consider this function:

```javascript
function divide(a, b) {
    return a / b;
}

console.log(divide(10, 0));  // Returns: Infinity
// JavaScript doesn't throw an error here!
// But mathematically, division by zero is undefined/invalid
```

JavaScript happily returns `Infinity` for division by zero. That might silently corrupt data or logic elsewhere in your program. Better to throw explicitly:

```javascript
function divide(a, b) {

    // Validate inputs
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Both arguments must be numbers");
    }

    // Catch division by zero
    if (b === 0) {
        throw new RangeError("Cannot divide by zero");
    }

    return a / b;
}

console.log(divide(10, 2));   // ✅ Returns: 5
console.log(divide(10, 0));   // 💥 Throws: RangeError: Cannot divide by zero
console.log(divide(10, "2")); // 💥 Throws: TypeError: Both arguments must be numbers
```

Now your function *loudly fails* when given bad input, rather than silently producing wrong results.

---

## 3.6 — ❌ Wrong Way vs. ✅ Right Way: What to Throw

### ❌ Throwing Primitive Values (Avoid This)

```javascript
// ❌ Don't throw strings or other primitives
function badExample(value) {
    if (!value) {
        throw "No value provided";   // Just a string — no stack trace, no type
    }
}
```

**Why this is bad:**
- You get no stack trace (no information about where the error happened)
- You can't check the error type easily
- It breaks the convention the whole JavaScript ecosystem follows

### ✅ Throwing Error Objects (Always Do This)

```javascript
// ✅ Always throw Error objects (or subclasses of Error)
function goodExample(value) {
    if (!value) {
        throw new Error("No value provided");   // Full Error object with stack trace
    }
}
```

**Why this is good:**
- You get a full stack trace
- You can check the error type with `instanceof`
- Consistent with how all built-in JavaScript errors work

---

## 3.7 — `throw` in Validation Functions

One of the most common real-world uses of `throw` is in **input validation** — checking that data meets requirements before processing it:

```javascript
// A reusable email validator
function validateEmail(email) {

    // Check it's a string
    if (typeof email !== "string") {
        throw new TypeError("Email must be a string, received: " + typeof email);
    }

    // Check it's not empty
    if (email.trim() === "") {
        throw new Error("Email cannot be empty");
    }

    // Check for basic email format (contains @ and .)
    if (!email.includes("@")) {
        throw new Error("Email must contain '@' symbol. Got: " + email);
    }

    if (!email.includes(".")) {
        throw new Error("Email must contain a domain (e.g. .com). Got: " + email);
    }

    // Email passed all checks
    return true;
}

// -----------------------------------------------

// A reusable username validator
function validateUsername(username) {

    if (typeof username !== "string") {
        throw new TypeError("Username must be a string");
    }

    if (username.length < 3) {
        throw new RangeError(
            `Username too short. Minimum 3 characters, got ${username.length}`
        );
    }

    if (username.length > 20) {
        throw new RangeError(
            `Username too long. Maximum 20 characters, got ${username.length}`
        );
    }

    // Check for spaces
    if (username.includes(" ")) {
        throw new Error("Username cannot contain spaces");
    }

    return true;
}

// -----------------------------------------------

// Using both validators together
function registerUser(email, username) {

    // These will throw if invalid — and that's intentional
    validateEmail(email);
    validateUsername(username);

    // If we reach here, both are valid
    console.log(`Registering user: ${username} with email: ${email}`);
    // ... save to database, etc.
}
```

---

## 3.8 — `throw` Inside Conditional Logic

`throw` works naturally inside `if` statements, ternary expressions, and anywhere else:

```javascript
// In an if statement (most common)
function checkStock(quantity) {
    if (quantity < 0) {
        throw new RangeError("Quantity cannot be negative");
    }
}

// In a ternary (less common, but valid)
function getUser(id) {
    const user = database.find(id);
    // If user not found, throw; otherwise return the user
    return user ?? (() => { throw new Error(`User ${id} not found`) })();
}

// In a switch statement
function processStatus(status) {
    switch(status) {
        case "active": return "Processing active account";
        case "pending": return "Account pending approval";
        case "closed": throw new Error("Cannot process closed account");
        default: throw new TypeError(`Unknown status: ${status}`);
    }
}
```

---

⚡ **Try This Yourself — Exercise 3A**

Write a function called `withdrawMoney(balance, amount)` that:
1. Throws a `TypeError` if either argument is not a number
2. Throws a `RangeError` if `amount` is less than or equal to 0
3. Throws an `Error` with message "Insufficient funds" if `amount > balance`
4. Returns the new balance if everything is valid

Test it with these calls:
```javascript
withdrawMoney(500, 200);      // Should work, return 300
withdrawMoney(500, 0);        // Should throw RangeError
withdrawMoney(500, 1000);     // Should throw Error: Insufficient funds
withdrawMoney(500, "fifty");  // Should throw TypeError
```

---

🔥 **Mini Challenge — Chapter 3**

Build a `createPassword(password)` validator that throws specific errors for:
- Not a string
- Less than 8 characters
- No uppercase letter
- No lowercase letter
- No number
- No special character (`!@#$%^&*`)

If the password passes all checks, return `"Password is strong!"`.

---

📝 **Key Takeaways — Chapter 3**

- `throw` immediately stops execution and sends an error up the call stack
- You can throw any value, but **always throw Error objects** in practice
- `throw` is used to **manually signal invalid states** your logic detects
- The most common use is **input validation**
- If no `catch` block intercepts the thrown error, the program crashes
- Never throw strings — always `throw new Error("message")`

---

# Chapter 4: The `try/catch` Block — Catching Errors Gracefully {#chapter-4}

## 4.1 — The Problem `try/catch` Solves

In Chapter 3, we learned how to throw errors. But thrown errors crash your program unless something catches them.

Think about it this way: if `throw` is throwing a ball, then `catch` is the mitt that catches it before it hits the ground.

`try/catch` is JavaScript's mechanism for saying:

> *"Try to run this code. If anything goes wrong — whether JavaScript throws the error automatically or we throw it manually — catch it here and handle it gracefully."*

---

## 4.2 — The Basic Syntax

```javascript
try {
    // Code that might throw an error goes here
    // This is the "risky zone"
} catch (error) {
    // This runs ONLY if an error was thrown inside the try block
    // 'error' is the Error object that was thrown
    // Handle the error here
}
```

The flow works like this:

```
Start → Enter try block → Run code normally
                              ↓
                    No error? → Continue after catch block
                              ↓
                    Error thrown? → Jump immediately to catch block
                                        ↓
                                   Run catch block
                                        ↓
                                   Continue after catch block
```

---

## 4.3 — Your First `try/catch`

```javascript
// Without try/catch — program crashes:
const result = JSON.parse("bad data");   // 💥 Program crashes here
console.log("This never runs");

// -----------------------------------------------

// With try/catch — program survives:
try {
    // Attempt to parse this (might fail)
    const result = JSON.parse("bad data");
    console.log("Parsed successfully:", result);   // Only runs if no error
} catch (error) {
    // If JSON.parse failed, we land here
    console.log("Parsing failed!");
    console.log("Error message:", error.message);
}

console.log("Program continues after the try/catch block");

// Output:
// Parsing failed!
// Error message: Unexpected token b in JSON at position 0
// Program continues after the try/catch block
```

---

## 4.4 — What Exactly Is `error` in the Catch Block?

The variable name between the parentheses in `catch (error)` is just a name — you can call it anything. Convention is `error`, `err`, or `e`.

It holds the **Error object** that was thrown — containing all the information about what went wrong:

```javascript
try {
    null.toString();   // Accessing a property on null throws a TypeError
} catch (err) {
    // 'err' is the Error object
    console.log("Name:", err.name);       // TypeError
    console.log("Message:", err.message); // Cannot read properties of null
    console.log("Stack:", err.stack);     // Long stack trace string
}
```

We'll dive much deeper into Error objects in Chapter 6.

---

## 4.5 — `try/catch` with Manual `throw`

`catch` doesn't just catch JavaScript's automatic errors — it catches anything thrown with `throw`:

```javascript
function getDiscount(memberType) {
    if (memberType === "gold") return 0.20;
    if (memberType === "silver") return 0.10;
    if (memberType === "bronze") return 0.05;

    // If we reach here, it's an unknown member type
    throw new Error(`Unknown member type: "${memberType}"`);
}

// -----------------------------------------------

// Using try/catch to handle both the function call and its potential throw
try {
    const discount = getDiscount("platinum");   // "platinum" is not a valid type
    console.log("Discount:", discount);
} catch (error) {
    console.log("Could not get discount:", error.message);
}

// Output:
// Could not get discount: Unknown member type: "platinum"
```

---

## 4.6 — Reacting Differently Based on the Error

Sometimes you want to handle different types of errors differently. You can check the error's properties inside the catch block:

```javascript
function processUserInput(input) {

    if (input === null || input === undefined) {
        throw new TypeError("Input cannot be null or undefined");
    }

    if (typeof input !== "string") {
        throw new TypeError("Input must be a string");
    }

    if (input.trim().length === 0) {
        throw new RangeError("Input cannot be empty");
    }

    if (input.length > 100) {
        throw new RangeError("Input too long (max 100 characters)");
    }

    return input.trim().toUpperCase();
}

// -----------------------------------------------

try {
    const result = processUserInput("");
    console.log("Result:", result);

} catch (error) {

    // Check what kind of error occurred
    if (error instanceof TypeError) {
        console.log("❌ Type Problem:", error.message);
        console.log("Please provide valid input.");

    } else if (error instanceof RangeError) {
        console.log("❌ Range Problem:", error.message);
        console.log("Please adjust the length of your input.");

    } else {
        // Unknown error type — log it for debugging
        console.log("❌ Unexpected error:", error.message);
    }
}

// Output:
// ❌ Range Problem: Input cannot be empty
// Please adjust the length of your input.
```

---

## 4.7 — `try/catch` Does NOT Catch Everything

This is a critical point beginners miss. `try/catch` only catches **synchronous** errors in the try block. It does **not** catch:

### 1. Errors in Asynchronous Code (Callbacks)

```javascript
// ❌ This try/catch does NOT work for callback-based async code
try {
    setTimeout(function() {
        throw new Error("Error inside setTimeout!");  // NOT caught
    }, 1000);
} catch (error) {
    console.log("Caught:", error.message);  // This never runs
}
// The error inside setTimeout is not caught — it crashes the program
```

### 2. Errors in Promise Chains (Without Await)

```javascript
// ❌ This try/catch does NOT catch promise rejections this way
try {
    fetch("bad-url").then(response => {
        throw new Error("Something in the .then()");  // NOT caught by outer try
    });
} catch (error) {
    console.log("Caught:", error.message);  // Doesn't run
}
```

### ✅ For Async Code — Use async/await with try/catch

```javascript
// ✅ This WORKS because await pauses and makes errors synchronous
async function loadData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Fetch failed:", error.message);
        return null;
    }
}
```

We won't go deep into async/await here (it's its own topic), but know that `try/catch` works perfectly with `await`.

---

## 4.8 — Scope Inside try/catch

Variables declared with `let` or `const` inside a `try` block are **not accessible** in the `catch` or after the `try/catch`:

```javascript
try {
    let result = doSomething();   // result is declared inside try
    console.log(result);
} catch (error) {
    console.log(result);   // ❌ ReferenceError: result is not defined
}

// -----------------------------------------------

// ✅ Solution: Declare outside if you need it in multiple places
let result;   // Declared outside

try {
    result = doSomething();   // Assigned inside
    console.log("Success:", result);
} catch (error) {
    console.log("Failed, result is:", result);   // ✅ Accessible (will be undefined)
}

console.log("Final result:", result);   // ✅ Accessible
```

---

## 4.9 — Nested `try/catch` Blocks

You can have `try/catch` inside `try/catch`. This is useful for handling errors at different levels of detail:

```javascript
try {
    console.log("Outer try: starting");

    try {
        console.log("Inner try: risky operation");
        throw new Error("Inner error occurred");
    } catch (innerError) {
        console.log("Inner catch caught:", innerError.message);
        // Handle the inner error — outer try continues normally
    }

    console.log("Outer try: continues after inner try/catch");

} catch (outerError) {
    console.log("Outer catch caught:", outerError.message);
}

// Output:
// Outer try: starting
// Inner try: risky operation
// Inner catch caught: Inner error occurred
// Outer try: continues after inner try/catch
```

---

## 4.10 — ❌ Wrong Way vs. ✅ Right Way: Common `try/catch` Mistakes

### ❌ Mistake 1: Catching errors silently (swallowing errors)

```javascript
// ❌ TERRIBLE — You hide errors and have no idea what went wrong
try {
    riskyOperation();
} catch (error) {
    // Empty catch block — error is ignored completely
}
```

### ✅ Always do something with the error

```javascript
// ✅ At minimum, log it
try {
    riskyOperation();
} catch (error) {
    console.error("Operation failed:", error.message);
    // Notify user, log to server, return fallback, etc.
}
```

---

### ❌ Mistake 2: Wrapping everything in one giant try/catch

```javascript
// ❌ Too broad — you can't tell which line caused which error
try {
    const user = getUser(id);
    const orders = getOrders(user.id);
    const payment = processPayment(orders.total);
    sendConfirmation(user.email, payment.id);
} catch (error) {
    console.log("Something went wrong");   // Which step failed?!
}
```

### ✅ Be specific about what you're catching

```javascript
// ✅ Separate concerns, be precise
let user;
try {
    user = getUser(id);
} catch (error) {
    console.log("Failed to load user:", error.message);
    return;  // Exit if we can't get the user
}

let orders;
try {
    orders = getOrders(user.id);
} catch (error) {
    console.log("Failed to load orders:", error.message);
    return;
}

// etc.
```

---

### ❌ Mistake 3: Using try/catch for normal control flow

```javascript
// ❌ Don't use exceptions for expected conditions
function findUser(users, id) {
    try {
        const user = users[id];
        if (!user) throw new Error("Not found");
        return user;
    } catch (error) {
        return null;
    }
}
// "Not found" is a normal, expected outcome — not an exception
```

### ✅ Use regular conditional logic for expected outcomes

```javascript
// ✅ Use exceptions only for truly unexpected problems
function findUser(users, id) {
    return users[id] || null;   // Simple, clean, no exceptions needed
}
```

---

## 4.11 — A Real-World Example: Safe JSON Parser

Here's a practical utility function you'd actually write in a real project:

```javascript
/**
 * Safely parses a JSON string.
 * Returns the parsed object if successful,
 * or a default value if parsing fails.
 */
function safeJsonParse(jsonString, defaultValue = null) {

    // Validate input type first
    if (typeof jsonString !== "string") {
        console.warn("safeJsonParse: Expected a string, got", typeof jsonString);
        return defaultValue;
    }

    try {
        // Attempt to parse the JSON
        const parsed = JSON.parse(jsonString);
        return parsed;

    } catch (error) {
        // JSON.parse throws SyntaxError on invalid JSON
        console.warn("safeJsonParse: Invalid JSON string -", error.message);
        return defaultValue;
    }
}

// -----------------------------------------------
// Using it:

const validJson = '{"name": "Arjun", "age": 25}';
const invalidJson = '{broken: json}';
const emptyResult = null;

console.log(safeJsonParse(validJson));
// → { name: 'Arjun', age: 25 }

console.log(safeJsonParse(invalidJson));
// → null (with warning logged)

console.log(safeJsonParse(invalidJson, {}));
// → {} (custom default value)

console.log(safeJsonParse(42));
// → null (with warning about wrong type)
```

This pattern — returning a default value on failure instead of crashing — is called **defensive programming** and is extremely common in professional code.

---

⚡ **Try This Yourself — Exercise 4A**

Write a function `safeArrayAccess(arr, index, defaultValue)` that:
1. Returns `arr[index]` if the index is valid
2. Returns `defaultValue` if the index is out of bounds
3. Throws a `TypeError` if `arr` is not an array
4. Uses `try/catch` internally where appropriate

---

⚡ **Try This Yourself — Exercise 4B**

Write a function `safeDivide(a, b)` that:
1. Uses `try/catch`
2. Catches the error thrown when b is 0 (from your Chapter 3 exercise)
3. Returns `null` and logs a friendly message if division isn't possible
4. Returns the result if successful

---

🔥 **Mini Challenge — Chapter 4**

Build a simple **shopping cart item adder** with these functions:

```javascript
// addToCart(cart, item, quantity)
// - cart must be an array (throw TypeError if not)
// - item must be an object with a 'price' property (throw TypeError if not)
// - quantity must be a positive number (throw RangeError if not)
// - Returns the updated cart

// safeAddToCart(cart, item, quantity)
// - Wraps addToCart in try/catch
// - On TypeError: logs "Invalid data type:" + message, returns original cart unchanged
// - On RangeError: logs "Invalid quantity:" + message, returns original cart unchanged
// - On success: returns updated cart
```

---

📝 **Key Takeaways — Chapter 4**

- `try` contains the risky code; `catch` handles errors from that code
- The `catch` parameter holds the **Error object** that was thrown
- Use `instanceof` to check what type of error was caught
- `try/catch` **does not catch async errors** unless you use `async/await`
- Variables declared with `let`/`const` inside `try` aren't accessible in `catch`
- **Never silently swallow errors** — always handle or log them
- Don't use `try/catch` for expected outcomes — use it for genuinely exceptional situations

---

# Chapter 5: The `finally` Block — Code That Always Runs {#chapter-5}

## 5.1 — The Problem `finally` Solves

Imagine you have some **cleanup code** that must run no matter what happens — whether your `try` block succeeded or failed.

Examples of such "cleanup code":
- Closing a database connection
- Closing a file you opened
- Hiding a loading spinner in your UI
- Releasing a lock or resource
- Logging that an operation completed (success or failure)

Without `finally`, you'd have to write that cleanup code twice — once in the `try` block and once in the `catch` block. That's messy and error-prone.

> 💡 **Real-World Analogy:** Imagine you're cooking. Before you cook, you turn on the stove. Whether the cooking is a success or you burn the food, you MUST turn off the stove. The "turn off the stove" action is your `finally` block — it runs regardless of what happens.

---

## 5.2 — The Basic Syntax

```javascript
try {
    // Risky code
} catch (error) {
    // Handle errors
} finally {
    // This ALWAYS runs — whether try succeeded, catch ran, or even if there was no error
}
```

---

## 5.3 — Seeing `finally` in Action

```javascript
function riskyOperation(shouldFail) {

    try {
        console.log("Try block: starting operation");

        if (shouldFail) {
            throw new Error("Operation failed!");
        }

        console.log("Try block: operation succeeded");
        return "Success!";

    } catch (error) {
        console.log("Catch block:", error.message);
        return "Handled error";

    } finally {
        // This runs no matter what
        console.log("Finally block: cleaning up");
    }
}

// Test 1: No error
console.log("--- Test 1: Success ---");
const result1 = riskyOperation(false);
console.log("Returned:", result1);

console.log();

// Test 2: With error
console.log("--- Test 2: Failure ---");
const result2 = riskyOperation(true);
console.log("Returned:", result2);
```

**Output:**
```
--- Test 1: Success ---
Try block: starting operation
Try block: operation succeeded
Finally block: cleaning up
Returned: Success!

--- Test 2: Failure ---
Try block: starting operation
Catch block: Operation failed!
Finally block: cleaning up
Returned: Handled error
```

Notice how `finally` ran in **both** cases.

---

## 5.4 — `finally` Without `catch`

You can use `try/finally` without a `catch` block. This is useful when you want cleanup to happen but you want the error to propagate upward:

```javascript
function processFile(filename) {
    console.log(`Opening file: ${filename}`);

    try {
        // Simulate reading a file that might fail
        if (filename === "bad.txt") {
            throw new Error("File is corrupted!");
        }
        console.log("File read successfully");
        return "file contents here";

    } finally {
        // ALWAYS close the file, even if reading failed
        console.log(`Closing file: ${filename}`);
        // In real code: fileHandle.close()
    }
}

// Test: Calling with a bad file
try {
    processFile("bad.txt");
} catch (error) {
    console.log("Caught outside:", error.message);
}

// Output:
// Opening file: bad.txt
// Closing file: bad.txt      ← finally runs before error propagates
// Caught outside: File is corrupted!
```

The error still propagates — but the cleanup happens first.

---

## 5.5 — The Execution Order: Exactly What Runs When

Let's map out every possible scenario:

### Scenario 1: try succeeds, no error

```
try block runs → try block completes → finally block runs → code after try/catch continues
(catch block is SKIPPED)
```

### Scenario 2: try throws an error, catch handles it

```
try block runs → error thrown → catch block runs → finally block runs → code after continues
```

### Scenario 3: try throws, no catch exists

```
try block runs → error thrown → finally block runs → error propagates up the call stack
```

### Scenario 4: catch block throws another error

```
try block runs → error thrown → catch block runs → catch throws error → 
finally block runs → new error propagates up
```

Let's see Scenario 4 in code:

```javascript
try {
    throw new Error("Original error");

} catch (error) {
    console.log("Catch:", error.message);
    throw new Error("Error thrown inside catch!");  // Catch itself throws

} finally {
    console.log("Finally runs even when catch throws");
}

// Output:
// Catch: Original error
// Finally runs even when catch throws
// (Then the "Error thrown inside catch!" propagates up and crashes)
```

---

## 5.6 — The Surprising Behavior: `finally` Overrides `return`

Here's something that surprises most beginners — if `finally` has a `return` statement, it **overrides** the return value from `try` or `catch`:

```javascript
function surprisingFunction() {
    try {
        return "from try";        // ← This seems like the return value
    } finally {
        return "from finally";    // ← But this OVERRIDES it!
    }
}

console.log(surprisingFunction());   // Output: "from finally"
```

```javascript
function anotherSurprise() {
    try {
        throw new Error("Something broke");
    } catch (error) {
        return "from catch";      // ← This seems like the return value
    } finally {
        return "from finally";    // ← Nope — this wins!
    }
}

console.log(anotherSurprise());   // Output: "from finally"
```

> ⚠️ **Warning:** This behavior (returning from `finally`) is almost always a mistake and can lead to very confusing bugs. As a rule: **avoid using `return` inside `finally`**. Use `finally` for cleanup, not for returning values.

---

## 5.7 — Practical `finally` Examples

### Example 1: UI Loading Spinner

```javascript
async function loadUserProfile(userId) {

    // Show loading state in the UI
    showSpinner();    // Turns on the loading animation

    try {
        const response = await fetch(`/api/users/${userId}`);
        const user = await response.json();
        displayUser(user);    // Show the user data
        return user;

    } catch (error) {
        displayError("Failed to load profile");   // Show error message
        return null;

    } finally {
        // Hide the spinner NO MATTER WHAT — success or failure
        hideSpinner();    // This MUST always run
    }
}
```

Without `finally`, you'd need to call `hideSpinner()` in both the `try` and `catch` blocks — and if you forgot one, the spinner would get stuck.

---

### Example 2: Database Connection Management

```javascript
function queryDatabase(sql) {

    const connection = openDatabaseConnection();   // Open connection
    console.log("Database connection opened");

    try {
        const results = connection.execute(sql);
        console.log("Query succeeded, got", results.length, "rows");
        return results;

    } catch (error) {
        console.error("Query failed:", error.message);
        throw error;   // Re-throw so the caller knows it failed

    } finally {
        // ALWAYS close the connection — open connections waste resources
        connection.close();
        console.log("Database connection closed");
    }
}
```

---

### Example 3: Performance Timing

```javascript
function measurePerformance(operationName, operation) {

    const startTime = Date.now();   // Record start time

    try {
        console.log(`Starting: ${operationName}`);
        const result = operation();   // Run the operation
        console.log(`Success: ${operationName}`);
        return result;

    } catch (error) {
        console.error(`Failed: ${operationName} - ${error.message}`);
        throw error;

    } finally {
        // Always record how long the operation took
        const duration = Date.now() - startTime;
        console.log(`Duration: ${operationName} took ${duration}ms`);
    }
}

// Usage:
measurePerformance("JSON Parsing", () => {
    return JSON.parse('{"name": "Arjun"}');
});

// Output:
// Starting: JSON Parsing
// Success: JSON Parsing
// Duration: JSON Parsing took 1ms
```

---

## 5.8 — `try` / `catch` / `finally` Together

The complete picture — all three blocks working together:

```javascript
function readAndProcessFile(filename) {

    let fileHandle = null;  // Track the resource outside the blocks

    try {
        console.log("Opening file:", filename);
        fileHandle = openFile(filename);   // Might fail if file doesn't exist

        console.log("Reading file content");
        const content = fileHandle.read();   // Might fail if file is corrupted

        console.log("Processing content");
        const processed = processContent(content);   // Might fail if content is invalid

        return processed;

    } catch (error) {
        console.error("Operation failed:", error.message);

        // Determine what kind of failure and respond
        if (error.code === "FILE_NOT_FOUND") {
            return null;  // Return null for missing files
        }

        throw error;  // Re-throw other unexpected errors

    } finally {
        // Always clean up the file handle if we opened one
        if (fileHandle !== null) {
            fileHandle.close();
            console.log("File handle closed");
        }
    }
}
```

---

⚡ **Try This Yourself — Exercise 5A**

Write a function `safeMultiply(a, b)` that:
1. Logs "Starting multiplication" at the beginning
2. Throws a TypeError if either argument is not a number
3. Returns the product if both are numbers
4. Uses `finally` to ALWAYS log "Multiplication operation complete" at the end

---

⚡ **Try This Yourself — Exercise 5B**

Build a `timedOperation(fn)` function that:
1. Records a start time before running `fn()`
2. Uses `try/catch/finally`
3. In `catch`: logs the error message
4. In `finally`: logs how many milliseconds the operation took
5. Re-throws any error after logging it

---

🔥 **Mini Challenge — Chapter 5**

Simulate a **login system**:

```javascript
function login(username, password) {
    // Simulate "connecting to server" with a flag variable
    let serverConnected = false;

    try {
        // 1. Connect to server (set serverConnected = true)
        // 2. Throw TypeError if username or password are not strings
        // 3. Throw Error("Invalid credentials") if username !== "admin" 
        //    or password !== "password123"
        // 4. Return { success: true, token: "abc123" } on success

    } catch (error) {
        // Handle TypeError and credential errors differently
        // Return { success: false, message: error.message }

    } finally {
        // If server was connected, "disconnect" it (log a message)
    }
}
```

---

📝 **Key Takeaways — Chapter 5**

- `finally` runs **always** — whether try succeeds, catch runs, or errors propagate
- Use `finally` for **cleanup operations** — closing connections, hiding spinners, releasing resources
- You can use `try/finally` **without** `catch` when you want errors to propagate but still need cleanup
- `finally` executes **before** a return value is handed back to the caller
- A `return` in `finally` **overrides** any return in `try` or `catch` — avoid this
- `finally` even runs if `catch` itself throws an error

---

# Chapter 6: Error Objects — The Anatomy of an Error {#chapter-6}

## 6.1 — What Is an Error Object?

When something goes wrong in JavaScript, the language doesn't just stop with a vague "error happened" signal. It creates a rich, detailed **Error object** — a structured container of information about what went wrong.

This is what you receive in the `catch` block. This is what you create with `new Error()`. Understanding its structure gives you the power to:

- Display meaningful error messages to users
- Log detailed information for debugging
- React differently to different types of errors
- Create your own custom error types

> 💡 **Analogy:** Think of an Error object like a medical diagnosis report. It has: the type of condition (name), the description (message), the patient history of how it happened (stack trace), and any custom notes the doctor added (custom properties).

---

## 6.2 — Creating an Error Object

```javascript
// Creating an Error object manually (without throwing it)
const myError = new Error("Something went wrong");

// Look at what's inside:
console.log(myError.name);      // "Error"
console.log(myError.message);   // "Something went wrong"
console.log(myError.stack);     // "Error: Something went wrong\n    at <anonymous>:..."
```

You can create Error objects without throwing them. This is useful when you want to inspect or log them, or pass them as arguments.

---

## 6.3 — The Three Standard Properties

Every Error object has these three standard properties:

### Property 1: `name`

The **type** of the error. For the base Error class, this is always `"Error"`. Subclasses have different names (`"TypeError"`, `"RangeError"`, etc.).

```javascript
const err = new Error("Something broke");
console.log(err.name);   // "Error"

const typeErr = new TypeError("Wrong type");
console.log(typeErr.name);   // "TypeError"
```

### Property 2: `message`

The **human-readable description** of what went wrong. This is the string you pass to `new Error()`.

```javascript
const err = new Error("The user with ID 42 was not found in the database");
console.log(err.message);
// "The user with ID 42 was not found in the database"
```

Write good error messages! They're the first thing you look at when debugging.

### Property 3: `stack`

The **stack trace** — a string showing the sequence of function calls that led to the error. Invaluable for debugging.

```javascript
function third() {
    throw new Error("Error from third()");
}

function second() {
    third();
}

function first() {
    second();
}

try {
    first();
} catch (error) {
    console.log(error.stack);
}

// Output (approximate):
// Error: Error from third()
//     at third (<anonymous>:2:11)
//     at second (<anonymous>:6:5)
//     at first (<anonymous>:10:5)
//     at <anonymous>:14:5
```

Reading the stack trace from top to bottom gives you the exact call chain: the error originated in `third()`, which was called by `second()`, called by `first()`.

---

## 6.4 — The `cause` Property (Modern JavaScript)

Introduced in ES2022, the `cause` property lets you chain errors — preserving the original cause while wrapping it in a higher-level error:

```javascript
function connectToDatabase() {
    throw new Error("Connection refused on port 5432");
}

function initializeApp() {
    try {
        connectToDatabase();
    } catch (originalError) {
        // Create a new error that wraps the original
        throw new Error("App initialization failed", {
            cause: originalError   // Preserve the original error as 'cause'
        });
    }
}

try {
    initializeApp();
} catch (error) {
    console.log("Error:", error.message);
    // → "App initialization failed"

    console.log("Caused by:", error.cause.message);
    // → "Connection refused on port 5432"
}
```

This is incredibly useful for debugging — you can trace an error through multiple layers without losing the original information.

---

## 6.5 — Adding Custom Properties to Errors

Error objects are just JavaScript objects. You can add any properties you want:

```javascript
// Creating an error with extra information
const error = new Error("Payment failed");
error.statusCode = 402;            // HTTP status code
error.transactionId = "TXN-9876"; // Reference for logging
error.retryable = true;            // Can this operation be retried?
error.timestamp = new Date();      // When did this happen?

console.log(error.message);         // "Payment failed"
console.log(error.statusCode);      // 402
console.log(error.transactionId);   // "TXN-9876"
console.log(error.retryable);       // true
```

---

## 6.6 — Using Error Properties in `catch`

Here's how to use all these properties together:

```javascript
function fetchUserData(userId) {
    if (typeof userId !== "number") {
        const err = new TypeError("userId must be a number");
        err.received = typeof userId;   // What we actually got
        err.expected = "number";        // What we wanted
        throw err;
    }

    if (userId <= 0) {
        const err = new RangeError("userId must be positive");
        err.received = userId;
        throw err;
    }

    // Simulate a "not found" case
    if (userId > 1000) {
        const err = new Error("User not found");
        err.statusCode = 404;
        err.userId = userId;
        throw err;
    }

    return { id: userId, name: "Arjun", email: "arjun@example.com" };
}

// -----------------------------------------------

function displayUserError(error) {
    console.group("❌ Error Details");
    console.log("Type:", error.name);
    console.log("Message:", error.message);

    if (error.statusCode) {
        console.log("Status Code:", error.statusCode);
    }
    if (error.userId) {
        console.log("Attempted User ID:", error.userId);
    }
    if (error.received) {
        console.log("Received:", error.received, "| Expected:", error.expected);
    }
    console.groupEnd();
}

// -----------------------------------------------

// Test cases:
const testCases = [42, "hello", -5, 9999];

for (const userId of testCases) {
    try {
        const user = fetchUserData(userId);
        console.log("✅ Found user:", user.name);
    } catch (error) {
        displayUserError(error);
    }
    console.log("---");
}
```

---

## 6.7 — The Stack Trace: Reading It Like a Pro

The stack trace is your most powerful debugging tool. Let's learn to read it:

```javascript
function level3() {
    undeclaredVariable;  // ReferenceError
}

function level2() {
    level3();
}

function level1() {
    level2();
}

try {
    level1();
} catch (error) {
    console.log(error.stack);
}

/*
Output:
ReferenceError: undeclaredVariable is not defined
    at level3 (example.js:2:5)       ← Error originated HERE
    at level2 (example.js:6:5)       ← Called from here
    at level1 (example.js:10:5)      ← Called from here
    at Object.<anonymous> (example.js:14:5)   ← Starting point
*/
```

**How to read it:**
- Line 1: Error type and message
- Each subsequent line: a stack frame showing function name, file, line number, and column

Read from **top to bottom** to trace the error's origin through the call chain.

---

## 6.8 — Inspecting All Error Properties

Here's a utility function to display everything about an error:

```javascript
function inspectError(error) {
    console.log("=".repeat(40));
    console.log("ERROR INSPECTION REPORT");
    console.log("=".repeat(40));
    console.log("Name:        ", error.name);
    console.log("Message:     ", error.message);
    console.log("Is Error:    ", error instanceof Error);
    console.log("Constructor: ", error.constructor.name);

    // List all custom properties
    const standardProps = ["name", "message", "stack"];
    const customProps = Object.keys(error).filter(k => !standardProps.includes(k));

    if (customProps.length > 0) {
        console.log("\nCustom Properties:");
        customProps.forEach(prop => {
            console.log(`  ${prop}: ${error[prop]}`);
        });
    }

    console.log("\nStack Trace:");
    console.log(error.stack);
    console.log("=".repeat(40));
}

// Testing it:
const err = new RangeError("Value out of range");
err.min = 0;
err.max = 100;
err.received = 250;

inspectError(err);
```

---

⚡ **Try This Yourself — Exercise 6A**

Create a function `createNetworkError(url, statusCode, message)` that:
1. Creates a new `Error` object with the given `message`
2. Adds `url`, `statusCode`, and `timestamp` (current date) as custom properties
3. Returns the error object (don't throw it — just return it)

Then write code that throws this error and catches it, logging all its properties.

---

📝 **Key Takeaways — Chapter 6**

- Error objects have three standard properties: `name`, `message`, and `stack`
- The `stack` property is a **stack trace** showing where the error occurred and the call chain
- The `cause` property (ES2022) lets you **chain errors** — preserving original causes
- You can add **custom properties** to any Error object
- Read stack traces **top to bottom** — the top line is where the error originated
- Error objects are regular JavaScript objects — you can inspect, modify, and extend them

---

# Chapter 7: Built-In Error Types — JavaScript's Error Family {#chapter-7}

## 7.1 — Why Different Error Types?

Imagine if every error was just called "Error" — you'd have no idea if your code failed because of a wrong data type, an undefined variable, a broken URL, or an out-of-range number. You'd have to read the message string and guess.

JavaScript has **seven built-in error types**, each for a specific category of problem. Using the right error type makes your code:

- **Self-documenting** — the error name tells you what category of problem occurred
- **Catchable by type** — you can use `instanceof` to handle different errors differently
- **Consistent with the ecosystem** — other developers know exactly what went wrong

---

## 7.2 — The Error Family Tree

```
Error (base class)
├── SyntaxError
├── ReferenceError
├── TypeError
├── RangeError
├── URIError
└── EvalError
```

All specific error types **inherit from** the base `Error` class. They all have `name`, `message`, and `stack`. They just have different `name` values and are thrown in different situations.

---

## 7.3 — `Error` (The Base Class)

The generic error class. Use this when no more specific type applies.

```javascript
// JavaScript throws it: rarely (mostly used by developers manually)
// You throw it: when something is wrong but no specific type fits

throw new Error("The configuration file is missing");
throw new Error("Operation cancelled by user");
throw new Error("Unexpected state encountered");
```

---

## 7.4 — `SyntaxError`

Thrown when code has a **syntax/format error**. You'll see this most often from `JSON.parse()` with invalid JSON.

```javascript
// JavaScript throws it automatically:
JSON.parse("{bad: json}");
// → SyntaxError: Expected property name or '}' in JSON at position 1

eval("function (");
// → SyntaxError: Unexpected token ')'

// When you'd throw it manually:
function parseConfig(configString) {
    if (!configString.startsWith("{")) {
        throw new SyntaxError("Config must be a valid JSON object starting with '{'");
    }
    return JSON.parse(configString);
}
```

---

## 7.5 — `ReferenceError`

Thrown when you try to **use a variable that doesn't exist** (hasn't been declared).

```javascript
// JavaScript throws it automatically:
console.log(undeclaredVariable);
// → ReferenceError: undeclaredVariable is not defined

// Another common case:
function test() {
    console.log(x);  // x not declared in scope
}
test();
// → ReferenceError: x is not defined

// When you'd throw it manually:
// (Rare — usually happens automatically)
function getConfig(key) {
    const config = loadConfig();
    if (!(key in config)) {
        throw new ReferenceError(`Config key "${key}" is not defined`);
    }
    return config[key];
}
```

---

## 7.6 — `TypeError`

The most common error you'll encounter. Thrown when a **value is not the expected type**, or when you try to do something with a value that doesn't support it.

```javascript
// JavaScript throws it automatically:
null.toString();
// → TypeError: Cannot read properties of null (reading 'toString')

undefined.length;
// → TypeError: Cannot read properties of undefined (reading 'length')

42();
// → TypeError: 42 is not a function

const obj = { a: 1 };
obj.notAFunction();
// → TypeError: obj.notAFunction is not a function

// When YOU throw it:
function add(a, b) {
    if (typeof a !== "number") {
        throw new TypeError(`Expected a number for 'a', got ${typeof a}`);
    }
    if (typeof b !== "number") {
        throw new TypeError(`Expected a number for 'b', got ${typeof b}`);
    }
    return a + b;
}
```

---

## 7.7 — `RangeError`

Thrown when a value is **outside an acceptable range**.

```javascript
// JavaScript throws it automatically:
new Array(-1);
// → RangeError: Invalid array length

(1.5).toFixed(200);
// → RangeError: toFixed() digits argument must be between 0 and 100

function recursiveForever() {
    return recursiveForever();
}
recursiveForever();
// → RangeError: Maximum call stack size exceeded

// When YOU throw it:
function setVolume(level) {
    if (level < 0 || level > 100) {
        throw new RangeError(`Volume must be between 0 and 100, got: ${level}`);
    }
    return level;
}

function setAge(age) {
    if (age < 0 || age > 150) {
        throw new RangeError(`Age must be between 0 and 150, got: ${age}`);
    }
    return age;
}
```

---

## 7.8 — `URIError`

Thrown when **URI encoding/decoding functions** are used incorrectly.

```javascript
// JavaScript throws it automatically:
decodeURIComponent("%");
// → URIError: URI malformed

decodeURI("%");
// → URIError: URI malformed

// These are rare in everyday code but happen when working with URLs
function safeDecode(uri) {
    try {
        return decodeURIComponent(uri);
    } catch (error) {
        if (error instanceof URIError) {
            throw new URIError(`Invalid URI component: "${uri}"`);
        }
        throw error;
    }
}
```

---

## 7.9 — `EvalError`

Historically thrown by `eval()`. In modern JavaScript, `eval()` itself doesn't throw `EvalError` anymore — but the class still exists for backward compatibility.

```javascript
// Modern JavaScript: eval() throws SyntaxError, not EvalError
// EvalError exists but is rarely encountered in practice
// You could throw it manually if you detect misuse of eval:

function safeEval(code) {
    if (code.includes("rm -rf")) {
        throw new EvalError("Potentially dangerous code detected");
    }
    // Note: avoid eval() in production code entirely
}
```

> 💡 **Practical Note:** In real projects, you'll mostly deal with `TypeError`, `RangeError`, `SyntaxError`, and `ReferenceError`. `URIError` and `EvalError` are rare.

---

## 7.10 — Catching Specific Error Types with `instanceof`

The real power of having multiple error types is being able to **handle them differently**:

```javascript
function processInput(input) {
    if (typeof input !== "string") {
        throw new TypeError("Input must be a string");
    }
    if (input.length > 1000) {
        throw new RangeError("Input exceeds maximum length of 1000 characters");
    }
    if (!input.trim()) {
        throw new Error("Input cannot be empty or whitespace");
    }
    return input.trim().toLowerCase();
}

// -----------------------------------------------

function handleInput(input) {
    try {
        const result = processInput(input);
        console.log("✅ Processed:", result);

    } catch (error) {

        if (error instanceof TypeError) {
            // Wrong type provided
            console.log("🔴 Type Error: Please provide a text value");
            console.log("   Technical details:", error.message);

        } else if (error instanceof RangeError) {
            // Value out of acceptable range
            console.log("🟡 Too Long: Please shorten your input");
            console.log("   Technical details:", error.message);

        } else if (error instanceof Error) {
            // Generic error — empty input, etc.
            console.log("🟠 Validation Error:", error.message);

        } else {
            // Something completely unexpected
            console.log("⚫ Unknown Error:", error);
        }
    }
}

// Test different cases:
handleInput("Hello World");      // ✅ Processed
handleInput(12345);              // 🔴 Type Error
handleInput("a".repeat(2000));   // 🟡 Too Long
handleInput("   ");              // 🟠 Validation Error
```

---

## 7.11 — `instanceof` vs. Checking `error.name`

There are two ways to check error types:

```javascript
// Method 1: instanceof (preferred)
if (error instanceof TypeError) { ... }

// Method 2: Checking name property (less reliable)
if (error.name === "TypeError") { ... }
```

**Why `instanceof` is preferred:**
- Works correctly with class inheritance
- Can't be faked accidentally
- Is the standard approach in the JavaScript ecosystem

**When `error.name` might be useful:**
- When dealing with custom errors that don't properly extend Error
- When an error crossed a frame boundary (different window/iframe)
- When working with serialized error objects (from JSON)

---

## 7.12 — A Complete Error Type Reference Table

| Error Type | Thrown When | Common Example |
|---|---|---|
| `Error` | Generic problems | Your own custom conditions |
| `SyntaxError` | Invalid format/syntax | `JSON.parse("bad")` |
| `ReferenceError` | Undefined variable used | `console.log(x)` (x not declared) |
| `TypeError` | Wrong type used | `null.property`, calling non-function |
| `RangeError` | Value outside valid range | `new Array(-1)`, stack overflow |
| `URIError` | Bad URI encoding | `decodeURIComponent("%")` |
| `EvalError` | `eval()` misuse | (very rare in modern JS) |

---

⚡ **Try This Yourself — Exercise 7A**

Write a function `createUser(name, age, email)` that throws specific error types:
- `TypeError` if `name` is not a string
- `TypeError` if `age` is not a number
- `TypeError` if `email` is not a string
- `RangeError` if `age` is less than 13 or greater than 120
- `SyntaxError` if `email` doesn't contain `@`
- Returns the user object `{ name, age, email }` if all valid

Then write a `safeCreateUser` function that catches and handles each error type with a specific, user-friendly message.

---

🔥 **Mini Challenge — Chapter 7**

Build a **simple calculator** function `calculate(a, operator, b)` that:
1. Throws `TypeError` if `a` or `b` are not numbers
2. Throws `TypeError` if `operator` is not a string
3. Throws `RangeError` if operator is not one of `+`, `-`, `*`, `/`
4. Throws `RangeError` with message "Division by zero" if `operator` is `/` and `b` is `0`
5. Returns the correct result otherwise

Write a `safeCalculate` wrapper that catches each error type and returns appropriate fallback responses.

---

📝 **Key Takeaways — Chapter 7**

- JavaScript has **7 built-in error types**, all inheriting from `Error`
- `TypeError` — wrong type; `RangeError` — out of range; `SyntaxError` — format error; `ReferenceError` — undefined variable
- Use `instanceof` to check error types in catch blocks
- Using the **right error type** makes code self-documenting and catchable by type
- `TypeError` and `RangeError` are the most commonly thrown manually
- `instanceof` is preferred over checking `error.name`

---

# Chapter 8: Custom Error Classes — Building Your Own Error Types {#chapter-8}

## 8.1 — Why Custom Errors?

JavaScript's built-in error types (`TypeError`, `RangeError`, etc.) cover general programming mistakes. But what about **domain-specific errors** in your application?

Consider:
- A banking app: `InsufficientFundsError`, `AccountFrozenError`, `DailyLimitExceededError`
- An e-commerce app: `OutOfStockError`, `InvalidCouponError`, `ShippingUnavailableError`
- An authentication system: `InvalidCredentialsError`, `TokenExpiredError`, `AccountLockedError`

You *could* use the generic `Error` class for all of these and put everything in the message string. But custom error classes let you:

1. **Catch specific errors** — `catch(err) { if (err instanceof InsufficientFundsError) }`
2. **Add structured data** — store amount, account ID, limit, etc. as typed properties
3. **Self-document your system** — the error name tells a story
4. **Separate concerns** — different parts of your app handle their own error types

> 💡 **Analogy:** Imagine a hospital. Instead of saying "something is wrong with the patient" for every condition, doctors use specific diagnoses: "appendicitis," "hypertension," "fracture." Each diagnosis implies specific treatment protocols. Custom errors are your specific diagnoses.

---

## 8.2 — Creating a Custom Error Class

Custom errors are created by **extending the built-in Error class** using ES6 class syntax:

```javascript
// Creating a custom error class
class ValidationError extends Error {

    constructor(message) {
        super(message);             // Call the parent Error class constructor
        this.name = "ValidationError";  // Set the name to our custom name
    }
}

// -----------------------------------------------
// Using it:

function validateAge(age) {
    if (age < 0 || age > 150) {
        throw new ValidationError(`Invalid age: ${age}. Must be between 0 and 150`);
    }
    return age;
}

try {
    validateAge(-5);
} catch (error) {
    console.log(error.name);      // "ValidationError"
    console.log(error.message);   // "Invalid age: -5. Must be between 0 and 150"
    console.log(error instanceof ValidationError);  // true
    console.log(error instanceof Error);            // true (it extends Error!)
}
```

**The key lines explained:**
- `class ValidationError extends Error` — inherits everything from Error
- `super(message)` — calls Error's constructor to set the message and stack trace
- `this.name = "ValidationError"` — overrides the default "Error" name

---

## 8.3 — The `extends` and `super` Pattern in Depth

```javascript
class CustomError extends Error {
    constructor(message) {
        // ✅ ALWAYS call super() first — it sets message and stack
        super(message);

        // ✅ ALWAYS set this.name — otherwise it stays "Error"
        this.name = this.constructor.name;
        // this.constructor.name automatically gets the class name
        // For CustomError, this.constructor.name === "CustomError"
    }
}
```

Using `this.constructor.name` instead of hardcoding the string is a best practice — it means if you rename the class, the name property updates automatically.

---

## 8.4 — Adding Custom Properties

The real power: adding structured data to your errors:

```javascript
class ValidationError extends Error {

    constructor(message, field, receivedValue) {
        super(message);
        this.name = "ValidationError";

        // Custom properties specific to validation errors
        this.field = field;               // Which field failed validation?
        this.receivedValue = receivedValue;  // What value was provided?
        this.timestamp = new Date();       // When did this happen?
    }
}

// -----------------------------------------------

function validateUserForm(userData) {
    if (!userData.email || !userData.email.includes("@")) {
        throw new ValidationError(
            "Email address is invalid",
            "email",           // field name
            userData.email     // received value
        );
    }

    if (!userData.age || userData.age < 18) {
        throw new ValidationError(
            "Must be at least 18 years old",
            "age",
            userData.age
        );
    }
}

// -----------------------------------------------

const formData = { email: "notanemail", age: 15 };

try {
    validateUserForm(formData);
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(`Validation failed on field: "${error.field}"`);
        console.log(`Problem: ${error.message}`);
        console.log(`You provided: ${error.receivedValue}`);
        console.log(`Timestamp: ${error.timestamp}`);
    }
}

// Output:
// Validation failed on field: "email"
// Problem: Email address is invalid
// You provided: notanemail
// Timestamp: 2026-03-25T...
```

---

## 8.5 — A Family of Custom Errors

Build a hierarchy of custom errors for a domain:

```javascript
// Base class for all app-specific errors
class AppError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode;
        this.timestamp = new Date().toISOString();
        this.isOperational = true;  // This is an expected, handled error
    }
}

// -----------------------------------------------
// Specific error types extending AppError

class ValidationError extends AppError {
    constructor(message, field) {
        super(message, 400);  // 400 = Bad Request
        this.field = field;
    }
}

class AuthenticationError extends AppError {
    constructor(message) {
        super(message, 401);  // 401 = Unauthorized
    }
}

class AuthorizationError extends AppError {
    constructor(message, requiredRole) {
        super(message, 403);  // 403 = Forbidden
        this.requiredRole = requiredRole;
    }
}

class NotFoundError extends AppError {
    constructor(resource, id) {
        super(`${resource} with ID ${id} was not found`, 404);
        this.resource = resource;
        this.resourceId = id;
    }
}

class RateLimitError extends AppError {
    constructor(retryAfter) {
        super("Too many requests. Please slow down.", 429);
        this.retryAfter = retryAfter;  // Seconds until retry is allowed
    }
}

// -----------------------------------------------
// Using the hierarchy

function getUser(userId, currentUser) {

    // Check if logged in
    if (!currentUser) {
        throw new AuthenticationError("You must be logged in to view user data");
    }

    // Check if user exists
    const user = database.find(u => u.id === userId);
    if (!user) {
        throw new NotFoundError("User", userId);
    }

    // Check permissions (only admin can view other users)
    if (userId !== currentUser.id && currentUser.role !== "admin") {
        throw new AuthorizationError(
            "You can only view your own profile",
            "admin"
        );
    }

    return user;
}

// -----------------------------------------------
// Central error handler

function handleError(error) {

    if (error instanceof ValidationError) {
        console.log(`400 Validation Error on field "${error.field}": ${error.message}`);

    } else if (error instanceof AuthenticationError) {
        console.log(`401 Auth Error: ${error.message}`);
        // Redirect to login page

    } else if (error instanceof AuthorizationError) {
        console.log(`403 Forbidden: ${error.message}`);
        console.log(`Required role: ${error.requiredRole}`);

    } else if (error instanceof NotFoundError) {
        console.log(`404 Not Found: ${error.message}`);
        console.log(`Resource: ${error.resource}, ID: ${error.resourceId}`);

    } else if (error instanceof RateLimitError) {
        console.log(`429 Rate Limit: ${error.message}`);
        console.log(`Retry after: ${error.retryAfter} seconds`);

    } else if (error instanceof AppError) {
        // Any other AppError we didn't specifically handle
        console.log(`${error.statusCode} App Error: ${error.message}`);

    } else {
        // Completely unexpected — programming error, not user/operational error
        console.error("🔴 UNEXPECTED ERROR:", error);
    }
}
```

---

## 8.6 — The `instanceof` Chain with Custom Errors

Because custom errors extend other errors, `instanceof` checks work at every level:

```javascript
const err = new NotFoundError("User", 42);

console.log(err instanceof NotFoundError);   // true
console.log(err instanceof AppError);        // true (extends AppError)
console.log(err instanceof Error);           // true (AppError extends Error)
console.log(err instanceof TypeError);       // false (unrelated branch)

console.log(err.name);                       // "NotFoundError"
console.log(err.statusCode);                 // 404
console.log(err.resource);                   // "User"
console.log(err.resourceId);                 // 42
console.log(err.message);                    // "User with ID 42 was not found"
```

---

## 8.7 — Custom Errors with Static Factory Methods

Sometimes you want convenient ways to create common error variations:

```javascript
class NetworkError extends AppError {

    constructor(message, statusCode, url) {
        super(message, statusCode);
        this.url = url;
    }

    // Static factory methods for common scenarios
    static timeout(url) {
        const err = new NetworkError(
            `Request to ${url} timed out`,
            408,  // Request Timeout
            url
        );
        err.reason = "timeout";
        return err;
    }

    static offline() {
        return new NetworkError(
            "No internet connection available",
            0,    // No status code for offline
            null
        );
    }

    static serverError(url, statusCode) {
        return new NetworkError(
            `Server error at ${url}: status ${statusCode}`,
            statusCode,
            url
        );
    }
}

// -----------------------------------------------
// Clean usage with factory methods:
throw NetworkError.timeout("https://api.example.com/users");
throw NetworkError.offline();
throw NetworkError.serverError("https://api.example.com/data", 503);
```

---

## 8.8 — Serializing Custom Errors to JSON

Custom errors often need to be converted to JSON (for logging, API responses, etc.). But `JSON.stringify(error)` doesn't work well on Error objects by default:

```javascript
const err = new ValidationError("Invalid email", "email");
console.log(JSON.stringify(err));   // "{}  ← Empty! Not what we want

// -----------------------------------------------
// Solution: Add a toJSON method

class ValidationError extends AppError {
    constructor(message, field) {
        super(message, 400);
        this.field = field;
    }

    toJSON() {
        return {
            name: this.name,
            message: this.message,
            field: this.field,
            statusCode: this.statusCode,
            timestamp: this.timestamp
        };
    }
}

const err = new ValidationError("Invalid email", "email");
console.log(JSON.stringify(err.toJSON(), null, 2));
// {
//   "name": "ValidationError",
//   "message": "Invalid email",
//   "field": "email",
//   "statusCode": 400,
//   "timestamp": "2026-03-25T..."
// }
```

---

⚡ **Try This Yourself — Exercise 8A**

Create a custom error hierarchy for a banking application:
- `BankError` (base, with `accountId` and `timestamp`)
- `InsufficientFundsError` (extends BankError, with `balance` and `requested` amount)
- `AccountFrozenError` (extends BankError, with `reason` why it's frozen)
- `InvalidTransactionError` (extends BankError, with `transactionType`)

Write a `transfer(fromAccount, toAccount, amount)` function that throws the appropriate error types.

---

🔥 **Mini Challenge — Chapter 8**

Build a complete `FormValidator` system:

1. Create a `FormError` base class with `form` name and `timestamp`
2. Create `RequiredFieldError` (missing field name)
3. Create `FormatError` (field name + expected format description)
4. Create `LengthError` (field name + min + max + actual length)

Write a `validateRegistrationForm({ username, email, password, age })` function that uses these custom errors. Wrap it in a handler that catches each type and displays a user-friendly message.

---

📝 **Key Takeaways — Chapter 8**

- Custom error classes are created with `class MyError extends Error`
- Always call `super(message)` first and set `this.name`
- Add **custom properties** to carry structured error data
- Build **error hierarchies** — domain-specific base classes with specific subtypes
- Use `instanceof` to check types at any level of the hierarchy
- Add `toJSON()` for clean serialization
- Static factory methods provide clean, readable ways to create common errors

---

# Chapter 9: Nested try/catch and Re-throwing Errors {#chapter-9}

## 9.1 — Re-throwing Errors: Passing the Buck Up

Sometimes in a `catch` block, you receive an error but you realize: *"I can't fully handle this here. The calling code needs to know about this."*

The solution is to **re-throw** the error — catch it, do what you can (maybe log it, add context), and then throw it again so it continues propagating:

```javascript
function step3() {
    throw new Error("Database connection failed");
}

function step2() {
    try {
        step3();
    } catch (error) {
        // I can log it here, add context, etc.
        console.log("step2 caught an error:", error.message);

        // But I can't recover from it — re-throw it
        throw error;   // ← Re-throwing the same error
    }
}

function step1() {
    try {
        step2();
    } catch (error) {
        // This catches the re-thrown error from step2
        console.log("step1 caught the error:", error.message);
        // I CAN recover here — return a default value
    }
}

step1();

// Output:
// step2 caught an error: Database connection failed
// step1 caught the error: Database connection failed
```

---

## 9.2 — Re-throwing with Added Context (Error Wrapping)

Often you want to add context as an error travels up:

```javascript
function loadUserSettings(userId) {
    try {
        const rawData = readFile(`settings_${userId}.json`);
        return JSON.parse(rawData);
    } catch (error) {
        // Wrap the original error with more context
        const wrappedError = new Error(
            `Failed to load settings for user ${userId}: ${error.message}`,
            { cause: error }  // Preserve original as 'cause'
        );
        wrappedError.userId = userId;
        throw wrappedError;
    }
}

function initializeUser(userId) {
    try {
        const settings = loadUserSettings(userId);
        applySettings(settings);
    } catch (error) {
        const appError = new Error(
            `User initialization failed for ${userId}: ${error.message}`,
            { cause: error }
        );
        throw appError;
    }
}

try {
    initializeUser(42);
} catch (finalError) {
    console.log("Final error:", finalError.message);
    console.log("Caused by:", finalError.cause.message);
    console.log("Original cause:", finalError.cause.cause?.message);
}
```

---

## 9.3 — Selective Re-throwing (Handle Some, Re-throw Others)

A very common pattern: catch errors you can handle, re-throw those you can't:

```javascript
function fetchData(url) {
    try {
        return makeRequest(url);
    } catch (error) {

        // Handle network errors gracefully
        if (error instanceof NetworkError) {
            console.warn("Network issue, returning cached data");
            return getCachedData(url);   // Recover with cache
        }

        // Handle rate limiting with retry info
        if (error instanceof RateLimitError) {
            console.warn(`Rate limited. Retry after ${error.retryAfter}s`);
            return null;   // Caller knows to retry
        }

        // For anything else — re-throw, we can't handle it
        throw error;   // 👈 Re-throwing unknown errors
    }
}

// The calling code:
try {
    const data = fetchData("https://api.example.com/users");
    processData(data);
} catch (error) {
    // This only catches errors that fetchData couldn't handle
    console.error("Unrecoverable error:", error.message);
}
```

---

## 9.4 — Re-throwing as a Different Error Type

Sometimes you want to convert one error type to another:

```javascript
function parseUserData(rawData) {
    try {
        return JSON.parse(rawData);
    } catch (error) {
        // JSON.parse throws a SyntaxError
        // But from our caller's perspective, this is a ValidationError

        if (error instanceof SyntaxError) {
            throw new ValidationError(
                `User data is malformed and cannot be parsed: ${error.message}`,
                "rawData"
            );
        }

        throw error;  // Re-throw anything else as-is
    }
}

try {
    const user = parseUserData("{invalid json}");
} catch (error) {
    if (error instanceof ValidationError) {
        // We can handle this with a user-friendly message
        console.log("Please check the data format:", error.message);
    } else {
        throw error;
    }
}
```

---

## 9.5 — Nested try/catch: Different Levels of Error Handling

Complex operations often need error handling at multiple levels:

```javascript
async function processOrder(orderId) {

    let order = null;
    let user = null;
    let payment = null;

    // Level 1: Fetch the order
    try {
        order = await getOrder(orderId);
    } catch (error) {
        throw new NotFoundError("Order", orderId);  // Convert to app error
    }

    // Level 2: Fetch the user (can fail independently)
    try {
        user = await getUser(order.userId);
    } catch (error) {
        if (error instanceof NotFoundError) {
            throw new Error(`Order ${orderId} references a deleted user`);
        }
        throw error;  // Re-throw unexpected errors
    }

    // Level 3: Process payment (can fail independently)
    try {
        payment = await processPayment(order.total, user.paymentMethod);
    } catch (error) {

        try {
            // Try to reverse any partial charges
            await refundPartialCharge(orderId);
            console.log("Partial charge reversed successfully");
        } catch (refundError) {
            // Log but don't throw — original payment error is more important
            console.error("Failed to reverse partial charge:", refundError.message);
        }

        throw error;  // Re-throw the original payment error
    }

    return { order, user, payment };
}
```

---

## 9.6 — The "Finally Then Throw" Pattern

A common pattern: use `finally` to clean up, then re-throw:

```javascript
function withTransaction(operation) {
    const transaction = beginTransaction();

    try {
        const result = operation(transaction);
        transaction.commit();
        return result;

    } catch (error) {
        transaction.rollback();  // Undo any partial changes
        throw error;             // Re-throw after cleanup

    } finally {
        transaction.close();     // Always close the transaction
    }
}

// Usage:
try {
    const result = withTransaction((txn) => {
        txn.insert("users", { name: "Arjun" });
        txn.insert("profiles", { userId: 1, bio: "Developer" });
        return "Success";
    });
    console.log(result);
} catch (error) {
    console.log("Transaction failed and was rolled back:", error.message);
}
```

---

## 9.7 — Avoiding Error Swallowing in Re-throw Scenarios

```javascript
// ❌ WRONG: You accidentally swallow all errors
function badHandler() {
    try {
        riskyOperation();
    } catch (error) {
        if (error instanceof SpecificError) {
            handleSpecificError(error);
        }
        // If it's NOT a SpecificError, we silently do nothing!
        // The error is lost.
    }
}

// ✅ RIGHT: Re-throw anything you don't handle
function goodHandler() {
    try {
        riskyOperation();
    } catch (error) {
        if (error instanceof SpecificError) {
            handleSpecificError(error);
        } else {
            throw error;   // ← Always re-throw what you don't handle
        }
    }
}
```

---

⚡ **Try This Yourself — Exercise 9A**

Write a three-level function chain:
- `level3()` — throws a `TypeError` with "Invalid data type"
- `level2()` — catches from `level3`, logs "level2 handling:", re-throws after wrapping with cause
- `level1()` — catches from `level2`, handles `TypeError` by returning a default, re-throws anything else

---

📝 **Key Takeaways — Chapter 9**

- **Re-throwing** means catching an error and throwing it again after doing something with it
- Use re-throwing to: add context, log errors, clean up resources, then let the error propagate
- **Selective re-throwing** — catch what you can handle, re-throw what you can't
- The `cause` property is perfect for error chaining (wrapping errors with context)
- **Never silently swallow** errors — always re-throw what you can't handle
- Nested `try/catch` allows different error handling at different levels

---

# Chapter 10: Real-World Patterns and Best Practices {#chapter-10}

## 10.1 — The Global Error Handler

Every production application should have a **global error handler** — a last-resort catch for any error that wasn't caught elsewhere:

```javascript
// In a browser environment:
window.onerror = function(message, source, lineno, colno, error) {
    console.error("Global error caught:", message);
    console.error("File:", source, "Line:", lineno);
    // Send to error tracking service (Sentry, etc.)
    logErrorToService(error);
    return true;  // Prevents default browser error handling
};

// For unhandled Promise rejections:
window.addEventListener("unhandledrejection", function(event) {
    console.error("Unhandled promise rejection:", event.reason);
    logErrorToService(event.reason);
    event.preventDefault();  // Prevents console warning
});

// In Node.js:
process.on("uncaughtException", function(error) {
    console.error("Uncaught exception:", error);
    logErrorToService(error);
    process.exit(1);  // Exit cleanly — don't continue with unknown state
});

process.on("unhandledRejection", function(reason, promise) {
    console.error("Unhandled rejection at:", promise, "reason:", reason);
    logErrorToService(reason);
});
```

---

## 10.2 — Error Logging Best Practices

```javascript
class ErrorLogger {

    static log(error, context = {}) {
        const logEntry = {
            timestamp: new Date().toISOString(),
            name: error.name,
            message: error.message,
            stack: error.stack,
            context,  // Additional info about what was happening
            // Custom properties if they exist:
            ...(error.field && { field: error.field }),
            ...(error.statusCode && { statusCode: error.statusCode }),
            ...(error.userId && { userId: error.userId }),
        };

        // Log to console (in development)
        if (process.env.NODE_ENV === "development") {
            console.error("ERROR LOG:", logEntry);
        }

        // Send to monitoring service (in production)
        if (process.env.NODE_ENV === "production") {
            this.sendToMonitoringService(logEntry);
        }
    }

    static sendToMonitoringService(logEntry) {
        // In real code: send to Sentry, Datadog, CloudWatch, etc.
        fetch("/api/logs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(logEntry)
        }).catch(console.error);  // Don't let logging itself crash the app
    }
}

// Usage:
try {
    processOrder(orderId);
} catch (error) {
    ErrorLogger.log(error, {
        action: "processOrder",
        orderId,
        userId: currentUser.id
    });
    showUserError("Order processing failed. Please try again.");
}
```

---

## 10.3 — The Error Boundary Pattern

The concept of "error boundaries" — containing errors within specific zones so they don't crash the whole app:

```javascript
// A reusable function that creates an error boundary
function withErrorBoundary(operation, fallback, onError) {
    return function(...args) {
        try {
            return operation(...args);
        } catch (error) {
            if (onError) onError(error);
            return typeof fallback === "function" ? fallback(error) : fallback;
        }
    };
}

// -----------------------------------------------
// Usage:

const safeParseJSON = withErrorBoundary(
    JSON.parse,           // The risky operation
    null,                 // Fallback value on error
    (err) => console.warn("JSON parse failed:", err.message)  // Error handler
);

const safeFetch = withErrorBoundary(
    fetch,
    () => ({ ok: false, status: 0 }),   // Fallback: an object mimicking a failed response
    (err) => ErrorLogger.log(err, { context: "fetch" })
);

console.log(safeParseJSON('{"valid": true}'));    // → { valid: true }
console.log(safeParseJSON("{invalid}"));          // → null (with warning logged)
```

---

## 10.4 — Operational vs. Programmer Errors

This is a crucial distinction in professional error handling:

### Operational Errors (Expected, Recoverable)

These are errors that happen in the normal course of running — not bugs, but expected failure modes:

- User provides invalid input
- Network request fails
- File doesn't exist
- Database connection times out
- Rate limit exceeded

**Handle these gracefully** — show a message, retry, use a fallback.

```javascript
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.isOperational = true;   // Flag: this is an expected operational error
        this.statusCode = statusCode;
    }
}
```

### Programmer Errors (Bugs — Not Recoverable)

These are bugs in your code:

- Accessing a property on `undefined`
- Passing wrong argument type to a function
- Using a variable before declaring it
- Logic that produces incorrect results

**Don't "handle" these** — fix them. If you catch them, log them and crash or restart.

```javascript
function handleError(error) {
    if (error.isOperational) {
        // Operational error — handle gracefully
        showUserMessage(error.message);
        ErrorLogger.log(error, { severity: "warning" });
    } else {
        // Programmer error — this is a bug!
        ErrorLogger.log(error, { severity: "critical" });
        // In production servers: restart the process cleanly
        process.exit(1);
    }
}
```

---

## 10.5 — The Result Pattern (Alternative to Exceptions)

Some developers prefer a **Result pattern** instead of exceptions for expected failures. This is common in functional programming:

```javascript
// Instead of throwing, return an object with success/failure info
function divide(a, b) {
    if (b === 0) {
        return { ok: false, error: "Cannot divide by zero" };
    }
    return { ok: true, value: a / b };
}

// Usage: check the result instead of catching
const result = divide(10, 0);

if (result.ok) {
    console.log("Result:", result.value);
} else {
    console.log("Error:", result.error);
}
```

This pattern avoids exceptions for **expected** failure cases. Use it when failure is a normal, expected outcome (not an exceptional one). Use `throw/catch` when failure is truly exceptional.

---

## 10.6 — Best Practices Checklist

Here's a consolidated list of best practices:

```
✅ DO:
  • Always throw Error objects (or subclasses), never primitives
  • Write descriptive error messages — be specific
  • Use the most specific Error type available
  • Always handle errors — log, notify, or recover
  • Re-throw errors you can't handle
  • Use custom error classes for domain-specific errors
  • Add context to errors as they propagate
  • Use finally for cleanup operations
  • Have a global error handler as a safety net
  • Distinguish operational errors from programmer errors

❌ DON'T:
  • Throw strings or plain objects
  • Swallow errors silently (empty catch blocks)
  • Use try/catch for normal control flow
  • Catch and ignore errors without logging
  • Put unrelated code in the same try block
  • Return from finally (overrides try/catch returns)
  • Use try/catch to avoid fixing bugs
  • Make error messages vague ("An error occurred")
```

---

📝 **Key Takeaways — Chapter 10**

- Always have a **global error handler** as the last defense
- **Log errors with context** — timestamp, action, relevant IDs
- Use **error boundaries** to contain failures
- Distinguish **operational errors** (expected, handle gracefully) from **programmer errors** (bugs, fix them)
- The **Result pattern** is an alternative for expected failures
- Never silently swallow errors — always at least log them

---

# Chapter 11: Grand Capstone Project {#chapter-11}

## 🏗️ Build a Complete Error-Handling System: "BankVault"

Let's put **everything together** — `throw`, `try/catch/finally`, Error objects, custom errors, error hierarchies, logging, and best practices — in one complete, realistic project.

### Project: BankVault — A Simple Banking System

We'll build a banking system that handles all error scenarios professionally.

---

### Step 1: Custom Error Hierarchy

```javascript
// =====================================================
// BANKVAULT — Custom Error Hierarchy
// =====================================================

// Base class for all BankVault errors
class BankVaultError extends Error {
    constructor(message, code) {
        super(message);
        this.name = this.constructor.name;
        this.code = code;
        this.timestamp = new Date().toISOString();
        this.isOperational = true;
    }

    toJSON() {
        return {
            name: this.name,
            message: this.message,
            code: this.code,
            timestamp: this.timestamp
        };
    }
}

// Account-related errors
class AccountNotFoundError extends BankVaultError {
    constructor(accountId) {
        super(`Account ${accountId} does not exist`, "ACCOUNT_NOT_FOUND");
        this.accountId = accountId;
    }
}

class AccountFrozenError extends BankVaultError {
    constructor(accountId, reason) {
        super(`Account ${accountId} is frozen: ${reason}`, "ACCOUNT_FROZEN");
        this.accountId = accountId;
        this.reason = reason;
    }
}

// Transaction errors
class InsufficientFundsError extends BankVaultError {
    constructor(accountId, balance, requested) {
        super(
            `Insufficient funds in account ${accountId}. ` +
            `Balance: ₹${balance}, Requested: ₹${requested}`,
            "INSUFFICIENT_FUNDS"
        );
        this.accountId = accountId;
        this.balance = balance;
        this.requested = requested;
        this.shortfall = requested - balance;
    }
}

class InvalidAmountError extends BankVaultError {
    constructor(amount) {
        super(`Invalid transaction amount: ${amount}`, "INVALID_AMOUNT");
        this.received = amount;
    }
}

class DailyLimitExceededError extends BankVaultError {
    constructor(accountId, dailyLimit, attempted) {
        super(
            `Daily transaction limit exceeded for account ${accountId}. ` +
            `Limit: ₹${dailyLimit}, Attempted: ₹${attempted}`,
            "DAILY_LIMIT_EXCEEDED"
        );
        this.accountId = accountId;
        this.dailyLimit = dailyLimit;
        this.attempted = attempted;
    }
}

// Authentication errors
class AuthenticationError extends BankVaultError {
    constructor(message) {
        super(message, "AUTH_FAILED");
    }
}
```

---

### Step 2: The Bank Database (Simple Simulation)

```javascript
// =====================================================
// BANKVAULT — In-Memory Database
// =====================================================

const bankDatabase = {
    accounts: {
        "ACC001": {
            id: "ACC001",
            owner: "Arjun Sharma",
            balance: 50000,
            isFrozen: false,
            dailyLimit: 20000,
            todaySpent: 0,
            pin: "1234"
        },
        "ACC002": {
            id: "ACC002",
            owner: "Priya Singh",
            balance: 150000,
            isFrozen: false,
            dailyLimit: 50000,
            todaySpent: 0,
            pin: "5678"
        },
        "ACC003": {
            id: "ACC003",
            owner: "Rahul Verma",
            balance: 5000,
            isFrozen: true,  // This account is frozen
            freezeReason: "Suspicious activity detected",
            dailyLimit: 10000,
            todaySpent: 0,
            pin: "9999"
        }
    },
    transactionLog: []
};
```

---

### Step 3: Validation Utilities

```javascript
// =====================================================
// BANKVAULT — Input Validation
// =====================================================

function validateAccountId(accountId) {
    if (typeof accountId !== "string") {
        throw new TypeError(
            `Account ID must be a string, got: ${typeof accountId}`
        );
    }
    if (!accountId.trim()) {
        throw new InvalidAmountError("Account ID cannot be empty");
    }
}

function validateAmount(amount) {
    if (typeof amount !== "number") {
        throw new TypeError(
            `Amount must be a number, got: ${typeof amount}`
        );
    }
    if (isNaN(amount) || !isFinite(amount)) {
        throw new InvalidAmountError(amount);
    }
    if (amount <= 0) {
        throw new InvalidAmountError(amount);
    }
    if (amount % 1 !== 0) {
        throw new InvalidAmountError(`Amount must be a whole number, got: ${amount}`);
    }
}

function validatePin(pin) {
    if (typeof pin !== "string" || pin.length !== 4 || !/^\d{4}$/.test(pin)) {
        throw new AuthenticationError("Invalid PIN format. PIN must be 4 digits.");
    }
}
```

---

### Step 4: Core Banking Operations

```javascript
// =====================================================
// BANKVAULT — Core Banking Functions
// =====================================================

function getAccount(accountId) {
    validateAccountId(accountId);

    const account = bankDatabase.accounts[accountId];

    if (!account) {
        throw new AccountNotFoundError(accountId);
    }

    return account;
}

function authenticateAccount(accountId, pin) {
    const account = getAccount(accountId);   // May throw AccountNotFoundError

    validatePin(pin);

    if (account.pin !== pin) {
        throw new AuthenticationError(
            `Incorrect PIN for account ${accountId}`
        );
    }

    return account;
}

function checkAccountActive(account) {
    if (account.isFrozen) {
        throw new AccountFrozenError(account.id, account.freezeReason);
    }
}

function checkDailyLimit(account, amount) {
    const totalToday = account.todaySpent + amount;
    if (totalToday > account.dailyLimit) {
        throw new DailyLimitExceededError(
            account.id,
            account.dailyLimit,
            totalToday
        );
    }
}

function logTransaction(type, details) {
    bankDatabase.transactionLog.push({
        id: `TXN${Date.now()}`,
        type,
        timestamp: new Date().toISOString(),
        ...details
    });
}
```

---

### Step 5: High-Level Banking Operations

```javascript
// =====================================================
// BANKVAULT — High-Level Operations
// =====================================================

function checkBalance(accountId, pin) {
    try {
        const account = authenticateAccount(accountId, pin);
        checkAccountActive(account);

        return {
            success: true,
            accountId,
            owner: account.owner,
            balance: account.balance
        };

    } catch (error) {
        return createErrorResponse(error, "checkBalance");
    }
}

function deposit(accountId, pin, amount) {
    let account = null;

    try {
        // Authenticate and validate
        account = authenticateAccount(accountId, pin);
        checkAccountActive(account);
        validateAmount(amount);

        // Perform deposit
        account.balance += amount;
        logTransaction("DEPOSIT", { accountId, amount, newBalance: account.balance });

        return {
            success: true,
            message: `Deposited ₹${amount} to account ${accountId}`,
            newBalance: account.balance
        };

    } catch (error) {
        return createErrorResponse(error, "deposit");

    } finally {
        // Always log the attempt, regardless of success
        console.log(
            `[BankVault] Deposit attempt on ${accountId}: ` +
            `${account ? `balance = ₹${account.balance}` : "authentication failed"}`
        );
    }
}

function withdraw(accountId, pin, amount) {
    let account = null;

    try {
        // Validate inputs
        validateAmount(amount);

        // Authenticate
        account = authenticateAccount(accountId, pin);
        checkAccountActive(account);

        // Check limits
        checkDailyLimit(account, amount);

        // Check balance
        if (account.balance < amount) {
            throw new InsufficientFundsError(accountId, account.balance, amount);
        }

        // Perform withdrawal
        account.balance -= amount;
        account.todaySpent += amount;

        logTransaction("WITHDRAWAL", {
            accountId,
            amount,
            newBalance: account.balance,
            todaySpent: account.todaySpent
        });

        return {
            success: true,
            message: `Withdrew ₹${amount} from account ${accountId}`,
            newBalance: account.balance,
            remainingDailyLimit: account.dailyLimit - account.todaySpent
        };

    } catch (error) {
        return createErrorResponse(error, "withdraw");

    } finally {
        console.log(
            `[BankVault] Withdrawal attempt on ${accountId}: ` +
            `amount = ₹${amount}`
        );
    }
}

function transfer(fromAccountId, fromPin, toAccountId, amount) {
    let fromAccount = null;

    try {
        // Validate amount first (before anything else)
        validateAmount(amount);

        // Authenticate the sender
        fromAccount = authenticateAccount(fromAccountId, fromPin);
        checkAccountActive(fromAccount);

        // Verify recipient exists (don't authenticate, just check existence)
        const toAccount = getAccount(toAccountId);
        checkAccountActive(toAccount);

        // Check daily limit
        checkDailyLimit(fromAccount, amount);

        // Check sender balance
        if (fromAccount.balance < amount) {
            throw new InsufficientFundsError(
                fromAccountId,
                fromAccount.balance,
                amount
            );
        }

        // Perform transfer (both operations must succeed)
        try {
            fromAccount.balance -= amount;
            fromAccount.todaySpent += amount;
            toAccount.balance += amount;

            logTransaction("TRANSFER", {
                fromAccountId,
                toAccountId,
                amount,
                fromNewBalance: fromAccount.balance,
                toNewBalance: toAccount.balance
            });

        } catch (dbError) {
            // If something went wrong mid-transfer, reverse the debit
            fromAccount.balance += amount;         // Reverse
            fromAccount.todaySpent -= amount;      // Reverse
            // Note: toAccount credit failed, so nothing to reverse there

            throw new BankVaultError(
                `Transfer failed during processing: ${dbError.message}`,
                "TRANSFER_FAILED"
            );
        }

        return {
            success: true,
            message: `Transferred ₹${amount} from ${fromAccountId} to ${toAccountId}`,
            fromNewBalance: fromAccount.balance,
            toNewBalance: toAccount.balance
        };

    } catch (error) {
        return createErrorResponse(error, "transfer");

    } finally {
        console.log(
            `[BankVault] Transfer attempt: ` +
            `${fromAccountId} → ${toAccountId}, amount = ₹${amount}`
        );
    }
}
```

---

### Step 6: Error Response Creator

```javascript
// =====================================================
// BANKVAULT — Error Handler
// =====================================================

function createErrorResponse(error, operation) {
    // Log all errors with context
    console.error(`[BankVault Error] Operation: ${operation}`);
    console.error(`  Type: ${error.name}`);
    console.error(`  Message: ${error.message}`);

    // Create user-friendly responses based on error type
    if (error instanceof AuthenticationError) {
        return {
            success: false,
            code: "AUTH_FAILED",
            userMessage: "Authentication failed. Please check your account ID and PIN."
        };

    } else if (error instanceof AccountNotFoundError) {
        return {
            success: false,
            code: "ACCOUNT_NOT_FOUND",
            userMessage: `Account not found. Please check the account number.`
        };

    } else if (error instanceof AccountFrozenError) {
        return {
            success: false,
            code: "ACCOUNT_FROZEN",
            userMessage: `This account is currently frozen. Please contact customer support.`,
            reason: error.reason
        };

    } else if (error instanceof InsufficientFundsError) {
        return {
            success: false,
            code: "INSUFFICIENT_FUNDS",
            userMessage: `Insufficient funds. You need ₹${error.shortfall} more.`,
            currentBalance: error.balance,
            shortfall: error.shortfall
        };

    } else if (error instanceof DailyLimitExceededError) {
        return {
            success: false,
            code: "DAILY_LIMIT_EXCEEDED",
            userMessage: `Daily transaction limit of ₹${error.dailyLimit} would be exceeded.`,
            dailyLimit: error.dailyLimit
        };

    } else if (error instanceof InvalidAmountError || error instanceof TypeError) {
        return {
            success: false,
            code: "INVALID_INPUT",
            userMessage: "Invalid input provided. Please check your data and try again.",
            technical: error.message
        };

    } else {
        // Unknown error — this shouldn't happen in normal operation
        console.error("[BankVault] UNEXPECTED ERROR:", error);
        return {
            success: false,
            code: "SYSTEM_ERROR",
            userMessage: "A system error occurred. Please try again later.",
        };
    }
}
```

---

### Step 7: Testing the Complete System

```javascript
// =====================================================
// BANKVAULT — Test Suite
// =====================================================

function printResult(operation, result) {
    console.log(`\n${"=".repeat(50)}`);
    console.log(`Operation: ${operation}`);
    console.log(`Success: ${result.success}`);

    if (result.success) {
        Object.entries(result).forEach(([key, val]) => {
            if (key !== "success") console.log(`  ${key}: ${val}`);
        });
    } else {
        console.log(`  User Message: ${result.userMessage}`);
        if (result.shortfall) console.log(`  Shortfall: ₹${result.shortfall}`);
        if (result.reason) console.log(`  Reason: ${result.reason}`);
    }
}

// Test 1: Check balance — valid
printResult(
    "Check Balance (Valid)",
    checkBalance("ACC001", "1234")
);

// Test 2: Check balance — wrong PIN
printResult(
    "Check Balance (Wrong PIN)",
    checkBalance("ACC001", "0000")
);

// Test 3: Deposit — valid
printResult(
    "Deposit ₹5000",
    deposit("ACC001", "1234", 5000)
);

// Test 4: Withdraw — valid
printResult(
    "Withdraw ₹10000",
    withdraw("ACC001", "1234", 10000)
);

// Test 5: Withdraw — insufficient funds
printResult(
    "Withdraw ₹200000 (Insufficient Funds)",
    withdraw("ACC001", "1234", 200000)
);

// Test 6: Withdraw — daily limit exceeded
printResult(
    "Withdraw ₹25000 (Daily Limit)",
    withdraw("ACC001", "1234", 25000)
);

// Test 7: Transfer — valid
printResult(
    "Transfer ₹5000 ACC001 → ACC002",
    transfer("ACC001", "1234", "ACC002", 5000)
);

// Test 8: Access frozen account
printResult(
    "Withdraw from Frozen Account",
    withdraw("ACC003", "9999", 1000)
);

// Test 9: Access non-existent account
printResult(
    "Access Non-Existent Account",
    checkBalance("ACC999", "0000")
);

// Test 10: Invalid amount
printResult(
    "Withdraw Negative Amount",
    withdraw("ACC001", "1234", -500)
);

// Print transaction log
console.log(`\n${"=".repeat(50)}`);
console.log("TRANSACTION LOG:");
bankDatabase.transactionLog.forEach((txn, i) => {
    console.log(`${i+1}. [${txn.type}] ${txn.id} - ₹${txn.amount}`);
});
```

---

### What This Project Demonstrates

| Concept | Where Used |
|---|---|
| `throw new Error()` | `validateAmount`, `validatePin`, `validateAccountId` |
| Custom error classes | Full hierarchy: `BankVaultError`, `InsufficientFundsError`, etc. |
| `try/catch` | Every public function |
| `finally` | `deposit`, `withdraw`, `transfer` — always logs the attempt |
| `instanceof` | `createErrorResponse` — handling each error type differently |
| Error properties | `shortfall`, `reason`, `dailyLimit` on custom errors |
| Nested try/catch | `transfer` — inner try for the actual DB operation |
| Re-throwing | `transfer` — re-throws DB errors after reversing partial changes |
| Error wrapping | Wrapping DB errors in `BankVaultError` with context |
| Operational vs bugs | `isOperational: true` on all BankVaultErrors |

---

## 🎓 Final Summary — The Complete Picture

You've now learned everything fundamental about exception handling in JavaScript:

```
Exception Handling
│
├── throw
│   ├── Stops execution immediately
│   ├── Travels up the call stack
│   └── Always throw Error objects (never primitives)
│
├── try / catch / finally
│   ├── try  → the risky code
│   ├── catch → handles the error (has the error object)
│   └── finally → ALWAYS runs (cleanup)
│
├── Error Objects
│   ├── name    → the type
│   ├── message → the description
│   ├── stack   → the trace
│   └── cause   → the original (for wrapping)
│
├── Built-in Error Types
│   ├── TypeError    → wrong type
│   ├── RangeError   → out of range
│   ├── SyntaxError  → format error
│   ├── ReferenceError → undefined variable
│   └── URIError, EvalError → specialized
│
└── Custom Errors
    ├── class MyError extends Error
    ├── Build hierarchies
    └── Add domain-specific properties
```

---

### 🚀 Where to Go Next

Now that you have solid exception handling fundamentals:

1. **Async/Await Error Handling** — how `try/catch` works with Promises
2. **Error Monitoring Services** — Sentry, Datadog, and production error tracking
3. **Testing Error Scenarios** — writing unit tests for error cases
4. **Express.js Error Middleware** — centralized error handling in Node.js web servers

Every concept you learned here will carry forward into all of those topics. You now think like a professional about what happens when things go wrong — and that's one of the most valuable skills in software development.

---

> *"The mark of a great developer isn't writing code that works when everything goes right. It's writing code that survives everything that goes wrong."*