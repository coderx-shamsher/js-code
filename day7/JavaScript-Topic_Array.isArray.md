<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# JavaScript Topic 14: `Array.isArray()` Complete Guide

`Array.isArray()` **static method** hai (function nahi), jo check karta hai ki diya gaya value **true array** hai ya nahi. **Industry standard** hai ye!

## English Explanation

**What is `Array.isArray()`?**

```javascript
Array.isArray([1,2,3])     // true  - Real array
Array.isArray("hello")     // false - String
Array.isArray({})          // false - Object
Array.isArray(null)        // false - null
```

**Key Points:**

- **Static method** - `Array.` se call karte hain, array variable pe nahi
- **ES5 (2009)** se available - modern browsers mein perfect
- **React/Node.js** mein **sabse zyada use** hota hai
- **100% reliable** - iframe, prototype changes handle karta hai

**Real Use Cases (Must Know):**

```javascript
// API data check
function processData(data) {
    if (Array.isArray(data)) {
        data.forEach(item => console.log(item));
    } else {
        console.log("Not an array!");
    }
}

// React props validation
function MyComponent({ items }) {
    if (!Array.isArray(items)) {
        return <div>No items provided</div>;
    }
    return items.map(item => <div>{item}</div>);
}
```


## Hinglish Explanation (Quick Reference)

**`Array.isArray()` Kya Hai:**

```javascript
Array.isArray([])          // true ✅ Array hai
Array.isArray([1,2])       // true ✅ 
Array.isArray("hello")     // false ❌ String
Array.isArray({name:"A"})  // false ❌ Object
```

**`Array` vs `isArray()` Difference:**

```
Array = Constructor (new Array() banane ke liye)
isArray() = Static method (check karne ke liye)

Array[1,2,3]           ❌ Wrong syntax!
Array.isArray([1,2,3])  ✅ Correct!
```

**Kab Use Karo (Real Scenarios):**

```javascript
// 1. User input check
let userData = JSON.parse(input);
if(Array.isArray(userData)) { /* process array */ }

// 2. Function parameter
function handleList(list) {
    if(!Array.isArray(list)) return "Error: Array expected!";
}

// 3. API response
fetch('/api/items').then(res => res.json())
    .then(data => {
        if(Array.isArray(data)) data.forEach(...);
    });
```

**Industry Importance:**

```
✅ MUST KNOW for interviews (FAANG level)
✅ React/Vue/Angular sab use karte hain  
✅ 100x better than typeof/instanceof
✅ Production code mein standard
```

**Quick Test:**

```javascript
console.log(Array.isArray([]));           // true
console.log(Array.isArray(new Array()));  // true
console.log(Array.isArray(Array.prototype)); // true (pro fact!)
```


## Summary

**Rule:** `Array.isArray(value)` - simple, reliable, industry standard. **Hamesha use karo** array checking ke liye. `Array` constructor hai, `isArray()` checker hai. Next: Objects!
<span style="display:none">[^1][^10][^2][^3][^4][^5][^6][^7][^8][^9]</span>

# JavaScript Topic 15: `Array.` Alone Ka Use

**`Array.` ko alone use karne ke 3 main tarike hain:**

## English Explanation

### 1. **`Array.isArray()`** - Array Check (Most Common)
```javascript
Array.isArray([1,2,3])     // true
Array.isArray("hello")     // false
```

### 2. **`Array.from()`** - Array Banane Ke Liye
```javascript
Array.from("hello")        // ["h","e","l","l","o"]
Array.from({length: 3})    // [undefined, undefined, undefined]
```

### 3. **`Array.of()`** - Safe Array Creation
```javascript
Array.of(1,2,3)           // [1,2,3] ✅ Perfect
new Array(1,2,3)           // [1,2,3] ✅ Good
new Array(3)               // [empty × 3] ❌ Gotcha!
```

**Summary Table:**
```
Array.isArray()  → Check array hai?
Array.from()     → Banaye array
Array.of()       → Safe banaye array
```

## Hinglish Explanation (Quick Reference)

**`Array.` Ke 3 Uses:**
```javascript
// 1. CHECK - Array hai ya nahi?
Array.isArray([])          // true/false

// 2. FROM - String/Object se array banao
Array.from("ABC")          // ["A","B","C"]

// 3. OF - Perfect array banao
Array.of(5)                //  [sceweb.uhcl](https://sceweb.uhcl.edu/helm/WEBPAGE-Javascript/my_files/Object/Module-5/Properties/javascript__array_constructor_p.html) - hamesha sahi!
```

**Daily Use:**
```
if(Array.isArray(data)) { /* array hai */ }
let chars = Array.from("hello");  // string → array
let nums = Array.of(1,2,3);       // clean array
```

**Galti Avoid:**
```javascript
❌ new Array(3)     // [empty × 3] - confusing!
✅ Array.of(3)      //  [w3schools](https://www.w3schools.com/jsref/jsref_constructor_array.asp) - clear!
```

## Summary
**Main Use:** `Array.isArray()` (90% cases). `Array.from()` aur `Array.of()` advanced banane ke liye. **Alone `Array` type karne se kuch nahi hota** - method chahiye!

**Pro Tip:** `Array.` type karke IntelliSense dekho - available methods dikhega!


# Quick Summary: `Array.` Methods

## **1. `Array.isArray(value)`**
```
Work: Check → Array hai ya nahi?
[1,2] → true
"abc" → false
{} → false
```
**Use:** `if(Array.isArray(data))`

## **2. `Array.from(source)`**
```
Work: Banao → Array from anything
Array.from("hello") → ["h","e","l","l","o"]
Array.from({length:3}) → [und,und,und]
```

## **3. `Array.of(...items)`**
```
Work: Perfect → Array banao
Array.of(1,2,3) → [1,2,3]
Array.of(5) → [5]  (not [empty x5]!)
```

## **One Line Rule:**
```
Array.isArray() → CHECK
Array.from() → CREATE from other
Array.of() → CREATE perfect
```

**Most Used:** `Array.isArray()` (99% cases) 🚀


<!-- 
[^1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

[^2]: https://www.w3schools.com/jsref/jsref_isarray.asp

[^3]: https://www.geeksforgeeks.org/javascript/javascript-array-isarray-method/

[^4]: https://www.programiz.com/javascript/library/array/isarray

[^5]: https://docs.vultr.com/javascript/standard-library/Array/isArray

[^6]: https://www.tutorialspoint.com/javascript/array_isarray.htm

[^7]: https://www.codecademy.com/resources/docs/javascript/arrays/isArray

[^8]: https://stackoverflow.com/questions/72412420/how-does-the-array-isarray-method-check-for-array

[^9]: https://www.youtube.com/watch?v=i-aqq8Ht3yM

[^10]: https://mdn.org.cn/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray -->


<div align="center">⁂</div>