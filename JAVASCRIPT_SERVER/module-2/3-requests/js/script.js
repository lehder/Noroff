async function getArticleNames() {
    const res = await fetch("http://localhost:3000/");
    const data = await res.json();
    console.log(data);
    createButtons(data);
  }
  function createButtons(data) {
    const container = document.querySelector("#button-container");
    container.innerHTML = "";
    data.forEach((item) => {
      const button = document.createElement("button");
      button.innerText = item;
      button.addEventListener("click", async () => {
        console.log(item);
        const res = await fetch("http://localhost:3000/" + item);
        const article = await res.json();
        console.log(article);
        createArticle(article, item);
      });
      container.appendChild(button);
    });
  }
  
  function createArticle(article, name) {
    const container = document.querySelector("article");
    container.innerHTML = `
    <h2>${article.title}</h2>
    ${article.content}
    <br/>
    `;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", async () => {
      const res = await fetch("http://localhost:3000/" + name, {
        method: "DELETE",
      });
      const data = await res.json();
      alert(data.message);
    });
    container.appendChild(deleteButton);
  }
  
  getArticleNames();