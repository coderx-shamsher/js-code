<!-- <img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/> -->

# **JavaScript Objects - Complete Hands-On Guide** 🚀

## **🎯 What Are JavaScript Objects? (1 Minute Samjhao)**

```
Object = Real-world cheez ka blueprint
Key-value pairs se bana hota hai
Like: { name: "Rahul", age: 25 }
```


## **1. Creating Objects - 5 Practical Ways**

```javascript
// 🔥 #1 Object Literal (90% time yahi use karo)
const person = {
    name: "Rahul",
    age: 25,
    city: "Delhi",
    skills: ["JavaScript", "React"]
};
console.log(person); 
// {name: "Rahul", age: 25, city: "Delhi", skills: ["JavaScript", "React"]}

// #2 Constructor (Old school)
const person2 = new Object();
person2.name = "Priya";
person2.age = 30;

// #3 Object.create()
const person3 = Object.create({
    name: "Amit",
    greet() {
        return `Hello ${this.name}`;
    }
});

// #4 Factory Function (Modern)
function createUser(name, age) {
    return {
        name,
        age,
        info() { return `${name} is ${age}`; }
    };
}
const user1 = createUser("Seema", 28);
```


## **2. Accessing Properties - 3 Golden Rules**

```javascript
const car = { brand: "Toyota", model: "Corolla", year: 2023 };

// ✅ DOT NOTATION (Fast + Readable)
console.log(car.brand);     // "Toyota"
console.log(car.model);     // "Corolla"

// ✅ BRACKET NOTATION (Dynamic keys)
const prop = "year";
console.log(car[prop]);     // 2023

// ✅ Expression ke saath
console.log(car["model"]);  // "Corolla"
console.log(car[`br${'and'}`]); // "Toyota"
```


## **3. Adding \& Updating Properties**

```javascript
const laptop = { brand: "Dell", ram: "16GB" };

// ADD new property
laptop.price = 75000;
laptop["storage"] = "1TB";

// UPDATE existing
laptop.ram = "32GB";

// SHORT HAND (ES6 Magic)
const screenSize = 15.6;
laptop.size = screenSize;  // Same name = auto shorthand
```


## **4. Deleting Properties**

```javascript
const phone = { brand: "iPhone", price: 80000, color: "black" };

// Delete ek property
delete phone.color;
console.log(phone); // {brand: "iPhone", price: 80000}

// Multiple delete
delete phone.brand;
delete phone.price;
```


## **5. Object Methods (Functions Inside Objects)**

```javascript
const student = {
    name: "Rahul",
    marks: [85, 90, 78],
    
    // Method 1: Function keyword
    getAverage: function() {
        const sum = this.marks.reduce((a, b) => a + b);
        return sum / this.marks.length;
    },
    
    // Method 2: ES6 Short-hand (Recommended)
    getGrade() {
        const avg = this.getAverage();
        return avg >= 80 ? "A" : "B";
    },
    
    // Method 3: Arrow function (AVOID inside objects)
    // sayHello: () => console.log(this.name) ❌ this undefined!
};

console.log(student.getAverage()); // 84.33
console.log(student.getGrade());   // "A"
```


## **🔥 THIS KEYWORD - Game Changer!**

```javascript
const bankAccount = {
    balance: 10000,
    owner: "Rahul",
    
    deposit(amount) {
        this.balance += amount;  // this = current object
        return `Deposited ${amount}. New balance: ${this.balance}`;
    },
    
    withdraw(amount) {
        if(amount <= this.balance) {
            this.balance -= amount;
            return `Withdrew ${amount}`;
        }
        return "Insufficient balance";
    }
};

console.log(bankAccount.deposit(5000));  // "Deposited 5000. New balance: 15000"
console.log(bankAccount.withdraw(2000)); // "Withdrew 2000"
```


## **6. Object Destructuring - Daily Superpower**

```javascript
const profile = {
    name: "Rahul",
    age: 25,
    address: {
        city: "Delhi",
        pin: 110001
    }
};

// Basic destructuring
const { name, age } = profile;
console.log(name, age); // "Rahul" 25

// Rename properties
const { name: fullName, age: years } = profile;

// Default values
const { country = "India" } = profile;

// Nested destructuring
const { 
    address: { city, pin } 
} = profile;
console.log(city, pin); // "Delhi" 110001

// Function parameters mein
function greet({ name, age }) {
    return `Hello ${name}, you are ${age}`;
}
console.log(greet(profile)); // "Hello Rahul, you are 25"
```


