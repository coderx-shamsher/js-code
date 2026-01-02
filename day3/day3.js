// Conditional statements / controle statements 

//  1) we see the if statement in  the js  

// if (condition){
//      // body of the agger condition true hai to eh code execute hoga.. 
// } 

let isuser = true
if (isuser) {
    console.log("Wellcome in the console sir..... ")
}

//  ager condition true hogi too code execute hoga.. 
// so this is the only if   note ager condition false hogi to kuj bhi show nhi hoga ... 


// if else  statement 
/* 
   syntax - 

    if (condition) {
     // run when condition is truthy
   } else {
      // run when condition is falsy
   }

*/

let notuser = false
if (notuser) {
    console.log("Welcome in the console ...... ")
}
else {
    console.log("User.... is not available.... ")
}

/// ager condition true hai ton console hai 

let isage = 19

if (isage) {
    console.log("You are allowed !! ")
}
else {
    console.log("You are not allowed !! ")
}

// this example is the is more easy to understand 


// if else else-if chain statements 
/*
  if (cond1) {
  // ...
} else if (cond2) {
  // ...
} else if (cond3) {
  // ...
} else {
  // fallback
}
*/

// is if statements main hamm log multiple conditions de sakte han... 

// users name array 
let users = ['harman_00','sham_01','shamsher_02','jaskaran_03']

// user password list here array 
let passwds = ['harman_00_00','sham_0022','shamsher_0211','jaskaran_031']

let user1 = 'harman_00'
let passwd1 = 'harman_00_00'

user1 = 'gagan_003'
passwd1 = 'gagan_0099'

if (user1 == users[0] && passwd1 == passwds[0]){
    console.log(`Wellcome ${user1} sir you have access here .... `)
}
else if (user1 == users[1] && passwd1 == passwds[1] ){
     console.log(`Wellcome  ${user1} sir  you have access here .... `)
}
else if (user1 == users[2] && passwd1 == passwds[2] ){
     console.log(`Wellcome  ${user1} sir you have access here .... `)
}
else if (user1 == users[3] && passwd1 == passwds[3] ){
     console.log(`Wellcome  ${user1} sir you have access here .... `)
}
else if (user1 == users[4] && passwd1 == passwds[4] ){
     console.log(`Wellcome  ${user1} sir you have access here .... `)
}
// if alll the conditions are not true then else block is runned...
else{
     console.log("you dont have any access .... ")
}


// some true and false conditions methods 
// Falsy: false, 0, "", null, undefined, NaN[3]
// Truthy: "0", "false", [], {}, 1, -1


// example code 
const username = "";

if (username) {
  console.log("Welcome " + username);
} else {
  console.log("Please enter username");
}


// 
// Ternary operator (short if/else)
// this is the short hand of the if else tora complex lag sakta hai laykin..

let code = 10022 
console.log(code == 10022 ? `i got the code ${code}`: `this ${code} is invaild code !! `)

// in the console and we can wrap inside the variable , apni need k hisab say...  

code = 1002345699
let show = code != 1002345699 ? "this code is invaild !" : `I got the code  ${code}`
// now we can console the results using the variable 
console.log(show)

