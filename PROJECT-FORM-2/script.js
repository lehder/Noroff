// document.querySelector("button").addEventListener("click");


document.querySelector("form").addEventListener("submit", (e) => { 
    e.preventDefault();    

    const name = document.querySelector('#input-name').value;
    const email = document.querySelector('#input-email').value;
    const image = document.querySelector('#input-image').value;
    console.log(name, email, image);

/* Update the card to have values inputed by the user */


document.querySelector('#card-name').innerHTML = name;
document.querySelector('#card-email').innerHTML = email;
document.querySelector('#card-image').src = image;

document.querySelector('#profiles').innerHTML += `
<div class="card">
<img src="${image}"/>
<p>${name}</p>
<p>${email}</p>
</div>
`;

// alert('Profile updated successfully!');

});












/* Dos maneras diferentes de escribir funciones 


function normalFunction() {

} 
*/



/* 
const arrowFunction () => {

}  
*/