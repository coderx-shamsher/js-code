>> Sometimes program ko decision lena hota hai: “agar ye true hai to ye karo, warna wo karo.” This is called **conditional statements**.[1]
Your notes say: “execute a block of code based off some condition” — bilkul correct.[2]
JavaScript mein mostly decisions `if`, `if...else`, `if...else if...else`, and short form **ternary operator** se bante hain.[3][4][2]

***

## 1) Condition kya hoti hai? (First principles)
A **condition** is an expression that JavaScript checks and converts to **truthy** or **falsy**.[3]
Agar condition truthy ho, `if` wala code run hota hai; agar falsy ho, `else` wala code run hota hai (agar `else` exist karta ho).[3]
Simple words: condition = “yes/no question” for your code.[1]

### Real-life analogy (easy)
Socho gate pe guard hai:
- “ID card hai?” → yes then entry, no then stop.  
Same concept in code.[1]

***

## 2) JavaScript `if` statement
Your notebook shows syntax like this, which is correct:[5]

```js
if (condition) {
  // execute this code
}
```

### Why it works (step-by-step)
1. JavaScript `condition` evaluate karta hai.[3]
2. Agar condition truthy => curly braces `{}` ke andar code execute.[3]
3. Agar falsy => block skip ho jata hai.[3]

### Mini example
```js
const age = 20;

if (age > 18) {
  console.log("You are adult");
}
```
- `age > 18` is a comparison, result is boolean (`true/false`).[6]
- True hua to message print.[3]

***

## 3) `if...else` statement (two paths)
Your notes: “if true then if block, else else block” — correct.[5]
Syntax:[3]

```js
if (condition) {
  // run when condition is truthy
} else {
  // run when condition is falsy
}
```

### Example (interactive vibe)
```js
const isRaining = false;

if (isRaining) {
  console.log("Take umbrella");
} else {
  console.log("No umbrella needed");
}
```
Why it works: `if` expects truthy/falsy. `false` is falsy, so else runs.[3]

---

## 4) `if...else if...else` (multiple conditions chain)
Your notebook says: “rechecking a set of conditions one by one until one matches” — exactly.[5]
MDN also shows that `else if` is made by nesting multiple `if...else` checks (there is no `elseif` keyword).[3]

### Syntax
```js
if (cond1) {
  // ...
} else if (cond2) {
  // ...
} else if (cond3) {
  // ...
} else {
  // fallback
}
```
This runs **only one branch**: the first condition that becomes truthy wins; baaki skip.[3]

### Your age example (fixed + improved)
Your image shows an age logic; concept sahi hai but order thoda improve karna zaroori hai (warna wrong message aa sakta).[7]

Best practice: ranges ko clear rakho:

```js
const age = 14;

if (age <= 0) {
  console.log("Invalid age");
} else if (age < 13) {
  console.log("Kid");
} else if (age < 18) {
  console.log("Teen");
} else {
  console.log("Adult");
}
```

### Execution flow diagram
```
Start
  |
  v
age <= 0 ? ----yes----> "Invalid age" -> End
  |
 no
  v
age < 13 ?  ----yes----> "Kid" -> End
  |
 no
  v
age < 18 ?  ----yes----> "Teen" -> End
  |
 no
  v
"Adult" -> End
```
This diagram shows “first match wins” clearly.[3]

### Common beginner mistake (very important)
**Wrong order** of conditions.

Example of wrong ordering:
```js
if (age > 0) {
  console.log("Valid age");
} else if (age > 18) {
  console.log("Adult");
}
```
Problem: `age > 0` is already true for age 20, so `age > 18` never runs. This is why ordering matters.[7][3]

Rule: specific checks first, general checks later.

---

## 5) Truthy & Falsy (super important concept)
`if (condition)` does not require `true` literal; it uses **truthiness**.[3]
MDN lists falsy values like `false`, `undefined`, `null`, `0`, `-0`, `NaN`, and `""` (empty string).[3]
Everything else is truthy (almost), including objects and arrays.[8][3]

### Quick table (easy)
- Falsy: `false`, `0`, `""`, `null`, `undefined`, `NaN`[3]
- Truthy: `"0"`, `"false"`, `[]`, `{}`, `1`, `-1`[9][8]

### Practical example (real dev)
```js
const username = "";

if (username) {
  console.log("Welcome " + username);
} else {
  console.log("Please enter username");
}
```
Empty string `""` is falsy so else runs.[3]

***

