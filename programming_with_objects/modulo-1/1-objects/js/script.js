/*
| name | author | user | 
Ludvig Alvir

| content | message | dcescription | post |
Jeg tenker på redbull

| date | time | postedAt | createdAt | updatedAt |
14.10-2025

*/

const post = {
    user: "Ludvig Alvir",
    content: "Jeg tenker på redbull",
    createdAt: "2025-10-17",
  };
  console.log(post.content);
  // Add the post to your website using only js
  
  const container = document.querySelector(".post-container");
  container.innerHTML += `
  <div class="post">
      <h2>${post.user}</h2>
      <p>${post.content}</p>
      <p>${post.createdAt.split("-").reverse().join("-")}
  `;
  
  // Pets
  // Books
  // Objects that describes either pets or books, and list them in a "decent" way