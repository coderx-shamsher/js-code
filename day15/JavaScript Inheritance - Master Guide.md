<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# JavaScript Inheritance - Master Guide

## 🎯 What is Inheritance? (Easy + Technical)

**Easy**: Inheritance is like a **family tree** for code. Child classes **inherit traits** (properties/methods) from parent classes, then add their own special features.

**Technical**: Child class (`extends Parent`) gets access to parent's `constructor`, properties, and methods via the **prototype chain**. `super()` calls parent constructor/methods.

## 🏗️ Basic Code Examples (Master These 3 Patterns)

### 1. Simple Inheritance (Car → SportsCar)

```javascript
class Car {                    // PARENT (Base class)
  constructor(brand) {
    this.brand = brand;
    this.speed = 0;
  }
  
  accelerate() {
    this.speed += 10;
    console.log(`${this.brand} now at ${this.speed}km/h`);
  }
}

class SportsCar extends Car {  // CHILD (inherits everything)
  constructor(brand, maxSpeed = 300) {
    super(brand);              // MUST call parent constructor first
    this.maxSpeed = maxSpeed;
  }
  
  turboBoost() {               // NEW child method
    this.speed += 50;
    console.log(`${this.brand} TURBO! ${this.speed}km/h`);
  }
}

const ferrari = new SportsCar("Ferrari");
ferrari.accelerate();  // Inherited: "Ferrari now at 10km/h"
ferrari.turboBoost();  // Child: "Ferrari TURBO! 60km/h"
```


### 2. Method Overriding (Customize Parent Behavior)

```javascript
class Animal {
  constructor(name) { this.name = name; }
  makeSound() { console.log(`${this.name} makes a sound`); }
}

class Dog extends Animal {
  makeSound() {                // OVERRIDES parent method
    super.makeSound();         // Call parent version first
    console.log(`${this.name} barks WOOF!`);
  }
}

const buddy = new Dog("Buddy");
buddy.makeSound();
// "Buddy makes a sound"
// "Buddy barks WOOF!"
```


### 3. Multi-Level Inheritance (Grandparent → Parent → Child)

```javascript
class Vehicle {                // Grandparent
  constructor(wheels) { this.wheels = wheels; }
  start() { console.log("Engine started"); }
}

class Car extends Vehicle {    // Parent
  constructor(brand) {
    super(4);                  // 4 wheels
    this.brand = brand;
  }
}

class ElectricCar extends Car { // Child
  constructor(brand) {
    super(brand);
    this.battery = 100;
  }
  
  charge() { console.log("Charging..."); }
}

const tesla = new ElectricCar("Tesla");
tesla.start();     // Grandparent method
tesla.charge();    // Child method
```


## 🚀 20 Inheritance Practice Tasks (Code Only - No Solutions)

### Beginner (1-5)

1. Create `Shape` parent class with `color` property. `Circle` child calculates `area = π * r²`
2. `Employee` parent → `Manager` child adds `teamSize` property
3. `MediaPlayer` → `VideoPlayer` overrides `play()` to show video controls
4. `BankAccount` → `SavingsAccount` adds `interestRate`
5. `Person` → `Student` overrides `introduce()` to show grade

### Intermediate (6-12)

6. `Vehicle` → `Motorcycle` → `RacingBike` (3-level inheritance)
7. `Product` → `Electronics` with warranty tracking
8. `Logger` → `FileLogger` → `ConsoleLogger` (different log destinations)
9. `GameCharacter` → `Warrior` with special `rageMode()`
10. `Database` → `MongoDB` → `MySQL` (different connection methods)
11. `Shape` → `Rectangle` → `Square` (Square IS-A Rectangle)
12. `User` → `Admin` → `SuperAdmin` (increasing permissions)

### Advanced (13-20)

13. `APIClient` → `GitHubAPI` → `TwitterAPI` (different endpoints)
14. `PaymentProcessor` → `PayPal` → `Stripe` (different charge methods)
15. `Chart` → `BarChart` → `StackedBarChart`
16. `Animal` → `Bird` → `Eagle` with `flySpeed` override
17. `Store` → `OnlineStore` → `Amazon` with `primeDelivery()`
18. `Validator` → `EmailValidator` → `PhoneValidator`
19. `Media` → `Image` → `Avatar` (image resizing logic)
20. `Controller` → `UserController` → `AdminController` (different permissions)

## ✅ Mastery Checklist

```
✅ Understand: extends + super()
✅ Can: Override methods
✅ Can: Multi-level inheritance  
✅ Can: Build 5 practice examples
✅ Bonus: Use private fields (#balance) in inheritance
```

**Pro Tip**: Solve tasks 1, 2, 6, 9, 13 first → covers 90% real-world patterns![^1][^2]
<span style="display:none">[^10][^3][^4][^5][^6][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://www.w3schools.com/js/js_class_inheritance.asp

[^2]: https://www.geeksforgeeks.org/javascript/javascript-inheritance/

[^3]: https://www.w3schools.com/Js/js_class_inheritance.asp

[^4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain

[^5]: https://www.programiz.com/javascript/inheritance

[^6]: https://www.youtube.com/watch?v=DqUPa0D2N78

[^7]: https://javascript.info/class-inheritance

[^8]: https://www.tutorialspoint.com/javascript/javascript_inheritance.htm

[^9]: https://www.youtube.com/watch?v=RVluww1mwrU

[^10]: https://codesignal.com/learn/courses/revisiting-oop-concepts-14/lessons/inheritance-in-javascript

