// calculator function 

function calculator(opr,inputnu1,inputnu2){
      console.log()
      let  help = ` You can use any sign of calculation i give below !!
      or type the name of operation   
      ----------------------------------------------------------------
      Operations ->> 
      
      Addition                  ----->     + 
      Subtraction               ----->     -
      Multiplications           ----->     * 
      Division                  ----->     / 
      Modulus                   ----->     % 
      
      what we need to work ? 
       1)  parameter opr , in this you can define the operator or the sign of your 
          example -->   let opr = '+' 
            or    let opr = 'addition'
      
      2) parameter 1 number input 
         let num1 = 200
          
      3) parameter 2 number input 
        let num2 = 100
        
        ---------------------------------------------------------------------------------------  
   
        -->>> Follow this structure and give the input as i give you instructions !!! 

       ----------------------------------------------------------------------------------------

       :) Thnkx you work with us 
                                    <-------coderx------>
      ` 
      // console.log(typeof help) 
      //   if (){
        //     console.log(help)
        // }
        // else {
          
          
          if(opr == '+' || opr == "addition" || opr == "Addition" ){
            console.log(`The ${opr} of Number1 (${inputnu1}) and Number2 (${inputnu2}) ==> ${inputnu1 + inputnu2}`)
          }
          else if (opr == "-" || opr == 'Subtraction' || opr == "subtraction"){
            console.log(`The ${opr} of Number1 (${inputnu1}) and Number2 (${inputnu2}) ==> ${inputnu1 - inputnu2}`)
            
          }
          else if (opr == "*" || opr == 'Multiplication' || opr == "multiplication"){
            console.log(`The ${opr} of Number1 (${inputnu1}) and Number2 (${inputnu2}) ==> ${inputnu1 * inputnu2}`)
            
          }
          else if (opr == "/" || opr == 'Division' || opr == "division"){
            console.log(`The ${opr} of Number1 (${inputnu1}) and Number2 (${inputnu2}) ==> ${inputnu1 / inputnu2}`)
            
          }
          else if (opr == "%" || opr == 'Modulus' || opr == "modulus"){
            console.log(`The ${opr} of Number1 (${inputnu1}) and Number2 (${inputnu2}) ==> ${inputnu1 % inputnu2}`)
            
          }
      else{
        console.log("your input wrong !!  here is the help menu -->")
        console.log(`What you want to do !? ${help} `)
        
      }
      
      // }
    }
// console.log()

let num1 = 200
let num2 = 10 
// let opr = '+'
// let opr = 'subtraction'
let opr = 'Multiplication'

calculator(opr,num1,num2)
// calculator()