## **7. SPREAD Operator (...) - Copy + Merge Magic**

```javascript
const user1 = { name: "Rahul", age: 25 };
const user2 = { age: 30, city: "Mumbai" };

// Merge objects
const completeUser = { ...user1, ...user2 };
console.log(completeUser); // {name: "Rahul", age: 30, city: "Mumbai"}

// Copy + update (Immutable)
const updatedUser = { ...user1, age: 26, active: true };
console.log(updatedUser); // {name: "Rahul", age: 26, active: true}
```


## **8. Built-in Object Methods (Production Ready)**

```javascript
const product = { id: 1, name: "Laptop", price: 50000 };

// Object.keys() - Property names
console.log(Object.keys(product)); 
// ["id", "name", "price"]

// Object.values() - Property values
console.log(Object.values(product)); 
// [1, "Laptop", 50000]

// Object.entries() - Key-value pairs
console.log(Object.entries(product)); 
// [["id", 1], ["name", "Laptop"], ["price", 50000]]

// Check property exists
console.log("id" in product); // true

// Shallow copy
const copy = Object.assign({}, product);
```


## **9. Looping Through Objects**

```javascript
const car = { brand: "BMW", model: "X5", year: 2023 };

// Method 1: for...in (Traditional)
for(let key in car) {
    console.log(`${key}: ${car[key]}`);
}

// Method 2: Object.keys() + forEach (Modern)
Object.keys(car).forEach(key => {
    console.log(`${key}: ${car[key]}`);
});

// Method 3: Object.entries() + for...of (Best)
for(let [key, value] of Object.entries(car)) {
    console.log(`${key}: ${value}`);
}
```


## **10. Real-World Examples**

### **Shopping Cart Item**

```javascript
const cartItem = {
    id: 1,
    name: "iPhone 15",
    price: 79999,
    qty: 1,
    
    total() {
        return this.price * this.qty;
    },
    
    increment() {
        this.qty++;
        return this;
    }
};

console.log(cartItem.total());     // 79999
cartItem.increment().increment();
console.log(cartItem.total());     // 239997 (3 qty)
```


### **API Response Handler**

```javascript
const apiData = {
    success: true,
    data: {
        users: [
            { id: 1, name: "Rahul" },
            { id: 2, name: "Priya" }
        ]
    }
};

// Safe nested access + destructuring
const { 
    data: { users } 
} = apiData;

const userNames = users.map(({ name }) => name);
console.log(userNames); // ["Rahul", "Priya"]
```


## **11. Common Patterns (Interview Ready)**

```javascript
// Config object
const appConfig = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retryCount: 3,
    
    isProduction() {
        return process.env.NODE_ENV === "production";
    }
};

// User state management
const userState = {
    isLoggedIn: false,
    user: null,
    
    login(user) {
        this.isLoggedIn = true;
        this.user = user;
    },
    
    logout() {
        this.isLoggedIn = false;
        this.user = null;
    }
};
```


## **✅ Quick Reference Table**

| **Task** | **Code** |
| :-- | :-- |
| Create | `{ key: value }` |
| Access | `obj.property` / `obj["key"]` |
| Add | `obj.newProp = value` |
| Delete | `delete obj.prop` |
| Method | `method() { return this.prop; }` |
| Copy | `{ ...obj }` / `Object.assign({}, obj)` |
| Loop | `for...in` / `Object.entries()` |
| Keys | `Object.keys(obj)` |

## **Hinglish Bottom Line**

```
Object = { key: value } ka dabba
Dot (.) = Fast access
Bracket [] = Dynamic keys
this = Current object
...spread = Copy + merge banao
Methods = Functions object mein

React props, API data, Configs - SAB OBJECTS SE BANE HOTE HAIN!
Daily coding ka 70% objects mein hi hota hai!

Practice: Shopping cart object banao → Methods add → Chain calls → PRO ban gaye!
```

**🎯 Objects = JavaScript ka dil! 1 hafta practice = Interview ready!** 😎
<span style="display:none">[^1][^10][^2][^3][^4][^5][^6][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://www.programiz.com/javascript/object

[^2]: https://www.w3schools.com/js/js_objects.asp

[^3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects

[^4]: https://www.javascript.com/learn/objects

[^5]: https://www.geeksforgeeks.org/javascript/objects-in-javascript/

[^6]: https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript

[^7]: https://www.w3schools.com/js/js_object_definition.asp

[^8]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics

[^9]: https://javascript.info/object

[^10]: https://www.youtube.com/watch?v=rLPwCAqyCAE

