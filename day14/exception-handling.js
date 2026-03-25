// error handling 

// first try and catch 
try {

    // iife function 
    (() =>{
       let input = prompt("enter your username")
       if(input === "coderX"){
        
        // creating new element 
        let new_element1 = document.createElement("div")
        new_element1.id = "newel_1"
        new_element1.style.width = "20rem"
        new_element1.style.height = "20rem"
        new_element1.style.border = "2px solid red"
        new_element1.style.backgroundColor = "lightblue"
        new_element1.innerHTML = `<small> <b> this is New element    </b> </small>`
        
        // appending new node into body... 
        document.getElementById("main").appendChild(new_element1)

        }
 
    })()

} catch (error) {
    console.error(error);
    
}