const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

if (!token || !user) {
  alert("You need to log in");
  window.location = "/login";
}

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const content = document.querySelector("#post").value;
  console.log(content);
  const res = await fetch("http://localhost:3000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ content: content }),
  });
  const data = await res.json();
  console.log(data);
});