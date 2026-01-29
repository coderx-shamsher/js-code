// this is dom script 

console.log("this is DOM's hello ! ")


// the 1) think we do k html file ka title change krna using the js dom manipulation 

document.title = "DOM day8 in js "

// now go in the browser and checkout the title , kiya vo change huya? 

// but yeh document kiya hai 
console.log(document)  // yeh ek object hai 

// ager ham console krte hain document ko to hame hamara html document show hota hai... or ham yeh kisi bhi webpage pr kr sakte hain .. ek or cheej hai 

console.log(window) // yeh ek object hai jo bhot bhot bada hai or ese ham badme or explore kr sakte hain but now hamane document say kam hai 

/**   DOM structure 
 *                    har tag ek node hai 
 *      Window 
 *       |     
 *     document ----- html |-------  title and meta tags 
 *         |                
 *         | -------- body | ---- all elements like div , h1 , p tag      
 */                        


// now jab bhi ham inspect mode me jate hai exmaple main mere html page gya ! , then maine ek element select kiya selector tools say example maine mera div select kiya to jab main select kiya to us par ek   == $0 esi ek id type kuch show hota hai to es ki help say ham us element koi manipulate kr sakte hain .. let try 
// $0.style.backgroundColor = 'lightblue' 
// $0.style.background = "lightgreen"
// 'lightgreen'
// $0.style.text
// undefined
// $0.style.textAlign = "center"
// 'center'
// yeh id us element ki milti hai jise hame select kiya ho to ham use browser mein he manipulate kr sakte hain 

console.log()
// console.log(document.body) //esa karne say ham log body k ander jo bhi hai get kr sakte hain 

// lets console the body childs , so jo bhi element kisi bhi element k ander hai for example mera html -> then head and body or enke ander bhi kuch elements hai yan childs hai example body -> div -> h1  etc too ham div k kitne childs hain ager apki website bhot sare elements hai to kaise pta kre ? 

// ----> document.body.childNodes  es krne say ham body k sare childs ko print kr sakte hain  
// go to browser then inspect then console then paste or type this 
// document.body.childNodes 

// NodeList(17) [text, div.container, text, section, text, div, text, span, text, div, text, comment, text, script, text, script, text] es ek array dekhne ko milega 


// now lets manipulate element by the attribute class name 
// ham use kr rahe hai 
// getElementsByClassName() property or ham classname attribute say us element ko target kr sakate hain..  
// document.body.getElementsByClassName()

