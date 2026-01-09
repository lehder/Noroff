async function getBlogPost() {
    const res = await fetch("http://localhost:3000/");
    const data = await res.json();
    console.log(data);
    createBlogPost(data);
  }
  
  function createBlogPost(data) {
    const container = document.querySelector("#blog");
    container.innerHTML = "";
    data.forEach((data) => {
      container.innerHTML += `
    <h2>${data.title}</h2>
    <p>${data.content}</p>
    `;
    });
  }
  
  getBlogPost();
  
  document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.querySelector("#input-title").value;
    const content = document.querySelector("#input-content").value;
  
    const res = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title, content: content }),
    });
    const data = await res.json();
    getBlogPost();
  });