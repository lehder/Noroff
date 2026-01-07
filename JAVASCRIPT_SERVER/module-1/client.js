async function getData() {
    const res = await fetch("http://localhost:3000/status");
    const data = await res.text();
    console.log(data);
  }
  
  getData();