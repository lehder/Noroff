const button1 = document.querySelector("#btn-1");
const button2 = document.querySelector("#btn-2");


button1.addEventListener("click", ()=> {
  console.log("The section was opened");
  alert("The section was opened")
} );

button2.addEventListener("click", () =>  {
  console.log("button 2 was clicked");
  alert("button 2 was clicked")
} );



