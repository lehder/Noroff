const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Grab email and password vaules from the client
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  console.log(email, password);

  const res = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  console.log(data);
  if (data.token) {
    localStorage.setItem("token", data.token);
  }
});