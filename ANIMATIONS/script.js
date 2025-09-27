/* setTimeout(()=> {
    alert("5secunder has passed")
}, 5000); */

/* const loadBtn = document.querySelector("#load-button");

loadBtn.addEventListener("click", ()=>{
   const loader = document.querySelector(".loader");
   loader.classList.remove("hidden");
   loader.classList.add("show");
    setTimeout(()=> {
    alert("5secunder has passed")
}, 1000); 
}); 

const allBtn = document.querySelector("#alert-button");

allBtn.addEventListener("click", () => {
    setTimeout(() => {
        alert("trhee secons") 
        
    }, 3000);
}) */

const loadBtn = document.querySelector("#load-button");

loadBtn.addEventListener("click", ()=>{
    const loader = document.querySelector(".loader");
    loader.classList.remove("hidden");
    loader.classList.add("show");

     setTimeout(()=> {
     loader.classList.add("hidden")
 }, 2000); 
 }); 
 
const counter = setInterval(() => {
    conunt++;
    console.log(count);
}, 1000);
//Stop the counter after we have counted to 5
setTimeout(() => {
    clearInterval(counter);
}, 5500);



const box = document.querySelector(".absolute");
let left= 0;

setInterval(() => {
    left += 25;
    box.style.left = left + "px";
    if(left > 340) {
        left = 0;
    }
}, 1000);

//make the box return to the start when hitting the end of the screen


