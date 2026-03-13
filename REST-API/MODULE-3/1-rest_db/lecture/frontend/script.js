const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJkaXNwbGF5TmFtZSI6IlN1cGVyQ29vbFVzZXIiLCJhdmF0YXIiOiJleGFtcGxnZS5qcGciLCJpYXQiOjE3NzMxNDQxNjV9.pFGG2tv-hy3Nnra927olxpeXDzHKJ6XDdHBo3h-eu6w";

async function getUser() {
  const res = await fetch("http://localhost:3000/welcome", {
    headers: {
      authorization: `Bearer ${TOKEN}`,
    },
  });
  const data = await res.json();
  console.log(data);
  document.querySelector("h1").innerText = "Welcome: " + data.displayName;
}

/* getUser(); */

async function getHeaders() {
  const res = await fetch("http://localhost:3000/", {
    headers: {
      authorization: `Bearer ${TOKEN}`,
      auth: TOKEN,
    },
  });
  const data = await res.json();
  console.log(data);
}
/* getHeaders(); */

async function postRequest() {
  const payload = {
    message: "Data from the client",
  };
  // log out the "message" on the server

  const res = await fetch("http://localhost:3000/create", {
    method: "POST",
    headers: {
      authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  console.log(data);
}

/* postRequest(); */



async function oneMorePostRequest() {
  const res = await fetch("http://localhost:3000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: "exa@ex.com", content: "some content" }),
  });
}
oneMorePostRequest();