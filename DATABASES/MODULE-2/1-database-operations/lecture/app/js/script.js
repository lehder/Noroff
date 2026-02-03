async function getAllPeople() {
    const res = await fetch("http://localhost:3000/");
    const data = await res.json();
    console.log(data);
  
    const body = document.querySelector("body");
  
    data.forEach((person) => {
      const container = document.createElement("div");
      // id, name, age
      const id = document.createElement("p");
      const name = document.createElement("p");
      const age = document.createElement("p");
      const deleteButton = document.createElement("button");
  
      id.innerText = person.id;
      name.innerText = person.name;
      age.innerText = person.age;
      deleteButton.innerText = "DELETE";
  
      name.addEventListener("click", async () => {
        const newName = prompt("Change name of " + person.name);
        console.log(person.id + " new name: " + newName);
        const res = await fetch("http://localhost:3000/" + person.id, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: newName }),
        });
        const data = await res.json();
        console.log(data);
      });
  
      deleteButton.addEventListener("click", async () => {
        const res = await fetch("http://localhost:3000/" + person.id, {
          method: "DELETE",
        });
        const data = await res.json();
        console.log(data);
      });
  
      container.append(id, name, age, deleteButton);
      body.append(container);
    });
  }
  
  getAllPeople();