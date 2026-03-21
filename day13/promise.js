// promises in js 

let btn1 = document.getElementById("btn1")

let input = prompt("enter your username")
let promise = new Promise((resolve,reject)=>{
     setTimeout(() => {
        if(input === "coderx"){
            resolve("!Wellcome into the cyber world")

        }
        else{
            reject("OO!!.. you enter the wrong username")
        }
     }, 2000);

})

promise.then((result)=>{
     console.log(result)
})