// loops 

/* 

// for loops 
   Syntax (easy)
      for (initialization; condition; update) {
      // loop body
     }

  1. Initialization: let a = 10 (executed once at the start)
  2. Condition: a < 100 (checked before each iteration; if false, loop ends)
  3. Update: a = a + 1 (executed after each iteration)  

  or eeays language me bole to hamne starting point diya , condition diya ki kb tk chlana hai or update diya ki har iteration k bad kya krna hai 

 >>  how the for loop works: 
1. The loop starts by executing the initialization (let a = 10).
2. Before each iteration, it checks the condition (a < 100). If true, it enters the loop body.
3. After executing the loop body, it performs the update (a = a + 1).
4. This process repeats until the condition becomes false.    



*/

for (let a = 10; a < 100; a = a + 1) {
  // console.log(a)
}

// now run krne pr ham dekhdenge ki 10 se lekr 99 tk print hoga but wby  keo ?  hamne condition di hai a<100 so numbers 100 tk nhi print honge ager 100 ki barabar krna hai to 101 don yan condition do 
// a <= 100  its better to understand now 

// lets print some more numbers 
// abhi hamne even numbers print krwaye hain 0 se lekr 100 tk 
for (let n = 0; n <= 100; n = n + 2) {
  // console.log(n)
}

// odd numbers print krwayein 1 se lekr 100 tk
for (let n = 1; n <= 100; n = n + 2) {
  // console.log(n)
}

// table of 2  
for (let num = 1; num <= 10; num = num + 1 ){
  //  console.log(`2 X ${num} = ${2 * num }`)
}

// now table 1 to 10 
for ( let table = 1; table <=10 ; table = table + 1 ){
    // console.log(`Table of ${table} is : `)    
    for ( let multiple = 1; multiple <=10 ; multiple = multiple + 1 ){  
        // console.log( `${table} x ${multiple} = ${table * multiple} `)
    }
    // console.log('-----------------------')
}

// for (a = 1; a <= 10; a = a + 1) {
//   console.log(`Table of ${a} is : -->`)
//   for (t1 = 1; t1 <= 10; t1 = t1 + 1) {
//     console.log(`${a} X ${t1} = ${a * t1}`)
//   }

// }


//  While Loop 

/**  --->>   Syntax  of while loop 
 * 
 *  1)   variable initialization  
 *  
 *  2)   while (condition) {
 *     // loop body
 *  3)    // increment/decrement 
 *  
 *    })   
 *  
 *  >> how the while loop works : 
 *  1 ) we need to initialize the variable before the loop condition we cannot do inside the while loop 
 *  
 *  2) The loop checks the condition (num < 500). If true, it enters the loop body. 
 *  
 * 3) then loop body is executed and my variable is consoled... 
 * 
 *  4) After the consoled my variable its incremented by 10 or wantever the incrementaion you want to do 
 *  
 *  5) This process repeats until the condition becomes false.
 */   

  let num = 200 
    while ( num < 500) {
      console.log(num)
      num = num + 10
    }


    // lets run the reverse loop 
    console.log()
    console.log('Reverse loop from 10 to 0 ') 
    num = 10 
     while (num >=0 ) {
       console.log(num)
       num = num - 1
     } 

     /**
      *  how this reverse loop works 
      * 
      * 1) we initialized the variable num with 10    
      *  2) The loop checks the condition (num >= 0). If true, it enters the loop body.
      *    num ki value 10 hai to condition true hai ton loop body main jaega and tab tak run hoga jb tk condition false nhi ho jati means num > = 0 
      *  3) then loop body is executed and my variable is consoled... 
      *  4) After the consoled my variable its decremented by 1 or wantever the decrementaion you want to do 
      *  5) This process repeats until the condition becomes false. 
      * 
      */ 

      
     // Do while loop 
   
      /**  >> Syntax of do while loop 
       *   
       *   do {
       *      // loop body 
       *      // increment/decrement  
       * }
       *   while (condition)      
       *   
       * 
       *           
       *  >> how the do while loop works :- 
       *  
       *  do  while main pahle do loop body execute hoti hai mean ek bar chaahie to next codition false he ho exmple code dekh kr samjenge .. 
       * 
       *  1 ) the do loop body executed first 
       *  2 ) then increment/ decrement  is done 
       *  3) the condition is checked 
       *  4) if condition is true then again loop body is executed and the increment/decrement is done 
       *  5) this process repeats until the condition becomes false 
       * 
       */
      
      //  simple do while loop with  the true condition 
      console.log()
      let n1 = 10
      do {
         console.log(n1)
         n1 = n1 + 10
      }
       while ( n1 <= 200 )
  
        console.log()

        // now do while loop with false condition but its runs once !!
        do{
           console.log("only once executed !! ")
        }while(false)

          // NOTE : the for and while loops are mostly used do while is used but rarely ! because its complexity of code if you code base is bigger so its hard to debug or even understand and code with do while loop  
          // but its also important to know  :)

 
