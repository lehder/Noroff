const token = localStorage.getItem("token");

async function getData() {
  const res = await fetch("http://localhost:3000/auth", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  console.log(data);

  if (data.data) {
    document.querySelector("body").innerHTML += `
    <p>${data.personal}</p>
    `;
  } else {
    document.querySelector("body").innerHTML += `
    <p>Token invalid</p>
    `;
  }
}

if (token) {
  getData();
}