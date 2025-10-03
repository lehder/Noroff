const container = document.querySelector("div");

async function getRandomCatFact() {
    const response = await fetch("https://v2.api.noroff.dev/cat-facts/random")
    const data = await response.json();
    //https://v2.api.noroff.dev/cat-facts/random
    //fetch data
    //wait parse data
    //log data

    //look at data
    console.log(data);
    //look at the data inside "data"
    console.log(data.data)
    //look at the corret value
    console.log(data.data.text);

    //add the cat fact to the website
    //<div class="container"></div>
    // container.innerHTML = data.data.text 



    //select the element 
    //create html with the cat fact
    const newDiv = document.createElement("div");
    newDiv.classList.add("newContainer")
    //insert the cfreadted element into the selected element

    /* data.results.forEach((noroff) => {
        createNoroff(noroff)
    }); */
}


function getFact() {
    const response = await fetch("https://v2.api.noroff.dev/cat-facts/random")
    const data = await response.json();
    const newDiv = document.createElement("div");
    newDiv.classList.add("newContainer");
    const box = document.querySelector(".newContainer");
    box.innerHTML = data.data.text
};