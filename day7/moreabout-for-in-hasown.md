
---

## 🧠 Simple Words Me

> **Prototype se aane wali properties ko ignore karne ke liye**

---

## 🤔 Problem kya hoti hai bina is line ke?

`for...in` loop:

* object ki **own properties**
* * **prototype ki properties**
    dono par loop chala deta hai ❗

---

## 🧪 Example

```js
const parent = {
  age: 50
};

const ob = Object.create(parent);
ob.name = "Ali";

for (const key in ob) {
  console.log(key);
}
```

### ❌ Output (problem)

```
name
age   ← prototype se aayi ❌
```

---

## ✅ Correct Way (with `hasOwn`)

```js
for (const key in ob) {
  if (!Object.hasOwn(ob, key)) continue;
  console.log(key);
}
```

### ✔️ Output

```
name
```

---

## 📌 `continue` kya karta hai?

👉 **Current loop iteration ko skip kar deta hai**
Aur next `key` pe chala jata hai.

---

## 🧠 One-Line Yaad Rakhne Wala Rule ❗

> **`Object.hasOwn(obj, key)` =
> “Kya ye property object ki apni hai?”**

---

## 📝 Note (Important)

Tumhare code me:

```js
Object.hasOwn(object, key)
```

Agar loop `ob` pe chal raha hai, to **best practice**:

```js
Object.hasOwn(ob, key)
```

---

## 🎯 Short Interview Answer

> **`for...in` loop prototype properties bhi iterate karta hai,
> isliye `Object.hasOwn()` use karke hum sirf object ki own properties process karte hain.**

---


---

# ✅ 1️⃣ `hasOwnProperty` vs `Object.hasOwn`

## 🔹 `hasOwnProperty()`

```js
obj.hasOwnProperty(key)
```

### ❗ Problems

1. Agar object ka prototype `null` ho:

```js
const obj = Object.create(null);
obj.a = 1;

obj.hasOwnProperty("a"); // ❌ Error
```

2. Agar object ne khud `hasOwnProperty` overwrite kar diya:

```js
const obj = {
  hasOwnProperty: () => false,
  a: 1
};

obj.hasOwnProperty("a"); // ❌ galat result
```

---

## 🔹 `Object.hasOwn()` ✅ (Modern & Safe)

```js
Object.hasOwn(obj, key)
```

### ✔️ Benefits

* Prototype se independent
* Override se safe
* Modern JavaScript (ES2022+)

```js
Object.hasOwn(obj, "a"); // true
```

---

## 🧠 One-Line Difference ❗

> **`hasOwnProperty` risky ho sakta hai,
> `Object.hasOwn()` safe & recommended hai**

---

## 📊 Comparison Table

| Feature         | hasOwnProperty | Object.hasOwn |
| --------------- | -------------- | ------------- |
| Prototype issue | ❌ Yes          | ✅ No          |
| Override safe   | ❌ No           | ✅ Yes         |
| Modern          | ❌ Old          | ✅ New         |
| Recommended     | ❌              | ✅             |

---

# ✅ 2️⃣ `for...in` vs `Object.keys()`

---

## 🔹 `for...in`

```js
for (const key in obj) {
  console.log(key);
}
```

### ⚠️ Behavior

* ✔️ Own properties
* ❌ Prototype properties bhi
* Order guaranteed nahi

---

## 🔹 `Object.keys()` ✅

```js
Object.keys(obj).forEach(key => {
  console.log(key);
});
```

### ✔️ Behavior

* ✔️ Sirf own properties
* ✔️ Predictable order
* ❌ Prototype ignore

---

## 🧪 Example

```js
const parent = { age: 50 };
const obj = Object.create(parent);
obj.name = "Ali";
```

### `for...in`

```
name
age ❌
```

### `Object.keys()`

```
name ✔️
```

---

## 📊 Comparison Table

| Feature         | for...in | Object.keys |
| --------------- | -------- | ----------- |
| Own props       | ✅        | ✅           |
| Prototype props | ❌ Yes    | ❌ No        |
| Order safe      | ❌        | ✅           |
| Modern usage    | ⚠️ Rare  | ✅ Common    |

---

## 🧠 When to use what? 💡

### ✔️ Best Practice (Modern JS)

```js
Object.keys(obj).forEach(key => {
  console.log(key);
});
```

### ✔️ Agar `for...in` use karna ho:

```js
for (const key in obj) {
  if (Object.hasOwn(obj, key)) {
    console.log(key);
  }
}
```

---

## 🎯 Interview Gold Answer ❗

> **Modern JavaScript me hum `Object.hasOwn()` aur `Object.keys()` prefer karte hain
> kyunki ye prototype issues se safe hote hain.**

---

### 📝 Final One-Line Summary

> ❌ Old way → `hasOwnProperty` + `for...in`
> ✅ New way → `Object.hasOwn` + `Object.keys`
