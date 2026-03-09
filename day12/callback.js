   // a call back function is a function passed as argument in another function 

function  my_function(name,callback){
       console.log("hello" + " "+ name)
       // let call a callback function inside this function 
       callback()      
}

// this the fist way to give call back function direct as arugment 
my_function("coderx",() => {
  console.log("callback is running") 
})

// another way 
// first create function 
let ArrowFunction = ()=>{
    let timeout = 4000

    setTimeout(() => {
         console.log("this function is callback function.. ")
    }, timeout);     

}
console.log()
my_function("this is coderY",ArrowFunction)


// now lets see one more example of callback function we used before 

let button1 = document.getElementById("btn1")
button1.addEventListener("click",function callback(){
     console.log("you just click box 1... ")

     let input = prompt("you want to add some inside this box !? (yes or no) ")
     if(input === "yes"){
         let box1 = document.getElementById("box1")
         box1.innerHTML = "<small> This Line is addded <strong> using the callback function </strong> </p>"
         box1.style.width = "20rem"
         box1.style.height = "20rem"
     }
     else{
         console.log("okkk thnkx for input..")
     }
     
})