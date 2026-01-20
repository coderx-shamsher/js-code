<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# **JavaScript Objects - Complete Developer Guide** 🚀

## **🎯 Objects Kya Hai? (1 Line)**

```
Object = Key-value pairs ka collection (Real-world data store)
```


## **📊 Learning Priority (Developer Journey)**

```
✅ MUST (Week 1): Create, Access, Add/Delete properties
✅ IMPORTANT (Week 2): Methods, this keyword, destructuring  
✅ PRO (Week 3): Object methods (keys/values), spread, prototypes
```


## **1. OBJECT CREATION - 4 Ways**

```javascript
// 1. Object Literal (MOST COMMON)
const user = {
    name: "Rahul",
    age: 25,
    city: "Delhi"
};

// 2. Constructor
const user2 = new Object({
    name: "Priya",
    age: 30
});

// 3. Object.create()
const user3 = Object.create({
    name: "Amit"
});

// 4. Function Constructor (Old way)
function User(name, age) {
    this.name = name;
    this.age = age;
}
const user4 = new User("Seema", 28);
```


## **2. ACCESS Properties - 3 Ways**

```javascript
const user = { name: "Rahul", age: 25 };

// ✅ DOT NOTATION (Fastest)
console.log(user.name);  // "Rahul"

// ✅ BRACKET NOTATION (Dynamic keys)
const key = "age";
console.log(user[key]);  // 25

// ✅ With expression
const prop = "na" + "me";
console.log(user[prop]); // "Rahul"
```


## **3. ADD/UPDATE Properties**

```javascript
const user = { name: "Rahul" };

// Add new
user.age = 25;
user["city"] = "Delhi";

// Update existing
user.age = 26;

// Short-hand (ES6)
const name = "Priya";
const user2 = { name, age: 30 }; // {name: "Priya", age: 30}
```


## **4. DELETE Properties**

```javascript
const user = { name: "Rahul", age: 25, city: "Delhi" };

// Delete
delete user.age;
console.log(user); // {name: "Rahul", city: "Delhi"}
```


## **5. OBJECT METHODS (Functions Inside Objects)**

```javascript
const user = {
    name: "Rahul",
    age: 25,
    
    // Method 1: Traditional
    getInfo: function() {
        return `${this.name} is ${this.age}`;
    },
    
    // Method 2: ES6 Short-hand (Recommended)
    greet() {
        return `Hello ${this.name}!`;
    }
};

console.log(user.getInfo()); // "Rahul is 25"
console.log(user.greet());   // "Hello Rahul!"
```


## **🔥 THIS KEYWORD - MOST IMPORTANT**

```javascript
const user = {
    name: "Rahul",
    age: 25,
    
    getInfo() {
        return `${this.name} is ${this.age}`;  // this = current object
    },
    
    birthday() {
        this.age += 1;  // Update current object
        return this.getInfo();
    }
};

console.log(user.birthday()); // "Rahul is 26"
```


## **6. Object Destructuring (DAILY USE)**

```javascript
const user = { name: "Rahul", age: 25, city: "Delhi" };

// Basic destructuring
const { name, age } = user;
console.log(name, age); // "Rahul" 25

// Rename properties
const { name: userName, age: userAge } = user;

// Default values
const { country = "India" } = user;

// Nested destructuring
const { address: { street } } = user;
```


## **7. SPREAD Operator (...) - COPY + MERGE**

```javascript
const user1 = { name: "Rahul", age: 25 };
const user2 = { age: 30, city: "Delhi" };

// Merge
const merged = { ...user1, ...user2 };
console.log(merged); // {name: "Rahul", age: 30, city: "Delhi"}

// Copy + update
const updated = { ...user1, age: 26 };
console.log(updated); // {name: "Rahul", age: 26}
```


## **8. BUILT-IN Object Methods (MUST KNOW)**

