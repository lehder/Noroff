const root = document.querySelector("#root");

let name = "Ludvig";
function changeName(value) {
  name = value;
  render();
}

function greeting(name) {
  const h1 = document.createElement("h1");
  h1.innerText = "Hello" + name;
  return h1;
}
function userInput() {
  const div = document.createElement("div");
  const inp = document.createElement("input");
  div.append(inp);
  const btn = document.createElement("button");
  btn.innerText = "click";
  div.append(btn);
  btn.addEventListener("click", () => {
    changeName(inp.value);
    console.log(name);
  });
  return div;
}

function render() {
  root.innerHTML = "";
  root.append(greeting(name));
  root.append(userInput());
}

render();