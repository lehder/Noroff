document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.querySelector("#studentName").value;
    const date = document.querySelector("#enrollmentDate").value;
    console.log(name);
    console.log(date);
  
    const res = await fetch("http://localhost:3000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, date }),
    });
    const data = await res.json();
    console.log(data);
  });
  