const div = document.querySelector("#myDiv");

div.innerHTML = "<p>Contect written in JavaScriopt</p>"

div.style.backgroundColor = "blue";

div.style.fontSize = "32px";

// div.style.color = "white"

// div.className = "text-white";
// div.classaList.add("text-white");
// div.classList.remove("text-white");
div.clastList.google("text-white");






/* `
background-color
` */
// const background-color = "blue"



//When the div is clicked, toggle the text-white class
//hint
// onClick / addEventListener

/* div.addEventListener("click", () => {
    div.classList.toggle("text-white");
});

div.onClick =  () => {
    div.classList.toggle("text-white");
};
 */


let toggle = true;
div.onClick = () => {
    toggle = !toggle
    if(toggle){
        div.classList.remove("text-white");
        div.classList.add("text-white");
    } else {
        div.classList.add("text-white");
        div.classList.remove("text-white");
    }
};

















/* const name = document.querySelector(".name")

function myDiv () {
  name.style.color = "hellow";
} */