## 6) Ternary operator (short if/else)
Your image shows ternary format: `condition ? exp1 : exp2` and example `(marks > 10) ? 'yes' : 'No'`. That’s correct.[4][7]
MDN: ternary is the only operator that takes three operands and is often an alternative to `if...else`.[4]

### Syntax
```js
condition ? exprIfTrue : exprIfFalse
```


### Example (marks)
```js
const marks = 12;

const result = marks > 10 ? "Pass" : "Fail";
console.log(result);
```
Why it works: condition true => first expression returned; else => second expression returned.[4]

### When to use ternary (beginner friendly rule)
- Use ternary for **small** decisions (one condition, two simple outcomes).[4]
- If logic becomes long, use normal `if...else` for readability.[1]

***

## 7) Operator knowledge you MUST connect here
Conditions usually use operators you studied:
- Comparison: `> < >= <= === !==` (to create true/false)[6]
- Logical: `&&` and `||` (to combine conditions) [6]

### Example: combine conditions (age range)
```js
const age = 14;

if (age > 10 && age < 15) {
  console.log("You are a kid (range matched)");
}
```
Why it works: `&&` requires both sides truthy.[10]

***

## 8) Common beginner mistakes (and fixes)
- **Missing braces** or wrong brace placement in `if...else`. Fix: always write the full structure first.[3]
- Using `=` instead of `===` inside conditions. `=` assigns; `===` compares.[6]
- Comparing strings/numbers with `==` and getting type conversion surprises; prefer `===`.[11]
- Wrong `else if` order (general condition first) causing later conditions to never run.[3]

***

## 9) Mini practice (interactive)
Predict output first, then run:

```js
// Q1
const x = "";
if (x) console.log("A");
else console.log("B");

// Q2
const age = 20;
console.log(age >= 18 ? "Adult" : "Minor");

// Q3
const n = 0;
if (n) console.log("truthy");
else console.log("falsy");
```
(Answer baad mein compare karna.)[4][3]

***

## Short Summary
Conditional statements let your code make decisions based on truthy/falsy conditions using `if`, `if...else`, and `if...else if...else`.[2][3]
Ternary operator is a short alternative for simple `if...else` decisions: `condition ? a : b`.[7][4]
Most real conditions are built using comparison and logical operators, plus understanding truthy/falsy is essential.[6][3]

***

