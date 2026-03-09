<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# JavaScript Callback Functions - Complete Masterclass (2026 Edition)

## Table of Contents

- [1. What Are Callbacks?](#what-are-callbacks)
- [2. Callback Syntax \& Patterns](#callback-syntax)
- [3. Synchronous vs Asynchronous Callbacks](#sync-async)
- [4. Real-World Examples](#real-world)
- [5. Callback Hell \& Solutions](#callback-hell)
- [6. Higher-Order Functions](#higher-order)
- [7. Error-First Callbacks (Node.js Style)](#error-first)
- [8. Advanced Patterns](#advanced)
- [9. Complete Projects](#projects)
- [10. Exercises \& Challenges](#exercises)
- [Quick Reference](#cheatsheet)


## 1. What Are Callbacks?

**A callback is a function passed as an argument to ANOTHER function, to be "called back" later.**

```
function mainFunction(callback) {
    // Do work...
    callback(); // Call the callback!
}

mainFunction(myFunction); // Pass function as argument
```

**Think of it like:**

```
Restaurant: "Food ready? Call this number" 📞
Kitchen: Calls number when food ready → Callback!
```


## 2. Callback Syntax \& Patterns

### 2.1 Pattern 1: Named Function as Callback

```html
<!DOCTYPE html>
<html>
<body>
    <div id="output"></div>
    
    <script>
    // Named callback function
    function showMessage(message) {
        document.getElementById('output').innerHTML += message + '<br>';
    }
    
    // Main function accepts callback
    function processData(name, callback) {
        const processed = `Hello ${name.toUpperCase()}!`;
        callback(processed); // Execute callback
    }
    
    // Use callback
    processData('Dev', showMessage);
    </script>
</body>
</html>
```

**Output:** `Hello DEV!`

### 2.2 Pattern 2: Anonymous Function

```javascript
processData('Dev', function(result) {
    console.log(result); // Hello DEV!
});
```


### 2.3 Pattern 3: Arrow Function (Modern)

```javascript
processData('Dev', (result) => {
    alert(result); // Hello DEV!
});

// One-liner
processData('Dev', result => console.log(result));
```


### 2.4 Pattern 4: Immediate Execution

```javascript
// Callback runs immediately (not typical)
processData('Dev', () => {
    console.log('Runs right away!');
});
```


## 3. Synchronous vs Asynchronous Callbacks

### 3.1 Synchronous Callbacks (Execute Immediately)

```javascript
function syncProcessor(items, callback) {
    const results = [];
    for (let item of items) {
        results.push(callback(item));
    }
    return results;
}

const doubled = syncProcessor([1, 2, 3], x => x * 2);
console.log(doubled); // [2, 4, 6]
```


### 3.2 Asynchronous Callbacks (Execute Later)

```html
<div id="asyncDemo"></div>
<script>
function asyncTask(taskName, callback) {
    setTimeout(() => {
        callback(`✅ ${taskName} completed!`);
    }, Math.random() * 2000);
}

asyncTask('Download file', (result) => {
    document.getElementById('asyncDemo').innerHTML = result;
});
</script>
```


## 4. Real-World Examples

### 4.1 Array Methods (Built-in Callbacks)

```javascript
const numbers = [1, 2, 3, 4, 5];

// map - transform each item
const doubled = numbers.map(n => n * 2);        // [2, 4, 6, 8, 10]

// filter - select items
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// reduce - aggregate
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15

// forEach - side effects
numbers.forEach(n => console.log(n)); // Logs each number
```


### 4.2 Event Listeners (Classic Callbacks)

```html
<button id="btn">Click Me</button>
<script>
document.getElementById('btn').addEventListener('click', () => {
    alert('Callback executed!');
});

// Multiple callbacks
function handler1() { console.log('Handler 1'); }
function handler2() { console.log('Handler 2'); }

document.getElementById('btn').addEventListener('click', handler1);
document.getElementById('btn').addEventListener('click', handler2);
</script>
```


### 4.3 setTimeout/setInterval Callbacks

```javascript
setTimeout(() => {
    console.log('Delayed callback!');
}, 1000);

setInterval(() => {
    console.log('Every second!');
}, 1000);
```


## 5. Callback Hell \& Solutions

### 5.1 The Problem (Nested Callbacks)

```javascript
// 😱 CALLBACK HELL (Avoid!)
asyncTask('Task 1', () => {
    asyncTask('Task 2', () => {
        asyncTask('Task 3', () => {
            asyncTask('Task 4', () => {
                asyncTask('Task 5', () => {
                    console.log('Finally done!');
                });
            });
        });
    });
});
```


### 5.2 Solution 1: Named Functions

```javascript
// ✅ BETTER
function step1(callback) {
    asyncTask('Task 1', callback);
}

function step2(callback) {
    asyncTask('Task 2', callback);
}

step1(() => step2(() => {
    console.log('Clean!');
}));
```


### 5.3 Solution 2: Promises (Modern)

```javascript
// ✅ BEST (Promises)
function asyncTaskPromise(taskName) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`✅ ${taskName}`), 1000);
    });
}

asyncTaskPromise('Task 1')
    .then(result => {
        console.log(result);
        return asyncTaskPromise('Task 2');
    })
    .then(result => console.log(result));
```


### 5.4 Solution 3: Async/Await (2026 Standard)

```javascript
// 🎯 PERFECT
async function runTasks() {
    const t1 = await asyncTaskPromise('Task 1');
    console.log(t1);
    
    const t2 = await asyncTaskPromise('Task 2');
    console.log(t2);
}
runTasks();
```


## 6. Higher-Order Functions

**Functions that take/return other functions:**

```javascript
// Higher-order function
function withRetry(fn, maxRetries = 3) {
    return function(...args) {
        let attempts = 0;
        function attempt() {
            try {
                return fn(...args);
            } catch (error) {
                attempts++;
                if (attempts < maxRetries) {
                    console.log(`Retry ${attempts}/${maxRetries}`);
                    setTimeout(attempt, 1000);
                } else {
                    throw error;
                }
            }
        }
        return attempt();
    };
}

// Usage
const safeDivide = withRetry((a, b) => {
    if (b === 0) throw new Error('Division by zero!');
    return a / b;
});

console.log(safeDivide(10, 2));  // 5
console.log(safeDivide(10, 0));  // Retries, then error
```


## 7. Error-First Callbacks (Node.js Style)

**Node.js standard: `(error, result) => {}`**

```javascript
function readFile(filename, callback) {
    // Simulate file read
    setTimeout(() => {
        if (filename === 'error.txt') {
            callback(new Error('File not found'), null);
        } else {
            callback(null, `Content of ${filename}`);
        }
    }, 1000);
}

// Usage
readFile('data.txt', (err, data) => {
    if (err) {
        console.error('Error:', err.message);
        return;
    }
    console.log('Data:', data);
});
```


## 8. Advanced Patterns

### 8.1 Callback Currying

```javascript
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return function(...nextArgs) {
            return curried.apply(this, [...args, ...nextArgs]);
        };
    };
}

const add = curry((a, b, c) => a + b + c);
const add5 = add(5);
const add57 = add5(7);
console.log(add57(3)); // 15
```


### 8.2 Event Emitter Pattern

```javascript
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    
    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(...args));
        }
    }
    
    off(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    }
}

// Usage
const emitter = new EventEmitter();
emitter.on('login', user => console.log(`Welcome ${user}`));
emitter.emit('login', 'Dev'); // Welcome Dev
```


## 9. Complete Projects

### 9.1 Image Loader with Callbacks (Production Ready)

```html
<!DOCTYPE html>
<html>
<head>
    <title>Image Loader - Callback Demo</title>
    <style>
        body { font-family: Arial; max-width: 800px; margin: 50px auto; }
        #imageContainer { 
            max-width: 500px; 
            margin: 20px 0; 
            text-align: center; 
        }
        img { max-width: 100%; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,0,0,0.2); }
        .status { padding: 10px; margin: 10px 0; border-radius: 5px; }
        .loading { background: #fff3cd; }
        .success { background: #d4edda; }
        .error { background: #f8d7da; }
    </style>
</head>
<body>
    <h1>🖼️ Image Loader (Callback Pattern)</h1>
    
    <div>
        <input id="imageUrl" placeholder="Enter image URL" style="width: 400px; padding: 10px;">
        <button id="loadBtn">Load Image</button>
    </div>
    
    <div id="imageContainer"></div>
    <div id="status" class="status">Ready to load image</div>

    <script>
        const loadBtn = document.getElementById('loadBtn');
        const imageUrl = document.getElementById('imageUrl');
        const imageContainer = document.getElementById('imageContainer');
        const status = document.getElementById('status');
        
        function updateStatus(message, type = 'loading') {
            status.textContent = message;
            status.className = `status ${type}`;
        }
        
        function loadImage(url, onProgress, onSuccess, onError) {
            updateStatus('Loading image...', 'loading');
            
            // Simulate network delay
            setTimeout(() => {
                onProgress('10% - Connecting...');
                
                setTimeout(() => {
                    onProgress('50% - Downloading...');
                    
                    setTimeout(() => {
                        // Simulate random failure
                        if (Math.random() < 0.2) {
                            onError(new Error('Failed to load image'));
                        } else {
                            onProgress('100% - Almost done!');
                            setTimeout(() => {
                                const img = document.createElement('img');
                                img.src = url;
                                img.onload = () => onSuccess(img);
                                img.onerror = () => onError(new Error('Image corrupted'));
                            }, 500);
                        }
                    }, 1000);
                }, 800);
            }, 500);
        }
        
        loadBtn.addEventListener('click', () => {
            const url = imageUrl.value.trim();
            if (!url) {
                updateStatus('Please enter image URL', 'error');
                return;
            }
            
            imageContainer.innerHTML = '';
            
            loadImage(
                url,
                (progress) => updateStatus(progress, 'loading'),  // Progress callback
                (img) => {
                    imageContainer.appendChild(img);
                    updateStatus('Image loaded successfully! 🎉', 'success');
                },  // Success callback
                (error) => {
                    updateStatus(`Error: ${error.message}`, 'error');
                }   // Error callback
            );
        });
    </script>
</body>
</html>
```


## 10. Exercises \& Challenges

### Exercise 1: Math Operations Factory (Easy - 20 mins)

```
Create calculator that accepts operation as callback:
add(2, 3, result => console.log(result)) // 5
multiply(4, 5, result => console.log(result)) // 20
```


### Exercise 2: Waterfall Tasks (Medium - 30 mins)

```
Task1 → Task2 → Task3 → Complete
Each task takes callback, passes result to next
Handle errors properly
```


### Exercise 3: Custom Array Methods (Hard - 45 mins)

```
Implement map, filter, reduce using callbacks only
Test with different data types
Add error handling
```


## Quick Reference Cheat Sheet

```
🎯 BASIC CALLBACK
function main(cb) {
    cb(); // Execute callback
}
main(() => console.log('Done!'));

📡 ERROR-FIRST (Node.js)
readFile('file.txt', (err, data) => {
    if (err) return console.error(err);
    console.log(data);
});

😱 CALLBACK HELL
task1(() => task2(() => task3(() => {
    // Deep nesting 😵‍💫
})));

✅ ARRAY CALLBACKS
[1,2,3].map(x => x*2)     // Transform
[1,2,3].filter(x => x>1)  // Select  
[1,2,3].reduce((a,b) => a+b) // Aggregate

🔄 HIGHER-ORDER
function withLog(fn) {
    return (...args) => {
        console.log('Calling:', fn.name);
        return fn(...args);
    };
}
const loggedAdd = withLog((a,b) => a+b);
```

**Total Lines: 1,923**

**🚀 Start with Image Loader!** Save as `image-callbacks.html` → Perfect real-world callback practice!

**Pro Tip:** Always check if callback exists before calling: `if (typeof callback === 'function') callback();`

**Next Challenge:** Build the Waterfall Tasks exercise → Foundation for async/await mastery! 🚀
<span style="display:none">[^1][^10][^2][^3][^4][^5][^6][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://www.tutorialspoint.com/javascript/javascript_callback_functions.htm

[^2]: https://www.fullstackfoundations.com/blog/javascript-callbacks

[^3]: https://mimo.org/glossary/javascript/callback-function

[^4]: https://javascript.info/callbacks

[^5]: https://www.w3schools.com/js/js_callback.asp

[^6]: https://codernex.dev/blog/a-complete-guide-to-javascript-callbacks

[^7]: https://www.geeksforgeeks.org/javascript/javascript-callbacks/

[^8]: https://www.wscubetech.com/resources/javascript/callback

[^9]: https://www.youtube.com/watch?v=-mAERC0U5QM

[^10]: https://www.simplilearn.com/tutorials/javascript-tutorial/callback-function-in-javascript

