<!-- <img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/> -->

# JavaScript Topics : Add, Remove, Modify Array Elements

Arrays in JavaScript are **mutable** - you can add, remove, or change elements easily. Master these 6 methods for 95% of array manipulation needs in interviews and real apps.

## English Explanation

Unlike strings (immutable), arrays let you directly modify content. Methods are either **end-focused** (fast) or **position-specific** (splice).

### Complete Operations Guide

```javascript
let fruits = ["apple", "banana", "orange"];
console.log(fruits);  // ["apple", "banana", "orange"]
```


#### 1. **ADD Elements**

```javascript
// End (fastest - O(1))
fruits.push("mango");           // ["apple", "banana", "orange", "mango"]
fruits.push("grapes", "kiwi");  // Multiple at once

// Start (slower - O(n))
fruits.unshift("guava");        // ["guava", "apple", "banana", "orange", "mango"]

// Middle (splice - O(n))
fruits.splice(2, 0, "pineapple");  // Insert at index 2, remove 0
// ["guava", "apple", "pineapple", "banana", "orange", "mango"]
```


#### 2. **REMOVE Elements**

```javascript
// End (fastest)
fruits.pop();  // Removes "mango", returns it

// Start
fruits.shift();  // Removes "guava"

// Middle (splice)
fruits.splice(1, 2);  // Remove 2 elements starting at index 1
// ["pineapple", "orange"]
```


#### 3. **MODIFY Elements**

```javascript
// Direct index assignment (simplest)
fruits[^0] = "watermelon";  // ["watermelon", "orange"]

// Replace with splice
fruits.splice(1, 1, "papaya");  // Replace 1 element at index 1
```

**Visual Operation Flow:**

```
Array: ["A", "B", "C", "D"]
push("E") → ["A", "B", "C", "D", "E"]     ← End add
pop()    → ["A", "B", "C", "D"]           ← End remove  
unshift("0") → ["0", "A", "B", "C", "D"]  ← Start add
splice(1,1,"X") → ["0", "X", "B", "C", "D"] ← Replace
```

**Performance Table:**


| Operation | Speed | Method |
| :-- | :-- | :-- |
| Add End | ⚡ O(1) | `push()` |
| Remove End | ⚡ O(1) | `pop()` |
| Add/Remove Start | 🐌 O(n) | `unshift/shift` |
| Middle | 🐌 O(n) | `splice()` |

**Common Mistakes:**

```javascript
// ❌ Don't do this - creates holes
fruits[^10] = "item";  // [..., undefined x9, "item"]

// ✅ Use push/splice instead
fruits.push("item");
```


## Hinglish Explanation (Quick Reference)

**Array Change Karne Ke 4 Tarike:**

```
ADD END → push()     ["apple"] → push("banana") → ["apple","banana"]
REMOVE END → pop()   
ADD START → unshift()  
REMOVE START → shift()

MIDDLE KE LIYE → splice(index, removeCount, addItems?)
```

**Practical Examples:**

```javascript
let cart = ["roti", "doodh"];

// Add
cart.push("sabzi");      // ["roti", "doodh", "sabzi"]
cart.unshift("andaa");   // ["andaa", "roti", "doodh", "sabzi"]

// Remove  
cart.pop();              // ["andaa", "roti", "doodh"]
cart.shift();            // ["roti", "doodh"]

// Replace
cart[^0] = "paratha";     // ["paratha", "doodh"]
cart.splice(1, 1, "chai"); // ["paratha", "chai"]
```

**Fast vs Slow:**

```
End (push/pop) = ⚡ Tez
Start (unshift/shift) = 🐌 Slow  
Middle (splice) = 🐌 Slowest
```

**Galtiyaan:**

```javascript
❌ cart[^100] = "item"  // 99 undefined banenge!
✅ cart.push("item")
```


## Summary

**Daily use:** `push/pop` for carts. `splice` for editing. Direct `arr[^0] = new` for single changes. Practice: Shopping cart with add/remove at any position. Next: Array iteration![^1][^2]
<!-- <span style="display:none">[^3][^4][^5][^6][^7][^8][^9]</span> -->

<!-- 
[^1]: https://www.greatfrontend.com/questions/quiz/how-do-you-add-remove-and-update-elements-in-an-array

[^2]: https://www.freecodecamp.org/news/how-to-add-and-remove-js-array-elements/

[^3]: https://codesignal.com/learn/courses/a-closer-look-at-update-operations-in-mongodb/lessons/adding-and-removing-elements-from-arrays

[^4]: https://www.geeksforgeeks.org/javascript/remove-elements-from-a-javascript-array/

[^5]: https://www.w3schools.com/js/js_array_methods.asp

[^6]: https://react.dev/learn/updating-arrays-in-state

[^7]: https://stackoverflow.com/questions/39335607/add-or-remove-element-in-array

[^8]: https://hyperskill.org/learn/step/24952

[^9]: https://dev.to/dillionmegida/arraysplice-for-removing-replacing-or-adding-values-to-an-array-1k6c

[^10]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array -->


<div align="center">⁂</div>