/** -->> For..of and for..in loops 
 * 
 *  1) for..of loop : 
 *       (values of arrays/strings)
      for...of iterates over values from an iterable like Array or String.
 *  
  *   Syntax :  
  *     for (variable of iterable) {
  *       // loop body
  *     }
  *    
 * 
 *  */          
  console.log()
  console.log('for of loop example ')
  console.log() 
  let values = ['windows', 'macOS', 'Linux', 'Ubuntu-linux', 'Android', 'iOS' ]    
  
  // use the auto complete feature of vscode just type forof and hit tab  it will create the for of loop structure for you

  //  we wil print the all values in the array 
  console.log(values.length)  // first we will check the length of the array

  // Hamne array ki length check ki then in the for of looop hamne elements ke sath ur array values k index values bhi print krawaye
  // this is loop is for objects or strings but ese use kr sakte hain arrays k liye bhi ..
    for (const elements of values ) {
         console.log(` Index-number of " ${elements} "  is :  ${values.indexOf(elements)} `)
  }
  // Why it works: arrays are iterable, loop gives each value one by one.
 

  /** 2) for..in loop :
   * for...in (keys/properties of objects)
In general, for...in is used to iterate over property names (keys).

    * Syntax :
    for (variable in object)  {
        // loop body
    }
        es loop ka use hum objects k properties ko access krne k liye krte hain 
    * 
    * Example :
    // let obj = {a: 1, b: 2, c: 3};  
     using the key name we can access the values of objects 
   * 
   * 
   */

    console.log()
   
    console.log('for in loop example ')
    console.log()
    let ob ={
        name1 : "user_doc",
        profession1 : "developer",
        name2 : "user_admin",
        profession2 : "Linux_Server_Admin"
    }

    for (const key in ob) {
      // if (!Object.hasOwn(object, key)) continue; 
      // this line is cover in detailed now i just skipped it for now 
      const element = ob[key];   // using this we can access the values of the object using the key names. loop values ki get kr kr element variable me store kr raha hai 
      // we will print the key and values of the object 
      console.log(`${key} : ${element}`)
    
    } 
  
    // Array values → for...of
// Object keys → for...in


/// break and continue in loops 
// These control loop flow 
// break = stop loop completely
 console.log()
 console.log('Break statement example ')
 console.log()
let ex = 10 
for ( ex ; ex < 455 ; ex = ex +5 ) {
  if (ex == 355) {
    console.log('Breaking the loop at 355')
    // jaise he loop hit krega at 355 wo loop break kr dega.. thats simple.. 
    break;
  }
  console.log(ex)
  
  }
 
  console.log()
  console.log('Continue statement example ')
  console.log()
// continue = skip current iteration and move to next one 
  
  for (let a = 1; a <= 40; a++){
    if(a == 10 ){
      console.log('Skipping the number 10')
      continue
    }
    if ( a == 20 ){
      console.log('Skipping the number 20')
      continue
    }
    if ( a == 30 ){
      console.log('Skipping the number 30')
      continue
    }
    console.log(a)
    
  }

  // continue jumps to next iteration