// lets code and learn some array methods

let array = [1,2,3,4]

console.log()

// thats how we can print the values of an array , using the callbackfunction 
// this is A) function expression 
array.forEach(function(values){
      console.log(values)
})
console.log()

// B) arrow function (industry standard)
array.forEach((values)=>{
    console.log(values + 2)
    // just array values ko + kr k print krava raha hun 
})
console.log()


// C) inline short form 
array.forEach(values => console.log(values))

// now es foreach loop ko or bhi samja ja sakta hai but now itna he 


// --> map() ---- > Transform all 
// Work: Har element ko BADLO → NEW array banao
// Use: UI display, data formatting

let items = [11,22,33,44]
console.log()
console.log(`Items => `, items)

let copyarr = items.map((vals)=>{
    return vals + 10
})
// or original array change nhi hoga just usko transform kiya hai ek new array mein 

console.log()
console.log(`Copy with map => `,copyarr)
console.log("original => ","    ",items)

// filter() select matching 
// Work: Condition true wale RAKHO → NEW array
// Use: Search, validation


let ages = [12,15,18,20,22,24,26]

let userallowd = ages.filter((age)=>{
    if(age >= 18 && age >=18){
        return age
    }

})
// 
console.log()
console.log(`ages => ${userallowd}`)

// in short way 
let allwd = ages.filter(age => age > 20 && age < 26 )
console.log()
console.log(allwd)
// eh function ek [] array return krta hai..  krta hai 

let user = ["isactive","notactive","offline","online"]
console.log()

let active = user.filter((a)=>{
      if(a === user[0] ){
        return a
      }
})
console.log(active)

// find() first match 
// Work: Pehla match dhundo → SINGLE item ya undefined
// Use: Login, search single record

// create a object inside an array 
let users = [{id:1001,username:"priya"},
     {id:1002, username:"priyansh"},
      {id:1003,username:"coderx"}
]

let user1 = users.find((u)=>{
      if(u.id === 1001 ){
         return u
      } 
})

// oneline easy 
let user2 = users.find(u=> u.username === "coderx")
console.log()
console.log(user1)
console.log(user2)
console.log()

// update the users array with new values
users = ['coderx',"probb","prince"]
// indexOf()  -- position find elements ka index pta krna 
console.log(`index is => ${users.indexOf("prince")}`)
console.log(`index is => ${users.indexOf("coderx")}`)

// that's all the clean code of these array functions 

console.log()