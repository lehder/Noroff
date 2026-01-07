async function sendPerson() {
    const res = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "Kari" }),
    });
    const data = await res.json();
    console.log(data);
  }
  
  async function sendAnimal() {
    const res = await fetch("http://localhost:3000/animals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "Rengar", species: "cat" }),
    });
    const data = await res.json();
    console.log(data);
  }
  
  sendAnimal();
  sendPerson();