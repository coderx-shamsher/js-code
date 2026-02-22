<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# DOM Selectors in JavaScript - Complete Guide

## 🎯 **What are DOM Selectors?**

**Selectors** = JavaScript methods to **find HTML elements** in the DOM tree. Like **search functions** that return element objects you can manipulate.

```
HTML: <div id="box" class="container">Hello</div>

JS:   document.getElementById('box') → Returns the div object

```


## 🛠️ **6 Main Selector Methods (Every Line Explained)**

### **1. `getElementById(id)` - FASTEST (By ID)**

```html
<!DOCTYPE html>
<html>
<body>
  <div id="myBox">Original Text</div>
  
  <script>
    // LINE 1: Find element by UNIQUE ID
    const box = document.getElementById('myBox');
    
    // LINE 2: Now box = actual <div> object
    console.log(box);  // <div id="myBox">Original Text</div>
    
    // LINE 3: Change it (works because we have reference)
    box.textContent = 'Changed by ID!';
  </script>
</body>
</html>
```

**What happens:**

- `getElementById('myBox')` → searches entire DOM for `id="myBox"`
- Returns **1 element** (IDs must be unique)
- **Fastest** selector


### **2. `querySelector(selector)` - CSS Power (First Match)**

```html
<p class="message">First message</p>
<p class="message">Second message</p>

<script>
  // LINE 1: CSS selector - finds FIRST .message
  const firstMsg = document.querySelector('.message');
  
  // LINE 2: Can use ANY CSS selector
  const byId = document.querySelector('#myBox');
  const byTag = document.querySelector('p');
  
  firstMsg.textContent = 'First changed!';
  // Result: Only FIRST <p> changes
</script>
```

**CSS Selectors you can use:**

```
#myId          → ID
.className     → Class
tagName       → p, div, h1
.myClass       → Class
div.myClass   → Tag + Class
.class1.class2 → Multiple classes
[attribute]    → <input type="text">
```


### **3. `querySelectorAll(selector)` - Get ALL Matches**

```html
<p>Item 1</p>
<p>Item 2</p>
<p>Item 3</p>

<script>
  // LINE 1: Get ALL <p> elements (NodeList)
  const allParas = document.querySelectorAll('p');
  
  console.log(allParas);  // NodeList(3) [p, p, p]
  console.log(allParas.length);  // 3
  
  // LINE 2: Loop through all (like array)
  allParas.forEach((para, index) => {
    para.textContent = `Item ${index + 1}`;
  });
  
</script>
```

**NodeList vs Array:**

- `forEach()` works
- Convert to array: `Array.from(allParas)`


### **4. `getElementsByClassName(class)` - Live Class List**

```html
<div class="box">Box 1</div>
<div class="box">Box 2</div>

<script>
  // LINE 1: Get by class name (HTMLCollection - LIVE)
  const boxes = document.getElementsByClassName('box');
  
  console.log(boxes);  // HTMLCollection(2)
  
  // LINE 2: Access by index
  boxes[^0].textContent = 'First Box Changed!';
</script>
```


### **5. `getElementsByTagName(tag)` - All Tags**

```html
<p>Paragraph 1</p>
<p>Paragraph 2</p>

<script>
  const paras = document.getElementsByTagName('p');
  paras[^0].style.color = 'red';
</script>
```


## 🎯 **Complete Practice Example (ALL Selectors)**

```html
<!DOCTYPE html>
<html>
<body>
  <!-- HTML Setup -->
  <div id="header" class="title">Header</div>
  <p class="text">First para</p>
  <p class="text">Second para</p>
  <input type="text" id="myInput" placeholder="Type here">
  <button id="btn">Click Me</button>
  
  <script>
    // 1. ID Selector (FASTEST)
    const header = document.getElementById('header');
    header.style.color = 'blue';
    
    // 2. Class Selector (First match)
    const firstPara = document.querySelector('.text');
    firstPara.textContent = 'First changed!';
    
    // 3. All Class Matches
    const allParas = document.querySelectorAll('.text');
    allParas.forEach((p, i) => {
      p.style.fontSize = `${20 + i * 5}px`;
    });
    
    // 4. Attribute Selector
    const input = document.querySelector('input[type="text"]');
    
    // 5. Button Event
    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
      input.value = 'Auto-filled!';
    });
  </script>
</body>
</html>
```

**What happens:**

1. Header → Blue color
2. First para → Text changed
3. Both paras → Different font sizes
4. Input → Auto-fills on click

## 📊 **Selector Speed Ranking (FAST → SLOW)**

| Selector | Speed | Use When |
| :-- | :-- | :-- |
| `getElementById()` | **🥇 Fastest** | IDs |
| `getElementsByClassName()` | 🥈 Fast | Classes |
| `querySelector()` | 🥉 Medium | CSS selectors |
| `querySelectorAll()` | Slowest | Multiple elements |

## 🚀 **Pro Tips**

```
✅ Use getElementById for IDs (always fastest)
✅ querySelector for everything else  
✅ Cache selectors: const btn = document.querySelector('#btn');
✅ querySelectorAll returns NodeList (use forEach)
✅ IDs must be UNIQUE on page
```


## 🎯 **Quick Reference Cheat Sheet**

```javascript
// ID
document.getElementById('myId')

// Class (first)
document.querySelector('.myClass')

// All class
document.querySelectorAll('.myClass')

// Tag
document.querySelectorAll('p')

// Complex
document.querySelector('div.container > p.active')

// Attributes  
document.querySelector('[data-id="123"]')
```

**Practice**: Copy HTML → Open DevTools → Test selectors in Console!

**Selectors = 50% of DOM work** - Master these → DOM Master! 🚀
<span style="display:none">[^1][^10][^2][^3][^4][^5][^6][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://www.reddit.com/r/learnjavascript/comments/8olweu/queryselector_vs_getelementbyid/

[^2]: https://www.geeksforgeeks.org/javascript/queryselector-vs-getelementbyid/

[^3]: https://www.w3schools.com/jsref/met_document_queryselector.asp

[^4]: https://javascript.info/searching-elements-dom

[^5]: https://builtin.com/articles/queryselector-vs-getelementbyid

[^6]: https://www.w3schools.com/jsref/met_element_queryselector.asp

[^7]: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

[^8]: https://dev.to/oeharuki/a-complete-guide-to-javascript-dom-selector-methods-55bb

[^9]: https://dev.to/eidorianavi/queryselector-vs-getelementbyid-gm1

[^10]: https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector

