//Changing the element

// const container = document.querySelector(".container");

//console.log(container); 
// container.innerHTML += "<p>New content from JS</P>";

/* let text = "Old text";
text += "New text";
console.log(text); */

//

/* const container = document.querySelector(".container");

console.log(container); 
container.innerHTML += createParagraph(" New content")  */

function createParagraph(content) {
    return `<p class="p-4 m-4 font-large">${content}</p>`;
}

document.querySelector("#p-tag").addEventListener("click", createCard );


/* function createContent(content){
    const container = document.querySelector(".container");

} */

const container = document.querySelector(".container");
console.log(container);
container.innerHTML += createParagraph("New content");

// const container = document.querySelector(".container");

function createCard(imageUrl, name, email) {
    return `  
    <div class="card">
       <img src="${imageUrl}" alt="profile image for ${name}" width=300/>
       <h2>${name}</h2>
       <p>${email}</p>

     </div>;
    `
}

container.innerHTML += createCard(
    "https://purina.cl/sites/default/files/2025-04/razas-de-gatos.jpg",
    "Henrik",
    "henrik@live.no"
);


