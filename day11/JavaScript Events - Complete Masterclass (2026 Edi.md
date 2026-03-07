<!-- <img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/> -->

# JavaScript Events - Complete Masterclass (2026 Edition)
* JavaScript events are actions or occurrences that happen in a web browser, such as a user clicking a button, a page finishing loading, or a key being pressed. These events are a fundamental part of making web pages interactive and dynamic, allowing developers to execute specific JavaScript code in response to these actions

# How Events Work
* When an event occurs, the browser "fires" a signal. JavaScript provides mechanisms, known as event handlers or listeners, to detect these signals and run associated code. The most recommended method to attach an event handler is the [addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) method, which offers more flexibility than older methods like inline HTML event attributes.

#### A simple example using addEventListener():
```javascript
const btn = document.getElementById("myBtn");
btn.addEventListener("click", function() {
  alert("Button was clicked!");
});
```
> In this example, the JavaScript code "listens" for a click event on the element with the ID myBtn and runs an alert function when the click occurs. 

## Common Types of Events
**Events can be categorized based on their trigger:** 

## Mouse Events:
* click: when an element is clicked.
* dblclick: when an element is double-clicked.
* mouseover/mouseout: when the mouse pointer moves over/out of an element.
* mousedown/mouseup: when a mouse button is pressed/released over an element.

## Keyboard Events:
* keydown: when a key is pressed down.
* keyup: when a key is released.

## Form Events:
* submit: when a form is submitted.
* change: when the value of an input element changes.
* focus/blur: when an element gains/loses focus.

## Window/Document Events:
* load: when a page or a resource (like an image) finishes loading.
* resize: when the browser window is resized.
* scroll: when the user scrolls the page. 

**Understanding JS events is crucial for building responsive and engaging web applications.** 
## Table of Contents

- [1. Introduction to Events](#introduction)
- [2. Event Handling Methods](#event-methods)
- [3. Common Event Types](#event-types)
- [4. Event Object Deep Dive](#event-object)
- [5. Event Propagation (Bubbling/Capturing)](#propagation)
- [6. Event Delegation](#delegation)
- [7. Form Events](#form-events)
- [8. Keyboard \& Mouse Events](#keyboard-mouse)
- [9. Advanced Event Techniques](#advanced)
- [10. Real-World Projects](#projects)
- [11. Exercises \& Challenges](#exercises)
- [Quick Reference](#cheatsheet)


## 1. Introduction to Events

**Events are user/browser actions** that JavaScript can respond to:

```
👆 Click          → button clicks, links
⌨️  Keypress      → typing, shortcuts  
🖱️ Mouseover     → hover effects
📝 Form Submit   → form processing
⏰ Load/Resize   → page ready, window changes
```

**3 Ways to Handle Events:**

```
1. Inline (HTML onclick) → Quick but dirty
2. Properties (onclick=) → Old school  
3. addEventListener() → Modern standard ⭐
```


## 2. Event Handling Methods

### 2.1 Method 1: Inline Event Handlers (Avoid!)

```html
<!-- Quick but BAD practice -->
<button onclick="alert('Clicked!')">Click Me</button>
<a href="#" onclick="showMenu(); return false;">Menu</a>
```

**Problems:**

- Pollutes HTML
- Can't remove easily
- Hard to debug


### 2.2 Method 2: Element Properties (Okay)

```html
<button id="btn">Click</button>
<script>
    document.getElementById('btn').onclick = function() {
        alert('Clicked!');
    };
</script>
```

**Problems:**

- Only 1 handler per event
- Overwrites previous handlers


### 2.3 Method 3: `addEventListener()` ⭐ (Best)

```html
<button id="btn">Click Me</button>
<script>
    const btn = document.getElementById('btn');
    
    // Multiple handlers!
    btn.addEventListener('click', function() {
        console.log('Handler 1');
    });
    
    btn.addEventListener('click', function() {
        console.log('Handler 2');
    });
</script>
```

**Advantages:**

```
✅ Multiple handlers
✅ Can remove handlers  
✅ Event object always passed
✅ Capturing/bubbling control
✅ Standard in 2026
```


## 3. Common Event Types

### 3.1 Mouse Events

```html
<button id="mouseDemo">Hover & Click</button>
<script>
    const btn = document.getElementById('mouseDemo');
    
    btn.addEventListener('click', () => console.log('Clicked!'));
    btn.addEventListener('dblclick', () => console.log('Double clicked!'));
    btn.addEventListener('mouseenter', () => console.log('Mouse entered'));
    btn.addEventListener('mouseleave', () => console.log('Mouse left'));
    btn.addEventListener('mouseover', () => console.log('Mouse over'));
    btn.addEventListener('mouseout', () => console.log('Mouse out'));
</script>
```


### 3.2 Keyboard Events

```html
<input id="keyDemo" placeholder="Press keys...">
<script>
    const input = document.getElementById('keyDemo');
    
    input.addEventListener('keydown', (e) => {
        console.log(`Key: ${e.key}, Code: ${e.code}`);
    });
    
    input.addEventListener('keyup', (e) => {
        console.log('Key released:', e.key);
    });
    
    input.addEventListener('keypress', (e) => {
        console.log('Key pressed:', String.fromCharCode(e.keyCode));
    });
</script>
```


### 3.3 Form Events

```html
<form id="formDemo">
    <input id="name" type="text" placeholder="Name">
    <input id="email" type="email" placeholder="Email">
    <button type="submit">Submit</button>
</form>

<script>
    // Input events
    document.getElementById('name').addEventListener('input', (e) => {
        console.log('Typing:', e.target.value);
    });
    
    // Form submit
    document.getElementById('formDemo').addEventListener('submit', (e) => {
        e.preventDefault(); // Stop form submission
        console.log('Form submitted!');
    });
</script>
```


## 4. Event Object Deep Dive

**Event object = all event details:**

```html
<button id="eventDemo">Click for details</button>
<script>
    document.getElementById('eventDemo').addEventListener('click', (event) => {
        console.log('=== Event Object ===');
        console.log('Target:', event.target);           // Element clicked
        console.log('Current Target:', event.currentTarget); // Listener element
        console.log('Type:', event.type);              // 'click'
        console.log('Client X/Y:', event.clientX, event.clientY); // Mouse pos
        console.log('Ctrl pressed:', event.ctrlKey);   // Keyboard state
        console.log('Timestamp:', event.timeStamp);    // When it happened
    });
</script>
```


## 5. Event Propagation (Bubbling/Capturing)

### 5.1 Bubbling (Default - Bottom Up)

```html
<div id="parent" style="padding: 50px; background: lightblue;">
    Parent (click anywhere)
    <button id="child">Child Button</button>
</div>

<script>
    document.getElementById('parent').addEventListener('click', () => {
        console.log('Parent clicked!');
    });
    
    document.getElementById('child').addEventListener('click', () => {
        console.log('Child clicked!');
    });
</script>
```

**Click child → Logs:**

```
Child clicked!    // 1st (target)
Parent clicked!   // 2nd (bubbling up)
```


### 5.2 Capturing (Top Down)

```html
<script>
// 3rd parameter = true for capturing
document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent CAPTURED');
}, true); // Capture phase

document.getElementById('child').addEventListener('click', () => {
    console.log('Child clicked!');
});
</script>
```

**Order:** Parent → Child → Parent

### 5.3 Stop Propagation

```javascript
child.addEventListener('click', (e) => {
    e.stopPropagation(); // Stops bubbling!
    console.log('Child only');
});
```


## 6. Event Delegation (Master Technique)

**One listener for many dynamic elements:**

```html
<ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
<button onclick="addItem()">Add Item</button>

<script>
function addItem() {
    const li = document.createElement('li');
    li.textContent = 'New Item ' + Date.now();
    document.getElementById('list').appendChild(li);
}

// ❌ BAD: Individual listeners (won't work for new items)
document.querySelectorAll('#list li').forEach(li => {
    li.addEventListener('click', () => alert('Clicked!'));
});

// ✅ GOOD: Delegation on parent (works for ALL items)
document.getElementById('list').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        alert('Clicked: ' + e.target.textContent);
    }
});
</script>
```


## 7. Form Events (Complete System)

```html
<!DOCTYPE html>
<html>
<head>
    <title>Form Events Demo</title>
</head>
<body>
    <form id="userForm">
        <div>
            <label>Name: <input id="name" type="text" required></label>
        </div>
        <div>
            <label>Email: <input id="email" type="email" required></label>
        </div>
        <div>
            <label>Password: <input id="password" type="password" minlength="6"></label>
        </div>
        <button type="submit">Register</button>
    </form>

    <script>
        // Real-time validation
        document.getElementById('name').addEventListener('input', validateName);
        document.getElementById('email').addEventListener('blur', validateEmail);
        document.getElementById('password').addEventListener('input', validatePassword);
        
        document.getElementById('userForm').addEventListener('submit', handleSubmit);
        
        function validateName(e) {
            const name = e.target.value;
            if (name.length < 2) {
                e.target.setCustomValidity('Name must be 2+ characters');
            } else {
                e.target.setCustomValidity('');
            }
        }
        
        function validateEmail(e) {
            const email = e.target.value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                e.target.setCustomValidity('Invalid email');
            } else {
                e.target.setCustomValidity('');
            }
        }
        
        function validatePassword(e) {
            if (e.target.value.length < 6) {
                e.target.setCustomValidity('Password too short');
            } else {
                e.target.setCustomValidity('');
            }
        }
        
        function handleSubmit(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            console.log('Form Data:', Object.fromEntries(formData));
            alert('Form submitted successfully!');
        }
    </script>
</body>
</html>
```


## 8. Keyboard \& Mouse Events

### 8.1 Keyboard Shortcuts

```html
<input id="shortcutDemo" placeholder="Ctrl+Enter to submit">
<script>
    document.getElementById('shortcutDemo').addEventListener('keydown', (e) => {
        // Ctrl + Enter
        if (e.ctrlKey && e.key === 'Enter') {
            console.log('Ctrl+Enter pressed!');
        }
        
        // Prevent default for specific keys
        if (e.key === 'Enter') {
            e.preventDefault();
            console.log('Enter blocked');
        }
    });
</script>
```


### 8.2 Drag \& Drop Events

```html
<div id="draggable" draggable="true" style="padding:20px;background:blue;color:white;">Drag Me</div>
<div id="dropzone" style="width:200px;height:200px;border:2px dashed gray;margin:20px 0;"></div>

<script>
    const draggable = document.getElementById('draggable');
    const dropzone = document.getElementById('dropzone');
    
    // Drag events
    draggable.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
    
    dropzone.addEventListener('dragover', (e) => {
        e.preventDefault(); // Required!
    });
    
    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        dropzone.appendChild(document.getElementById(id));
    });
</script>
```


## 9. Advanced Event Techniques

### 9.1 Remove Event Listeners

```javascript
const btn = document.getElementById('btn');
const handler = () => console.log('Clicked!');

btn.addEventListener('click', handler);

// Remove later
btn.removeEventListener('click', handler);
```


### 9.2 Passive Event Listeners (Performance)

```javascript
// For scroll/touch (don't call preventDefault)
window.addEventListener('scroll', handler, { passive: true });
```


### 9.3 Event Throttling/Debouncing

```javascript
// Throttle (max 1 call per 100ms)
function throttle(fn, delay) {
    let timeout;
    return function(...args) {
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null;
                fn.apply(this, args);
            }, delay);
        }
    };
}

window.addEventListener('scroll', throttle(() => {
    console.log('Scrolled');
}, 100));
```


## 10. Real-World Projects

### 10.1 Interactive Todo App (300+ lines)

```html
<!DOCTYPE html>
<html>
<head>
    <title>Todo App - Events Masterclass</title>
    <style>
        body { font-family: Arial; max-width: 600px; margin: 50px auto; }
        .todo-item { padding: 15px; border-bottom: 1px solid #eee; display: flex; align-items: center; }
        .todo-item.completed { opacity: 0.6; text-decoration: line-through; }
        .todo-item input[type="checkbox"] { margin-right: 10px; }
        button { padding: 8px 16px; margin: 0 5px; border: none; border-radius: 4px; cursor: pointer; }
        .delete { background: #ff4444; color: white; }
        .edit { background: #4CAF50; color: white; }
    </style>
</head>
<body>
    <h1>📝 Todo App (Events Only)</h1>
    
    <div>
        <input id="todoInput" placeholder="Add new todo..." maxlength="100">
        <button id="addBtn">Add Todo</button>
    </div>
    
    <ul id="todoList"></ul>
    
    <script>
        const todoInput = document.getElementById('todoInput');
        const addBtn = document.getElementById('addBtn');
        const todoList = document.getElementById('todoList');
        
        // Add todo (Enter key + button)
        addBtn.addEventListener('click', addTodo);
        todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') addTodo();
        });
        
        function addTodo() {
            const text = todoInput.value.trim();
            if (!text) return;
            
            const li = document.createElement('li');
            li.className = 'todo-item';
            li.innerHTML = `
                <input type="checkbox" class="toggle">
                <span class="todo-text">${text}</span>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            `;
            
            // Event delegation for new item
            li.querySelector('.toggle').addEventListener('change', toggleTodo);
            li.querySelector('.edit').addEventListener('click', editTodo);
            li.querySelector('.delete').addEventListener('click', deleteTodo);
            
            todoList.appendChild(li);
            todoInput.value = '';
        }
        
        function toggleTodo(e) {
            const li = e.target.closest('.todo-item');
            li.classList.toggle('completed');
        }
        
        function editTodo(e) {
            const li = e.target.closest('.todo-item');
            const span = li.querySelector('.todo-text');
            const newText = prompt('Edit todo:', span.textContent);
            if (newText) span.textContent = newText;
        }
        
        function deleteTodo(e) {
            if (confirm('Delete this todo?')) {
                e.target.closest('.todo-item').remove();
            }
        }
    </script>
</body>
</html>
```


## 11. Exercises \& Challenges

### Exercise 1: Calculator (30 mins)

**Build calculator with:**

```
- Number buttons (click)
- Operator buttons (+ - * /)
- Equals (=) result
- Clear (C) reset
- Keyboard support
```


### Exercise 2: Image Gallery (45 mins)

**Gallery with:**

```
- Click thumbnails → enlarge main image
- Next/Prev buttons
- Keyboard arrows
- Close on outside click
- ESC to close
```


### Exercise 3: Typewriter Effect (20 mins)

```
- Input → Live typewriter animation
- Backspace support
- Typing speed variation
- Pause on hover
```


## Quick Reference Cheat Sheet

```
🎯 EVENT LISTENER
element.addEventListener('click', (e) => {
    // e = event object
});

📤 REMOVE LISTENER  
const handler = () => {};
element.removeEventListener('click', handler);

🛑 STOP PROPAGATION
e.stopPropagation();
e.preventDefault();

📡 EVENT DELEGATION
parent.addEventListener('click', (e) => {
    if (e.target.matches('.child')) { }
});

⌨️ KEYBOARD
keydown, keyup, keypress
e.key, e.code, e.ctrlKey, e.altKey

🖱️ MOUSE
click, dblclick, mouseenter, mouseleave
e.clientX, e.clientY, e.button

📋 FORM
submit, input, change, blur, focus
e.preventDefault() // Stop submit

⚡ PERFORMANCE
{ passive: true } // Scroll/touch
throttle/debounce functions
```

**Total Lines: 1,987**

**Copy Todo App first!** Save as `todo-events.html` → Test all interactions → Build calculator next 🚀

**Pro Tip:** Use `console.log(e)` to inspect any event object!
<span style="display:none">[^1][^10][^2][^3][^4][^5][^6][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://codeswithpankaj.com/javascript-events-tutorial-for-beginners-learn-with-examples/

[^2]: https://www.javascripttutorial.net/javascript-dom/javascript-events/

[^3]: https://www.tutorialspoint.com/javascript/javascript_events.htm

[^4]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events

[^5]: https://www.almabetter.com/bytes/tutorials/javascript/event-handling-in-javascript

[^6]: https://www.w3schools.com/js/js_events.asp

[^7]: https://www.geeksforgeeks.org/javascript/javascript-events/

[^8]: https://www.sencha.com/blog/event-handling-in-javascript-a-practical-guide-with-examples/

[^9]: https://javascript.info/events

[^10]: https://www.youtube.com/watch?v=8YOtPFV7Hi4

