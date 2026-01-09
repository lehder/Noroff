document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.querySelector("#article-name").value;
    const title = document.querySelector("#article-title").value;
    const content = document.querySelector("#article-content").value;
  
    const payload = JSON.stringify({
      title: title,
      content: content,
    });
  
    const res = await fetch("http://localhost:3000/" + name, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });
    const data = await res.json();
    console.log(data);
  });