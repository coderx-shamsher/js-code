<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# What are async await and how do they work with Promises

Async/await is syntactic sugar over Promises, making asynchronous code read like synchronous code while maintaining non-blocking behavior. It works by pausing function execution at `await` until the Promise settles, then resuming with the resolved value.

## Core Mechanics

Async/await transforms Promise chains into linear code. Under the hood, `async` functions return Promises, and `await` unwraps Promise values.

```javascript
// Promise chain
fetch('/api/user')
    .then(response => response.json())
    .then(user => console.log(user))
    .catch(err => console.error(err));

// Async/await equivalent
async function getUser() {
    try {
        const response = await fetch('/api/user');
        const user = await response.json();
        console.log(user);
    } catch (err) {
        console.error(err);
    }
}
```


## How It Works with Promises

`await` only works with Promises (or thenables). It suspends execution until `.then()` or `.catch()` fires.[^1][^2]

```javascript
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    console.log('Start');
    await delay(1000);  // Pauses here 1s
    console.log('After 1s');
    await delay(2000);  // Pauses here 2s  
    console.log('After 3s total');
}
```

**Execution:** Non-blocking—other code runs during `await` pauses.

## Integration Example

Convert callback to Promise, then use async/await:

```javascript
// Callback style
fs.readFile('file.txt', (err, data) => {
    if (err) return console.error(err);
    console.log(data.toString());
});

// Promise wrapper
const readFile = promisify(fs.readFile);
async function readAsync() {
    try {
        const data = await readFile('file.txt');
        console.log(data.toString());
    } catch (err) {
        console.error(err);
    }
}
```

The attached file discusses HTML semantics (headings/paragraphs), unrelated to async/await. For async file reading in Node.js:[^3]

```javascript
const fs = require('fs/promises');
async function readHTML() {
    const content = await fs.readFile('Working_with_Text_Headings_and_Paragraphs.md', 'utf8');
    console.log('File loaded:', content.slice(0, 200));
}
```


## Benefits Over Raw Promises

- **Readability:** Linear flow vs `.then()` chains.
- **Error handling:** Standard `try/catch`.
- **No callback hell:** Flattens nested async operations.

```
Promise chain 😵:
api1().then(api2).then(api3).catch()

Async/await 😌:
try {
    const a1 = await api1();
    const a2 = await api2();
    const a3 = await api3();
} catch (err) { }
```


## Parallel Execution with Promise.all()

```javascript
async function parallel() {
    const [user, posts, profile] = await Promise.all([
        fetchUser(1),
        fetchPosts(1),
        fetchProfile(1)
    ]);
    // All complete simultaneously
}
```


## Common Pitfalls

- Forgetting `async` keyword: `await` errors.
- Not handling rejections: Always use `try/catch`.
- Top-level await needs modules: `<script type="module">`.


## Practice Example

```html
<!DOCTYPE html>
<html>
<body>
    <button onclick="fetchData()">Load Data</button>
    <div id="result"></div>
    
    <script type="module">
    async function fetchData() {
        try {
            document.getElementById('result').innerHTML = 'Loading...';
            
            const [user, posts] = await Promise.all([
                fetch('https://jsonplaceholder.typicode.com/users/1').then(r => r.json()),
                fetch('https://jsonplaceholder.typicode.com/posts?userId=1').then(r => r.json())
            ]);
            
            document.getElementById('result').innerHTML = `
                <h3>${user.name}</h3>
                <p>Posts: ${posts.length}</p>
            `;
        } catch (error) {
            document.getElementById('result').innerHTML = `Error: ${error.message}`;
        }
    }
    </script>
</body>
</html>
```

Async/await fully leverages Promises for cleaner, more maintainable async code.[^2][^4][^1]

<div align="center">⁂</div>

[^1]: https://www.w3schools.com/js/js_promise.asp

[^2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

[^3]: Working_with_Text_Headings_and_Paragraphs.md

[^4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

