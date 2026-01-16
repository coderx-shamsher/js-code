<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# JavaScript Topic : Arrays in JavaScript

Arrays store multiple values in one variable, like a shopping list or student marks. They power lists, data processing, and UI rendering in every modern web app.

## English Explanation

Arrays are ordered collections accessed by index (0, 1, 2...). Unlike strings, arrays are **mutable** - you can change, add, or remove elements.

### Creating Arrays

```javascript
// Three ways - #2 most common
let fruits = ["apple", "banana", "orange"];  // Array literal - best
let numbers = new Array(1, 2, 3);           // Constructor
let empty = [];                             // Empty array

console.log(fruits[^0]);  // "apple" - index starts at 0
console.log(fruits.length);  // 3 - property, no ()
```

**Visual Box Diagram:**

```
fruits = ["apple", "banana", "orange"]
Index:   0        1          2
Length:  3
```


### Essential Array Operations

```javascript
let scores = [85, 92, 78, 95];

// Add to end
scores.push(88);  // [85, 92, 78, 95, 88]

// Remove from end
scores.pop();     // Removes 88, returns it

// Add to start
scores.unshift(100);  // [100, 85, 92, 78, 95]

// Remove from start
scores.shift();       // Removes 100

// Change by index
scores[^0] = 99;       // Direct assignment works!
```

**Common Mistake:** Out of bounds access: `fruits[^10]` = `undefined` (safe, no error)

### Looping Arrays (Interview Must)

```javascript
let cities = ["Delhi", "Mumbai", "Ludhiana"];

// Traditional for loop
for(let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

// Modern forEach (industry standard)
cities.forEach(function(city) {
    console.log("City: " + city);
});

// Even better - arrow function (ES6)
cities.forEach(city => console.log(city.toUpperCase()));
```

**Flow Diagram:**

```
Array → forEach(callback) → Each element → Execute function → Next
["A","B"] → callback("A") → callback("B") → Done
```


## Hinglish Explanation (Quick Reference)

Arrays ek list hai jisme multiple values store kar sakte ho. Index 0 se shuru.

### Banane Ka Tarika

```javascript
let items = ["pen", "book", "copy"];  // Sabse easy
items[^0]  // "pen" - pehla item
items.length  // 3 - kitne hain
```


### Zaruri Operations

```javascript
items.push("eraser");   // End mein add
items.pop();            // End se hatao
items.unshift("bag");   // Start mein add
items[^1] = "notebook";  // Change karo
```

**Looping:**

```javascript
// Simple way
for(let i=0; i<items.length; i++) {
    console.log(items[i]);
}

// Pro way
items.forEach(item => console.log(item));
```

**Galtiyaan:**

- `items[^100]` mat karo → `undefined`
- `length` pe `()` mat lagao
- Direct change kar sakte ho: `items[^0] = "new"`

```
List Visual:
["pen","book"] → [^0]="pen", [^1]="book"
push("pencil") → ["pen","book","pencil"]
```


## Summary

Arrays = dynamic lists for real apps. Practice: Shopping cart - add/remove items. Mastered push/pop/shift/unshift + forEach. Next: Array methods![^1]
<span style="display:none">[^2][^3][^4][^5][^6][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://www.w3schools.com/js/js_arrays.asp

[^2]: https://www.geeksforgeeks.org/javascript/javascript-arrays/

[^3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[^4]: https://javascript.info/array

[^5]: https://codeinstitute.net/global/blog/javascript-arrays/

[^6]: https://www.programiz.com/javascript/array

[^7]: https://www.fullstackfoundations.com/blog/javascript-array-methods

[^8]: https://www.w3schools.com/js/js_array_methods.asp

[^9]: https://www.freecodecamp.org/news/javascript-array-handbook/

[^10]: https://www.geeksforgeeks.org/javascript/javascript-array-programming-examples/

