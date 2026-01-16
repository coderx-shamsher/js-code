<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# JavaScript Topic 9: Common Array Methods \& When to Use Them

Array methods transform, filter, and process data efficiently. Modern apps (React, Node.js) rely on these for 90% of list operations - master **map**, **filter**, **reduce** first.

## English Explanation

Array methods take **callback functions** and either **mutate** (change original) or **return new arrays**. Interviews test: "Transform this data using one method."

### Essential Methods Table

| Method | What it does | Mutates? | Use When | Example |
| :-- | :-- | :-- | :-- | :-- |
| `push()` | Add to end | ✅ Yes | Shopping cart | `cart.push(item)` |
| `pop()` | Remove end | ✅ Yes | Undo action | `last = stack.pop()` |
| `map()` | Transform ALL | ❌ No | UI lists | `names.map(n => n.toUpper())` |
| `filter()` | Keep matching | ❌ No | Search | `users.filter(u => u.age > 18)` |
| `find()` | First match | ❌ No | Login | `user = users.find(u => u.id === 1)` |
| `forEach()` | Loop only | ❌ No | Side effects | `items.forEach(print)` |
| `reduce()` | Single value | ❌ No | Sum/Avg | `total = prices.reduce((a,b) => a+b)` |
| `slice()` | Copy range | ❌ No | Pagination | `page = items.slice(0,10)` |
| `splice()` | Add/Remove | ✅ Yes | Inline edit | `arr.splice(1,1,"new")` |
| `sort()` | Order | ✅ Yes | Leaderboard | `scores.sort((a,b)=>b-a)` |

### Core Functional Methods (Interview Must)

```javascript
let numbers = [1, 2, 3, 4, 5];

// TRANSFORM - map() creates NEW array
let doubled = numbers.map(n => n * 2);  // [2,4,6,8,10]
console.log(numbers);  // Original unchanged!

// FILTER - keep only matching
let evens = numbers.filter(n => n % 2 === 0);  // [2,4]

// FIND - first match only
let three = numbers.find(n => n > 2);  // 3

// REDUCE - single value from array
let sum = numbers.reduce((acc, num) => acc + num, 0);  // 15
```

**Method Chaining (Pro Technique):**

```javascript
let users = [
  {name: "Raj", age: 25},
  {name: "Priya", age: 30},
  {name: "Amit", age: 20}
];

let adults = users
  .filter(u => u.age >= 25)      // Keep adults
  .map(u => u.name.toUpper())    // Get names UPPER
  .sort();                       // Alphabetical
// ["PRIYA", "RAJ"]
```

**Visual Pipeline:**

```
[1,2,3,4,5] → filter(even) → [2,4] → map(double) → [4,8] → reduce(sum) → 12
```

**Common Mistakes:**

- Using `forEach` to transform: `arr.forEach(x => x*2)` → No new array!
- Mutating during `map/filter`: Creates bugs
- Forgetting initial value in `reduce`: `reduce(fn)` vs `reduce(fn, 0)`


## Hinglish Explanation (Quick Reference)

**Array Methods Quick Chart:**

```
Transform → map()    [Nayi list banao]
Filter → filter()   [Chhote karo] 
Find → find()       [Pehla dhundo]
Sum → reduce()      [Ek value banao]
Loop → forEach()    [Sirf chalao]
```

**Real Examples:**

```javascript
let marks = [80, 45, 92, 33];

// Fail wale nikalo
let fail = marks.filter(m => m < 50);  // [45,33]

// Sabko 10 bonus do
let bonus = marks.map(m => m + 10);    // [90,55,102,43]

// Total marks
let total = marks.reduce((sum, m) => sum + m, 0);  // 250
```

**Chain Magic:**

```javascript
students
.filter(s => s.marks > 80)     // Toppers
.map(s => s.name)             // Names only
.sort()                       // A-Z
```

**Galtiyaan:**

```
❌ arr.forEach(x => x*2)  // Kuch nahi hoga
✅ arr.map(x => x*2)     // Double ho jayega

❌ reduce()              // Error!
✅ reduce(fn, 0)         // Safe
```


## Summary

**Master these 5 first:** `map`, `filter`, `find`, `reduce`, `forEach`. Practice: Transform student data → filter pass → map percentages → sum total. Next: Advanced array patterns!
<span style="display:none">[^1][^10][^2][^3][^4][^5][^6][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://www.w3schools.com/js/js_array_methods.asp

[^2]: https://javascript.info/array-methods

[^3]: https://www.geeksforgeeks.org/javascript/javascript-array-methods/

[^4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[^5]: https://www.geeksforgeeks.org/javascript/best-known-javascript-array-methods/

[^6]: https://www.perssondennis.com/articles/the-20-most-common-use-cases-for-javascript-arrays

[^7]: https://dev.to/codewithtee/15-array-methods-in-javascript-1p1m

[^8]: https://www.fullstackfoundations.com/blog/javascript-array-methods

[^9]: https://www.youtube.com/watch?v=MeZVVxLn26E

[^10]: https://www.almabetter.com/bytes/tutorials/javascript/array-methods-in-javascript

