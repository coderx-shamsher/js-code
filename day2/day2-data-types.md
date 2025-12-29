## English (short):
* A data type is the kind of a value in JavaScript, like text, number, or true/false.
Type simply means “what category this value belongs to” (for example: "Ali" is a string, 10 is a number).

## Hinglish (short):
* Data type ka matlab hota hai value kis type ki cheez hai—jaise text, number, ya true/false.
Type bas yeh batata hai value ka “category” kya hai (jaise "Ali" string hai, 10 number hai)





***

# README.md — Data Types in JavaScript (English + Hinglish)

## What is a Data Type? (First principles)

Data type ka matlab: value ka “kind/type” kya hai.  
Jaise real life mein: “20” ek number hai, “Ali” ek name (text) hai, aur true/false ek yes/no hai.[3]

JavaScript mein variable ek box jaisa hota hai, aur data type batata hai box ke andar kya cheez rakhi hui hai.[3]

***

## The 8 Data Types (big picture)

JavaScript data types:

### Primitive (simple, single value)
- `string`
- `number`
- `bigint`
- `boolean`
- `undefined`
- `null`
- `symbol`[1][3]

### Non-primitive (collection/complex)
- `object` (includes objects, arrays, functions, dates, etc.)[1][3]

ASCII visual:

```
JS Types
├─ Primitive (7)
│  ├─ string
│  ├─ number
│  ├─ bigint
│  ├─ boolean
│  ├─ undefined
│  ├─ null
│  └─ symbol
└─ Object (1 big category)
   ├─ plain object {}
   ├─ array []
   ├─ function () {}
   └─ many others...
```


***

## The “type check” tool: `typeof`

`typeof` operator se pata chalta hai value ka type kya hai (it returns a string like `"number"`, `"string"` etc.).[1][3]

```js
console.log(typeof "Ali");   // "string"
console.log(typeof 123);     // "number"
console.log(typeof true);    // "boolean"
```
Why it works: `typeof` runtime pe value ko inspect karta hai and type ka name string form mein return karta hai.[3][1]

***

## Primitive Types (what you’ll use daily)

## 1) String (text)

String = text, quotes ke andar hota hai.[1][3]

```js
const name = "Ali";      // double quotes
const city = 'Amritsar'; // single quotes

console.log(name);       // Ali
```

Common mistakes:
- Quotes bhool jana:
  ```js
  const name = Ali; // ❌ Ali is treated as a variable name, not text
  ```
- Number ko quotes mein rakh diya:
  ```js
  const age = "18"; // string, not number
  ```
  `typeof age` => `"string"`[1]

Interactive check:
- `"10" + 5` ka output kya hoga? (Hint: string + something often becomes string concatenation.)

***

## 2) Number (integers + decimals)

JavaScript mein `number` type both integer and decimal handle karta hai.[3][1]

```js
let price = 99.5;
let count = 3;

console.log(price * count); // 298.5
```

Why it works: `*` operator numbers ko multiply karta hai, and result bhi number hota hai.[3]

Common mistakes:
- `+` operator confusion:
  ```js
  console.log("10" + 5); // "105" (string join)
  console.log(10 + 5);   // 15 (number add)
  ```
  Reason: `"10"` string hai, so `+` concatenation ban jata hai.[1][3]

***

## 3) BigInt (very large integers)

`bigint` huge integers ke liye hota hai (normal number limit ke beyond).[3][1]

```js
const big = 9007199254740993n; // note the 'n' at the end
console.log(typeof big);       // "bigint"
```

Common mistakes:
- `bigint` ko `number` ke saath directly mix karna:
  ```js
  // 10n + 5  // ❌ TypeError (BigInt + Number)
  ```
  Fix: dono ko same family mein lao (either both BigInt or both Number).[3]

***

## 4) Boolean (true/false)

Boolean = sirf 2 values: `true` or `false`.[1][3]

```js
const isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome!");
}
```

Why it works: `if (...)` condition expects a true/false decision; `true` means block run.[3]

Common mistakes:
- `"false"` string ko false samajh lena:
  ```js
  const x = "false"; // this is a string, not boolean
  ```

***

## Special Primitive Types (super important)

## 5) undefined (value not assigned yet)

Agar variable declare kiya but value assign nahi ki, it becomes `undefined`.[1][3]

```js
let result;
console.log(result);        // undefined
console.log(typeof result); // "undefined"
```

