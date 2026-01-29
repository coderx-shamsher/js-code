// all about the object function code here 

// Object.create() JavaScript ka function hai jo ek naya object banata hai aur us object ka prototype tum khud decide kar sakte ho.

// one line definition (yaad rakh lo !! )
// Object.create(proto) ek naya object banata hai jo proto se inherit karta hai
// yan parent bol skte ho 

// code example 

let object_ptt = {
     hello() {
        console.log("this is ptt hello")
     },
}

let obj_cc = Object.create(object_ptt)

// using the ptt function 
obj_cc.hello()

// so mere cc object k pass koi function nhi hai but maine ptt say inherite kiya hai or use kiya hai 

// 🤔 Use kyun karte hain?
// ✅ 1️⃣ Prototype Inheritance ke liye
const animal = {
  eat() {
    console.log("Eating");
  }
};

const dog = Object.create(animal);
dog.eat(); // Eating


// Clean object (no prototype)
const obj = Object.create(null);

obj.a = 10;
console.log(obj); // { a: 10 }
//  Isme:
// toString
// hasOwnProperty
// koi bhi prototype method nahi hota

// one line summary --> 
// Prototype control chahiye → Object.create() Simple object chahiye → {}