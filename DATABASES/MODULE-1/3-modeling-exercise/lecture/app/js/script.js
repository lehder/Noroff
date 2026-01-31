async function getProducts() {
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
    console.log(data);
    const container = document.querySelector(".container");
    container.innerHTML = "";
    data.forEach((game) => {
      container.innerHTML += `
      <div> 
        <h2>${game.title}</h2>
        <img src="${game.image}" width=200/>
        <p>${game.description}</p>
        <hr/>
        <p>By: ${game.publisher}</p>
        <p> Released: ${game.release_date}</p>
      </div>
      `;
    });
  }
  
  getProducts();