<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Inheritance Examples (- Real-World Only)

## 🏠 Perfect Beginner Examples (Zero Numbers)

### 1. **Person → Employee** (Most Common Real-World)

```javascript
class Person {                    // PARENT: Basic human
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
  
  walk() {
    console.log(`${this.name} is walking`);
  }
}

class Employee extends Person {   // CHILD: Employee IS-A Person
  constructor(name, age, jobTitle) {
    super(name, age);             // Inherit name, age from Person
    this.jobTitle = jobTitle;
  }
  
  work() {                        // NEW employee ability
    console.log(`${this.name} is working as ${this.jobTitle}`);
  }
  
  greet() {                       // OVERRIDE parent's greet
    super.greet();                // Call parent's version first
    console.log(`My job is ${this.jobTitle}`);
  }
}

const john = new Employee("John", 30, "Developer");
john.greet();    
// "Hi, I'm John"     (inherited + overridden)
// "My job is Developer"
john.work();      // "John is working as Developer"
john.walk();      // "John is walking" (inherited)
```


### 2. **Animal → Dog** (Super Simple)

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  eat() {
    console.log(`${this.name} is eating`);
  }
  
  sleep() {
    console.log(`${this.name} is sleeping`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);                  // Get name from Animal
    this.breed = breed;
  }
  
  bark() {                        // Dog's special ability
    console.log(`${this.name} says WOOF!`);
  }
}

const buddy = new Dog("Buddy", "Golden Retriever");
buddy.eat();   // "Buddy is eating" (from Animal)
buddy.bark();  // "Buddy says WOOF!" (from Dog)
```


### 3. **Vehicle → Car** (Practical Web Dev Example)

```javascript
class Vehicle {
  constructor(brand) {
    this.brand = brand;
    this.isRunning = false;
  }
  
  start() {
    this.isRunning = true;
    console.log(`${this.brand} started`);
  }
  
  stop() {
    this.isRunning = false;
    console.log(`${this.brand} stopped`);
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);                 // Brand from Vehicle
    this.model = model;
    this.doors = 4;
  }
  
  honk() {                        // Car-specific
    console.log(`${this.brand} ${this.model} HONK!`);
  }
}

const toyota = new Car("Toyota", "Camry");
toyota.start();  // "Toyota started" (inherited)
toyota.honk();   // "Toyota Camry HONK!"
```


## 🔑 KEY PATTERNS TO MASTER (No Math)

```
1. PARENT has basic stuff everyone needs
2. CHILD extends PARENT → gets everything free
3. super() = "Hey parent, set up my basics"
4. CHILD adds special abilities
5. OVERRIDE = customize parent's behavior
```


## 🎯 10 MATH-FREE Practice Tasks

1. `User` → `AdminUser` (admin has extra permissions)
2. `Button` → `SubmitButton` (different click behavior)
3. `Message` → `EmailMessage` (adds email-specific fields)
4. `Worker` → `Manager` (manages team members)
5. `Shape` → `ButtonShape` (just color/text, no area)
6. `Player` → `VIPPlayer` (special benefits)
7. `Product` → `DigitalProduct` (no shipping needed)
8. `Logger` → `ConsoleLogger` (logs to console)
9. `API` → `UserAPI` (user-specific endpoints)
10. `Component` → `HeaderComponent` (header-specific methods)

**Start with \#1 \& \#2** → Most practical for web dev! 🚀

These examples use **only text/properties** → perfect for math beginners!