<!-- 
[1](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals)
[2](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/93434503/6fba9e32-bc16-49b7-9286-ca0313784602/image.jpg?AWSAccessKeyId=ASIA2F3EMEYEREKXO4KL&Signature=gA0tED0W87lHZsql4Tfd95Wnkg0%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCIwhGJHku%2Fiwj5Jed0hsgmEujarRPtxUVsVZUHjEr56gIhAKaolTcL5bL3PTzlIQRKSciIcLq2Zy4X8k4BEisI%2B%2F1wKvwECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQARoMNjk5NzUzMzA5NzA1IgwNia0FIHS68geKO8Yq0ATlpjIe6toYLEx0SMCbQlpKwbcnh4HBpe8CujuwXa5mQimGhpulBIMT98Zc97FAUHuMTbbUrSUE%2F9siJ%2FxLZ%2B3ZWR%2F7PQhYLB%2F23vgELqh4PqJkP9MqcAOttpshdQubAUuLWcFJ7NGinG5lERUwzIUMNBZIvtqYb8TeUd892D47pG%2BSzgLB1Dc3c3dckoVfyzTTKwEgxu4eMAl4WC2FlOrvAgMWhzH2Yc531Q5zollM7HMFSe%2B1QovxXoQHBP8y5mkklmXcX6IUD9FIR%2BpKitTbCtRy7BNU8YapKqjiNHtGIpBxD7KILAM2CsmG9sNqYLAR5D4HIpfSkRoJ1BWpwZLtHLQLHpvx8KCob9fc6n%2FKCu5weq6PCIcZRmcbSSxUFvIO9Nn6R5nt2VPu9sB%2B%2BBGKqrolcg%2BwfmYlzLOLwHrAiBVxiXsURLjI1K0n47aHMrHlZJgUA1nAmqkKaB2i8O0SRni8%2FagwTA1dI6QXu1tP8ROtEkhkX9jzHKddEe5ouG2sCwUZnTQztbqelsgmrQSkH8tUWEiSyCyKDByTf0RKhsnJuTs6QHI%2BCmqEA36psFRwkky4xpD8xbpZlt0po%2BO7vxYcKbB%2BAomKN0gt68UHDt6OKxX6ErOsRABEpc9Nb4mAopj3qAfwBgBasAQopp4R9fJ7NgieAxnDRWd4a2CeBApsHWoleCS05Rg7GZZtL55HI1iprZzO0ar%2BM2rahhTgyEP%2B7Y63mDhcMiBfz7qQApgug%2BnsAsNQeCaPbdygSSNcXLyiyV3RXYt6J0AVWh%2FsMPmK0MoGOpcBFHCoDEdAOZzOa%2FjgVaYEjPJbNw9mHb7hHTjHvZMKa%2BGs1Hkpt7u%2Bnv50Hl7Q6I8OV1hrCKLn2QH5z%2BipEAuns3kqIn6I%2BZRkuSQ6kIYgWWp%2BxaKc%2BDa707HGSRzxNFAr3gifFIJJkvlEBD1fqB6YwofKkwz7TLN5GCD4dYeuO4509Sgx0k4gBLeY4DIlSLcvi3S9tzhLVA%3D%3D&Expires=1767115473)
[3](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
[4](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
[5](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/93434503/b113dddf-7a95-478b-bf88-c63ce393a428/image.jpg?AWSAccessKeyId=ASIA2F3EMEYEREKXO4KL&Signature=zLxSew3bavgNmrPJgW0uYPPoqm8%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCIwhGJHku%2Fiwj5Jed0hsgmEujarRPtxUVsVZUHjEr56gIhAKaolTcL5bL3PTzlIQRKSciIcLq2Zy4X8k4BEisI%2B%2F1wKvwECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQARoMNjk5NzUzMzA5NzA1IgwNia0FIHS68geKO8Yq0ATlpjIe6toYLEx0SMCbQlpKwbcnh4HBpe8CujuwXa5mQimGhpulBIMT98Zc97FAUHuMTbbUrSUE%2F9siJ%2FxLZ%2B3ZWR%2F7PQhYLB%2F23vgELqh4PqJkP9MqcAOttpshdQubAUuLWcFJ7NGinG5lERUwzIUMNBZIvtqYb8TeUd892D47pG%2BSzgLB1Dc3c3dckoVfyzTTKwEgxu4eMAl4WC2FlOrvAgMWhzH2Yc531Q5zollM7HMFSe%2B1QovxXoQHBP8y5mkklmXcX6IUD9FIR%2BpKitTbCtRy7BNU8YapKqjiNHtGIpBxD7KILAM2CsmG9sNqYLAR5D4HIpfSkRoJ1BWpwZLtHLQLHpvx8KCob9fc6n%2FKCu5weq6PCIcZRmcbSSxUFvIO9Nn6R5nt2VPu9sB%2B%2BBGKqrolcg%2BwfmYlzLOLwHrAiBVxiXsURLjI1K0n47aHMrHlZJgUA1nAmqkKaB2i8O0SRni8%2FagwTA1dI6QXu1tP8ROtEkhkX9jzHKddEe5ouG2sCwUZnTQztbqelsgmrQSkH8tUWEiSyCyKDByTf0RKhsnJuTs6QHI%2BCmqEA36psFRwkky4xpD8xbpZlt0po%2BO7vxYcKbB%2BAomKN0gt68UHDt6OKxX6ErOsRABEpc9Nb4mAopj3qAfwBgBasAQopp4R9fJ7NgieAxnDRWd4a2CeBApsHWoleCS05Rg7GZZtL55HI1iprZzO0ar%2BM2rahhTgyEP%2B7Y63mDhcMiBfz7qQApgug%2BnsAsNQeCaPbdygSSNcXLyiyV3RXYt6J0AVWh%2FsMPmK0MoGOpcBFHCoDEdAOZzOa%2FjgVaYEjPJbNw9mHb7hHTjHvZMKa%2BGs1Hkpt7u%2Bnv50Hl7Q6I8OV1hrCKLn2QH5z%2BipEAuns3kqIn6I%2BZRkuSQ6kIYgWWp%2BxaKc%2BDa707HGSRzxNFAr3gifFIJJkvlEBD1fqB6YwofKkwz7TLN5GCD4dYeuO4509Sgx0k4gBLeY4DIlSLcvi3S9tzhLVA%3D%3D&Expires=1767115473)
[6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)
[7](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/93434503/e6b49da0-d11e-4e87-ae46-11be0aaab059/image.jpg?AWSAccessKeyId=ASIA2F3EMEYEREKXO4KL&Signature=1O2%2BTOUK8YzNMtpTjI6WRJaG3R8%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCIwhGJHku%2Fiwj5Jed0hsgmEujarRPtxUVsVZUHjEr56gIhAKaolTcL5bL3PTzlIQRKSciIcLq2Zy4X8k4BEisI%2B%2F1wKvwECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQARoMNjk5NzUzMzA5NzA1IgwNia0FIHS68geKO8Yq0ATlpjIe6toYLEx0SMCbQlpKwbcnh4HBpe8CujuwXa5mQimGhpulBIMT98Zc97FAUHuMTbbUrSUE%2F9siJ%2FxLZ%2B3ZWR%2F7PQhYLB%2F23vgELqh4PqJkP9MqcAOttpshdQubAUuLWcFJ7NGinG5lERUwzIUMNBZIvtqYb8TeUd892D47pG%2BSzgLB1Dc3c3dckoVfyzTTKwEgxu4eMAl4WC2FlOrvAgMWhzH2Yc531Q5zollM7HMFSe%2B1QovxXoQHBP8y5mkklmXcX6IUD9FIR%2BpKitTbCtRy7BNU8YapKqjiNHtGIpBxD7KILAM2CsmG9sNqYLAR5D4HIpfSkRoJ1BWpwZLtHLQLHpvx8KCob9fc6n%2FKCu5weq6PCIcZRmcbSSxUFvIO9Nn6R5nt2VPu9sB%2B%2BBGKqrolcg%2BwfmYlzLOLwHrAiBVxiXsURLjI1K0n47aHMrHlZJgUA1nAmqkKaB2i8O0SRni8%2FagwTA1dI6QXu1tP8ROtEkhkX9jzHKddEe5ouG2sCwUZnTQztbqelsgmrQSkH8tUWEiSyCyKDByTf0RKhsnJuTs6QHI%2BCmqEA36psFRwkky4xpD8xbpZlt0po%2BO7vxYcKbB%2BAomKN0gt68UHDt6OKxX6ErOsRABEpc9Nb4mAopj3qAfwBgBasAQopp4R9fJ7NgieAxnDRWd4a2CeBApsHWoleCS05Rg7GZZtL55HI1iprZzO0ar%2BM2rahhTgyEP%2B7Y63mDhcMiBfz7qQApgug%2BnsAsNQeCaPbdygSSNcXLyiyV3RXYt6J0AVWh%2FsMPmK0MoGOpcBFHCoDEdAOZzOa%2FjgVaYEjPJbNw9mHb7hHTjHvZMKa%2BGs1Hkpt7u%2Bnv50Hl7Q6I8OV1hrCKLn2QH5z%2BipEAuns3kqIn6I%2BZRkuSQ6kIYgWWp%2BxaKc%2BDa707HGSRzxNFAr3gifFIJJkvlEBD1fqB6YwofKkwz7TLN5GCD4dYeuO4509Sgx0k4gBLeY4DIlSLcvi3S9tzhLVA%3D%3D&Expires=1767115473)
[8](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
[9](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
[10](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
[11](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)
[12](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/93434503/bf11405c-12f2-4ba6-86e1-953eba0ef670/operators_day2.js)
[13](https://lia.disi.unibo.it/materiale/JS/developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...html)
[14](https://web.nodejs.cn/en-us/docs/web/javascript/reference/statements/if...else/)
[15](https://www.w3schools.com/jsref/jsref_if.asp)
[16](https://developer.mozilla.org.cach3.com/en-US/docs/Web/JavaScript/Reference/Statements/if...else$revision/733701)
[17](https://www.w3schools.com/js/js_if_ternary.asp)
[18](https://stackoverflow.com/questions/35642809/understanding-javascript-truthy-and-falsy)
[19](https://github.com/mdn/content/blob/main/files/en-us/web/javascript/reference/statements/if...else/index.md?plain=1)
[20](https://www.cs.unb.ca/~bremner/teaching/cs2613/books/mdn/Reference/Operators/Conditional_operator/)
[21](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
[22](https://www.w3schools.com/js/js_if_else.asp)
[23](https://developer.mozilla.org.cach3.com/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator$revision/614703)
[24](https://www.thiscodeworks.com/61808259394cdf00159f0285)
[25](https://developer.mozilla.org.cach3.com/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator$revision/639709)
[26](https://stackoverflow.com/questions/4005614/elseif-syntax-in-javascript) -->