const post = {
    name: "Ludving Alvir",
    content: "Jeg tenker på redbull", 
    craeteDato: "2025-10-14",
};

console.log(post.content);

// add the post to your HTML

const container = document.querySelector(".post-container")
container.innerHTML += ` 
 <div class="post">
  <h2>${post.name}</h2>
  <p>${post.content}</p>
  <p>${post.craeteDato}show this in the format day-month-year</p>
  <p>${post.craeteDato.split("-").reverse().join("-")}</p>
 </div>
`;   

// console.log(post.craeteDato.split("-").reverse().join("-"));

// console.log(new Date(post.craeteDato))

