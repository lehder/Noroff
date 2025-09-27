const divs = document.querySelectorAll("div")
console.log(divs);

div.innerHTML = "<p></p>";

/* 

for(let i = 0; i < divs.length; i++) {
    divs[i].innerHTML = "<p>Content from JS</p>";
} 

div.forEach((div)=>{
    div.innerHTML = "";
})

*/

const content = [
    "This is the first text",
    "This is the second piece of text",
    "now here comes a third piece",
    "and a last string of content",
    ];
    for(let i = 0; i < divs.length; i++) {
        divs[i].innerHTML = "<p>Content from JS</p>";
    }    
// Using the array forEach
/* div.forEach((div, i) => {
  
    div.innerHTML = "<p>"  + content[0] + "</p>";
    div.innerHTML = "<p>" + content[1] +"</p>";
    div.innerHTML = "<p>"  + content[2] + "</p>";
    div.innerHTML = "<p>"  + content[3] + "</p>";
    div.innerHTML = "<p>"  + content[4] + "</p>";
}); 
 */
divs.forEach((div, i)=>{
    div.innerHTML = "<p>" + content[0] + "</p>"
}) 



console.log(content[0]);
console.log(content[1]);
console.log(content[2]);
console.log(content[3]);


