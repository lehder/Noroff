const pets = [
    {
        type: "cat",
        name: "per",
        color: "black",
        alder: 1,
        owner: "Amirt",
    },
    {
        type: "dog",
        name: "luna",
        color: "white",
        alder: 8,
        owner: "lehder",
    },
    {
        type: "rat",
        name: "nelson",
        color: "green",
        alder: 7,
        owner: "Omer",
    },
    {
        type: "lion",
        name: "paul",
        color: "yellow, orange",
        alder: 22,
        owner: "Abishan",
    },
];

const alder = pets.map((pets)=> pets.alder + 1);
console.log(alder);
const petsContainer = document.querySelector("#petList");
petsContainer.innerHTML = `<h1 class="heisann>Pet Hotell</h1>`;

pets.forEach((pets, index) => {
    petsContainer.innerHTML += `
    <ul class="petCard">
      <li> type: ${pets.type}</li>
      <li> name: ${pets.name}</li>
      <li> color: ${pets.color}</li>
      <li> age: ${pets.age}</li>
      <li> Owner: ${pets.owner}</li>
    </ul>
    `;
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const petType = document.getElementById("pet-type").Value;
    const petName = document.getElementById("pet-name").Value;
    const petColor = document.getElementById("pet-color").Value;
    const petAge = document.getElementById("pet-age").Value;
    const petOwner = document.getElementById("pet-owner").Value;
    petsContainer.innerHTML += `
    
    <ul class="petCard">
      <li> type: ${petType}</li>
      <li>name:${petName}</li>
      <li>color:${petColor}</li>
      <li>age:${petAge}</li>
      <li>owner:${petOwner}</li>
    </ul>
    `
    console.log(petName.value);
});







