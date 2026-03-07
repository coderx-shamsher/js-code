<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

## while vs do...while (easy comparison)

**Main difference:**

- `while` pehle condition check karta hai, phir body run hoti hai. Agar condition start mein false ho, body **0 times** run ho sakti hai.
- `do...while` pehle body run karta hai, phir condition check karta hai. Isliye body **at least 1 time** zaroor chalegi.


### Quick table

| Feature | `while` | `do...while` |
| :-- | :-- | :-- |
| Condition check | Start (pehle) | End (baad mein) |
| Minimum runs | 0 | 1 |
| Best when | “maybe run” | “must run once” |


***

## Example 1: Condition false at start (biggest difference)

### `while` (0 times run)

```js
let x = 5;

while (x < 3) {
  console.log("while loop running", x);
  x++;
}

console.log("Done");
```

**Why:** `x < 3` is `false` from the beginning (5 < 3 false), so loop body runs **never**.

### `do...while` (1 time run)

```js
let x = 5;

do {
  console.log("do...while running", x);
  x++;
} while (x < 3);

console.log("Done");
```

**Why:** Body runs first (prints once), then condition checks. Condition is false, so it stops **after 1 run**.

***

## Example 2: Same output when condition becomes true initially

### `while`

```js
let i = 1;

while (i <= 3) {
  console.log(i); // 1 2 3
  i++;
}
```


### `do...while`

```js
let i = 1;

do {
  console.log(i); // 1 2 3
  i++;
} while (i <= 3);
```

**Why same here:** Start condition is true (`1 <= 3`), so both behave similarly.

***

## When to use which? (Hinglish rule)

- Use `while` when: “Agar condition true hui tabhi chalana hai.” (safe choice)
- Use `do...while` when: “Ek baar toh chalana hi hai, phir repeat karna hai ya nahi check karunga.”
Example: user input validation (pehle input lo, phir check karo).

***

If you want, apna ek real case batao (like “password input” ya “menu system”), usi pe `while` aur `do...while` dono se example bana dunga.
<span style="display:none">[^1][^10][^11][^12][^13][^14][^2][^3][^4][^5][^6][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/93434503/bf11405c-12f2-4ba6-86e1-953eba0ef670/operators_day2.js

[^2]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/93434503/6fba9e32-bc16-49b7-9286-ca0313784602/image.jpg

[^3]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/93434503/b113dddf-7a95-478b-bf88-c63ce393a428/image.jpg

[^4]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/images/93434503/e6b49da0-d11e-4e87-ae46-11be0aaab059/image.jpg

[^5]: https://www.shiksha.com/online-courses/articles/difference-between-while-and-do-while-loop/

[^6]: https://www.geeksforgeeks.org/java/difference-between-while-and-do-while-loop-in-c-c-java/

[^7]: https://stackoverflow.com/questions/3347001/do-while-vs-while

[^8]: https://testbook.com/key-differences/difference-between-while-and-do-while-loop-in-c-c-plus-plus-java

[^9]: https://www.geeksforgeeks.org/dsa/difference-between-for-while-and-do-while-loop-in-programming/

[^10]: https://stackoverflow.com/questions/20044845/do-while-and-while-comparison

[^11]: https://www.programiz.com/c-programming/c-do-while-loops

[^12]: https://www.reddit.com/r/csharp/comments/tb19nj/dowhile_vs_while_loops/

[^13]: https://www.w3schools.com/c/c_do_while_loop.php

[^14]: https://www.shaalaa.com/question-bank-solutions/differentiate-between-while-and-do-while-statements_230512

