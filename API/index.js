const container = document.querySelector("#pokemon-container");

function createPokemon(pokemon) {
  const row = document.createElement("div");
  row.classList.add("row");
  const button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("btn", "btn-primary", "w-50", "m-4");

  button.addEventListener("click", () => {
    getPokemon(pokemon.url);
  });

  row.append(button);
  container.append(row);
}
async function getPokemon(url) {
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  console.log(data.name);
  const pokemonName = document.querySelector("#pokemon-name");
  pokemonName.innerText = data.name;

  const pokemonImage = document.querySelector("#pokemon-image");
  pokemonImage.src = data.sprites.front_default;
}

async function getData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();
  console.log(data);

  data.results.forEach((pokemon) => {
    createPokemon(pokemon);
  });

  // forEach
  /* data.results.forEach((pokemon) => {
    console.log(pokemon.name);
    container.innerHTML += `<p>${pokemon.name}</p>`;
  }); */

  // Regular for loop
  /* for (let i = 0; i < data.results.length; i++) {
    console.log(data.results[i].name);
  } */

  // for of loop
  /*  for (const pokemon of data.results) {
    const p = document.createElement("p");
    p.innerText = pokemon.name;
    container.append(p);
  } */
}
 getData();



   /*  pokemons = data;
    console.log(pokemons) */
    //forEach
    /* data.response.forEach((pokemon) => {
        console.log(pokemon.name);
    }); */

   //Regular for loop
   /*  for(let i = 0; i < data.results.length; i++) {
        console.log(data.results[i].name);
    } */

    //for of loop
    
    /* for (const pokemon of data.results) {
        console.log(pokemon.name); 

       Print out all pokemon names using createElement
       document.createElement

    } */

    //Print out all pokemon names using createElement
    //document.createElement

    //Este bloque funciona
    /* for (const pokemon of data.results) {
        const p = document.createElement("p");
        p.innerText = pokemon.name;
        container.append(p);
    } */

   //

   //Funciona
   /*  data.results.forEach((pokemon) => {
        console.log(pokemon.name);
        container.innerHTML += `
        <div class="pokemon-container">
        <p>${pokemon.name}</p>
        `
    });  */








