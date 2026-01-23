<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# JavaScript Topic 12: Why `typeof array` Shows "object"

**Short Answer:** Arrays **are** objects in JavaScript! `typeof` correctly shows "object". **No negative effect** on usage. Fix: Use `Array.isArray()`.

## English Explanation

**Why it happens:**

```javascript
let arr = [1, 2, 3];
console.log(typeof arr);  // "object" - NOT a bug!
console.log(typeof {});   // "object" - same!
```

**Reason:** Arrays are **special objects** with numeric keys (0,1,2...) + `length` property + array methods.

```
Array behind scenes:
[1,2,3] = { 0:1, 1:2, 2:3, length:3 }
     ↑ Special object with array superpowers
```

**Does it affect usage? NO!**

```javascript
let arr = [1, 2, 3];
arr.push(4);     // Works perfectly!
arr.map(x => x*2); // All methods work!
```

**3 Ways to Check "True Array":**

```javascript
let arr = [1, 2, 3];

// ✅ BEST - Modern standard
Array.isArray(arr);  // true

// ✅ Also good
arr instanceof Array;  // true

// ✅ Most reliable (handles edge cases)
Object.prototype.toString.call(arr) === '[object Array]';  // true
```


## Hinglish Explanation (Quick Reference)

**Kyun "object" aata:**

```
Array = Object with numbers as keys
[1,2,3] = {0:1, 1:2, 2:3, length:3}
typeof sabko "object" bolta hai!
```

**Koi problem nahi:**

```javascript
let list = [10, 20];
list.push(30);  // ✅ Perfectly works
```

**Array check karne ka:**

```javascript
Array.isArray(list)  // true - ye use karo
```

**Galti:**

```javascript
❌ if(typeof arr === "array")  // Kabhi nahi hoga!
✅ if(Array.isArray(arr))     // Hamesha sahi
```


## Summary

**Rule:** `typeof arr = "object"` ✅ Normal hai. Array check = `Array.isArray(arr)`. All methods work perfectly. Next: Objects deep dive!
<!-- <span style="display:none">[^1][^10][^2][^3][^4][^5][^6][^7][^8][^9]</span> -->
# JavaScript Topic 13: `Array.isArray()` vs `instanceof` - Key Differences

Both check if something is an array, but `Array.isArray()` is **100% reliable** while `instanceof` fails in 3 important cases.

## English Explanation

**Core Difference:**
```
Array.isArray()  → Checks INTERNAL array type (most reliable)
instanceof      → Checks prototype chain (can be tricked)
```

### Problem Cases Where `instanceof` Fails:

```javascript
let arr = [1, 2, 3];

// ✅ Both work for normal arrays
Array.isArray(arr);      // true
arr instanceof Array;    // true

// ❌ CASE 1: Different iframe/window (real apps)
let iframe = document.createElement('iframe');
document.body.appendChild(iframe);
let iframeArr = iframe.contentWindow.Array();
iframeArr instanceof Array;     // false ❌
Array.isArray(iframeArr);       // true ✅

// ❌ CASE 2: Modified prototype
let fakeArr = [];
fakeArr.__proto__ = null;
fakeArr instanceof Array;       // false ❌
Array.isArray(fakeArr);         // false (both detect fake)

// ❌ CASE 3: Object pretending to be array
let obj = Object.create(Array.prototype);
obj.push(1);  // Works like array!
obj instanceof Array;    // true ❌ (tricked by prototype)
Array.isArray(obj);      // false ✅ (checks true constructor)
```

**Visual Difference:**
```
Array.isArray() → Internal JS engine check → "Is V8Array?" 
instanceof    → Prototype chain → Array.prototype in chain?
```

**Industry Rule:** Always use `Array.isArray()` - it's what React/Node.js use.

## Hinglish Explanation (Quick Reference)

**Farak:**
```
Array.isArray()  → 100% sahi, hamesha use karo
instanceof      → Kabhi-kabhi jhooth bolta hai
```

**3 Galat Cases:**
```javascript
// 1. Iframe mein
iframeArr instanceof Array    // false ❌
Array.isArray(iframeArr)      // true ✅

// 2. Prototype hataya
fakeArr.__proto__ = null;
fakeArr instanceof Array      // false ❌

// 3. Fake array banaya
obj.__proto__ = Array.prototype;
obj instanceof Array          // true ❌ (galat!)
Array.isArray(obj)            // false ✅
```

**Simple Rule:**
```javascript
❌ if(arr instanceof Array)  // Kabhi mat karo
✅ if(Array.isArray(arr))    // Hamesha yahi use karo
```

## Summary
**Always:** `Array.isArray(arr)` - works everywhere. `instanceof` only for learning. Real code mein sirf `Array.isArray()`! Next: Objects deep dive.

<div align="center">⁂</div>

[^1]: https://stackoverflow.com/questions/12996871/why-does-typeof-array-with-objects-return-object-and-not-array

[^2]: https://www.reddit.com/r/learnjavascript/comments/siwbhh/why_is_my_array_being_declared_as_object/

[^3]: https://www.reddit.com/r/learnjavascript/comments/jafrib/why_consolelogtypeof_array_sometimes_show_object/

[^4]: https://dev.to/pestrinmarco/typeof-array-is-an-object-in-javascript-1p6k

[^5]: https://www.w3schools.com/js/js_typeof.asp

[^6]: https://stackoverflow.com/questions/3787901/why-javascripts-typeof-always-return-object/3789674

[^7]: https://builtin.com/software-engineering-perspectives/javascript-array-typeof

[^8]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

[^9]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

[^10]: https://www.w3schools.com/jsref/jsref_oper_typeof.asp

