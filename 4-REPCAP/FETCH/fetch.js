async function getRandomCatFact() {
    // https://v2.api.noroff.dev/cat-facts/random
  
    // wait fetch data
    // wait parse data
    // log data
    const res = await fetch("https://v2.api.noroff.dev/cat-facts/random");
    const data = await res.json();
    // look at data
    console.log(data);
    // look at the data inside "data"
    console.log(data.data);
    // look at the correct value
    console.log(data.data.text);
    document.querySelector(".container").innerText = data.data.text;
  }
  getRandomCatFact();
  
  document.querySelector("button").addEventListener("click", getRandomCatFact);