```javascript
const user = { name: "Rahul", age: 25 };

// Keys (property names)
console.log(Object.keys(user)); // ["name", "age"]

// Values
console.log(Object.values(user)); // ["Rahul", 25]

// Entries (key-value pairs)
console.log(Object.entries(user)); 
// [["name", "Rahul"], ["age", 25]]

// Check if property exists
console.log('name' in user); // true

// Copy object
const copy = Object.assign({}, user);
```


## **9. LOOPING Objects**

```javascript
const user = { name: "Rahul", age: 25, city: "Delhi" };

// 1. for...in (Properties)
for(let key in user) {
    console.log(`${key}: ${user[key]}`);
}

// 2. Object.keys() + forEach
Object.keys(user).forEach(key => {
    console.log(`${key}: ${user[key]}`);
});

// 3. for...of with entries
for(let [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}
```


## **10. NESTED Objects**

```javascript
const company = {
    name: "TechCorp",
    ceo: {
        name: "Rahul",
        age: 35,
        skills: ["JS", "Node"]
    },
    employees: [
        { name: "Priya", role: "Developer" },
        { name: "Amit", role: "Designer" }
    ]
};

// Access nested
console.log(company.ceo.name);        // "Rahul"
console.log(company.employees[^0].name); // "Priya"

// Update nested (Immutable way)
const updatedCEO = {
    ...company,
    ceo: { ...company.ceo, age: 36 }
};
```


## **11. Real-World Examples**

### **API Response Processing**

```javascript
const apiUser = {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@test.com",
    profile: {
        avatar: "img.jpg",
        verified: true
    }
};

// Clean data
const { id, name, email, profile: { avatar } } = apiUser;
const displayUser = { id, name, email, avatar };
```


### **Form Data Object**

```javascript
const formData = {
    name: "",
    email: "",
    password: "",
    
    validate() {
        const errors = [];
        if(!this.name) errors.push("Name required");
        if(!this.email.includes('@')) errors.push("Invalid email");
        return errors;
    },
    
    reset() {
        this.name = "";
        this.email = "";
        this.password = "";
    }
};
```


## **12. Common Patterns (PRO Level)**

```javascript
// Factory function
function createUser(name, age) {
    return {
        name,
        age,
        greet() {
            return `Hi ${this.name}`;
        }
    };
}

// Config object
const config = {
    apiUrl: "http://localhost:3000",
    timeout: 5000,
    debug: true
};

// State management
const appState = {
    users: [],
    loading: false,
    setLoading(status) {
        this.loading = status;
    }
};
```



## **🚀 Learning Priority Summary**

```
Week 1 ✅: 
- Create (literal), Access (dot/bracket), Add/Delete

Week 2 ✅:
- Methods + this, Destructuring, Spread

Week 3 ✅: 
- Object.keys/values/entries, Looping, Nested objects

Week 4 (PRO):
- Factory functions, Prototypes, Getters/Setters
```


## **Hinglish Bottom Line**

```
Object = { key: value } pairs ka boss
user.name = Fast access
user.greet() = Method call
this = Current object
...spread = Copy + merge
Object.keys() = Property names array

React props, API data, State - SAB OBJECTS!
Daily 80% code objects mein hi likhte hain!

Practice: User object banao → Methods add → Destructure → Master!
```

**🎯 Objects = JavaScript ka 80% kaam! MUST MASTER!** 😎
<span style="display:none">[^1][^10][^2][^3][^4][^5][^6][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://www.geeksforgeeks.org/javascript/javascript-object-methods/

[^2]: https://www.simplilearn.com/tutorials/javascript-tutorial/javascript-objects

[^3]: https://www.w3schools.com/js/js_object_methods.asp

[^4]: https://www.geeksforgeeks.org/javascript/javascript-object-properties/

[^5]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects

[^6]: https://www.w3schools.com/js/js_object_properties.asp

[^7]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics

[^8]: https://www.youtube.com/watch?v=8jkyqWSimDc

[^9]: https://www.youtube.com/watch?v=jBqwGf8g9Kc

[^10]: https://javascript.info/object-methods

