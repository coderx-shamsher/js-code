//  IN for in loop hasownproperty in detail

// first we will see the for in loop 
// or yeh loop objects k liye use hota hai 

console.log()
const obj = {
     1: "hello",
        2: "linux",
         3 : "server",
            4 : "admin"
}

// we need the values from the object or yeh ham keys ki helps he kr sakte hain without loop ! 
console.log(obj[1])  // hello
console.log(obj[2])  // linux
console.log(obj[3])  // server
console.log(obj[4])  // admin

// but agar hamare pass bohat sare keys hain to ham loop ka use kr k easily access kr sakte hain
console.log()

// using the for in loop 
  let keys 
  for (keys in obj) {
    console.log(`Key : ${keys}  Value : ${obj[keys]} `)
  }
  console.log()

//   Problem kya hoti hai bina is line ke? bina object.hasOwn()  function 
// if (!Object.hasOwn(object, key)) continue; 
// agar hamare object me prototype se koi extra properties aa jati hain to wo bhi loop me aa jati hain
// or wo hamare liye problem create kr sakti hain

// exmple of prototype property , object 
// or without hasownproperty function for in loop 
let parentob ={
     1: "parent_hello",
}

// creating prototype object from the parent object its child object 
let childob = Object.create(parentob)

// now we create a new object with the parent object as prototype of parentob  childob 

// and we set new key value pairs in the child object 
childob.name1 = 'child_hello'

console.log()
console.log(' without hasOwn function ')
for (const key in childob) {
     console.log(` Key : ${key}  Value : ${childob[key]} `)
    // console.log(childob[key])
}

// now hame childob ki ton key value pairs he chahiye without prototype properties means parentob ki keys and values nhi cahiye , prototype properties nhi chahiye
// to iske liye ham hasownproperty function ka use krte hain or now hasOwn function use krte hain 


console.log()
console.log(' with hasOwn function ')

// adding more key value pairs to child object
childob.age = 15 
childob.classname = '10th_grade'


let childkeys 
for (childkeys in childob){
  if(!Object.hasOwn(childob, childkeys)) continue
    {
     console.log(` Key : ${childkeys}  Value : ${childob[childkeys]} `)
    }
}
console.log()

// syntax of for in !object.hasOwn()
/**
 * for (variable in myobj)  {
        if (!Object.hasOwn(myobj, key)) continue; 
        // loop body
    }
 * 
 */