Beginner mistake:
- `undefined` ko 0 ya empty string samajhna.

---

## 6) null (intentional “nothing”)

`null` ka meaning: “yahan intentionally kuch bhi nahi hai”.[1][3]

```js
let selectedUser = null; // no user selected yet
console.log(selectedUser); // null

```
typeof null ka "object" aana JavaScript ka old bug / historical mistake hai—null actually “no value / empty reference” hota hai, real object nahi.
​
Socho null ka matlab hai: “yahan pe koi cheez nahi hai” (intentionally).
​
But JavaScript ke starting days mein internal system ne null ko galti se object-category jaisa mark kar diya, isliye typeof null aaj bhi "object" return karta hai.
​

## --> Why it’s not fixed?
Because purani websites aur codebases ne years tak is behavior par depend kiya, so change karne se bohot saara old code break ho sakta hai (backward compatibility issue).
​

How to correctly check for null
typeof use na karo null check ke liye; instead strict equality use karo:
​

js
let a = null;

console.log(typeof a);     // "object"  (quirk/bug)
console.log(a === null);   // true      ✅ correct null check
Quick memory line (Hinglish)
undefined = “value assign hi nahi hui abhi”
​

null = “intentionally empty / nothing”
​



Very common confusion:
- `typeof null` returns `"object"` (historical JavaScript quirk).[4][3]

Quick memory line:
- `undefined` = “not set yet”
- `null` = “set to nothing on purpose”[3]

***

## 7) symbol (unique identifier)

`symbol` unique IDs banane ke kaam aata hai, even if description same ho.[1][3]

```js
const id1 = Symbol("userId");
const id2 = Symbol("userId");

console.log(id1 === id2); // false (always unique)
```

Why it works: har `Symbol()` call ek new unique value create karta hai.[3]

***

## Object Type (the big one for dev journey)

## 8) object (collections + real-world structures)

Object = key-value pairs. Think: “profile card” (name, age, city).[1][3]

```js
const user = {
  name: "Ali",
  age: 18
};

console.log(user.name); // Ali
```

Why it works:
- `user` ek object hai.
- `user.name` means object ke andar `name` key ki value.[3]

### Arrays (also object type)

Array = ordered list.

```js
const fruits = ["apple", "mango", "banana"];
console.log(fruits[0]); // apple
```

Why it works: arrays index-based hote hain (0 se start).[1][3]

### Functions (also treated as object type)

In JavaScript, functions are a special kind of object; `typeof` usually returns `"function"`.[6][3]

```js
function add(a, b) {
  return a + b;
}

console.log(typeof add); // "function"
```

***

## Beginner “must-know” concept: Primitive vs Object (copy behavior)

Primitives copy by value (independent copy), objects/arrays copy by reference (shared).[3]

Flow visual:

```
Primitive:
a = 5
b = a   -> b gets its own 5

Object/Array:
arr1 = [1,2]
arr2 = arr1 -> arr2 points to same list
```


***

## Mini interactive quiz (answer in one line each)

1) `typeof "10"` ?[1]
2) `typeof 10n` ?[4]
3) `typeof null` ? (trick)[4]
4) `"10" + 5` output? (concept: string + number)[1]

***

## Summary (Data Types)

JavaScript mein **8 data types** hote hain: 7 primitive (`string`, `number`, `bigint`, `boolean`, `undefined`, `null`, `symbol`) + 1 non-primitive (`object`).[3][1]
`typeof` se type check hota hai, but `typeof null` ka result `"object"` hota hai (quirk).[4][3]
Dev journey mein sabse zyada use hoga: `string`, `number`, `boolean`, `object`, `array`, plus `null/undefined` handling.[3]

***



<!-- 
{ 
    

[1](https://www.w3schools.com/js/js_datatypes.asp)
[2](https://www.geeksforgeeks.org/javascript/javascript-data-types/)
[3](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures)
[4](https://javascript.info/types)
[5](https://www.w3schools.com/js/js_types.asp)
[6](https://www.tutorialrepublic.com/javascript-tutorial/javascript-data-types.php)
[7](https://www.tutorialspoint.com/javascript/javascript_data_types.htm)
[8](https://www.programiz.com/javascript/data-types)
[9](https://www.youtube.com/watch?v=UmSpfdxu3ro)
[10](https://www.youtube.com/watch?v=L9-3VBOjNH4)
} -->