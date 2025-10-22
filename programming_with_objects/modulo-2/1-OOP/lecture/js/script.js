const localData = JSON.parse(localStorage.getItem("todo"));

let todo = [];

if (localData) {
  todo = localData;
}

document.querySelector("#clear").addEventListener("click", () => {
  localStorage.clear();
  todo = [];
  container.innerHTML = "";
});

const container = document.querySelector(".container");
const form = document.querySelector("form");
todo.forEach((item) => {
  createItem(item);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = document.querySelector("#todo-input").value;
  // dytt value inn i todo array
  todo.push(value);
  console.log(todo);
  container.innerHTML = "";
  todo.forEach((item) => {
    createItem(item);
  });
  const stringified = JSON.stringify(todo);
  localStorage.setItem("todo", stringified);
});

function createItem(item) {
  const p = document.createElement("p");
  p.innerText = item;
  container.append(p);
}

// Creating data
const obj = {
  key: "value",
};
console.log(obj);
// Stringifying the data, making it json so it can be sent/stored
const text = JSON.stringify(obj);
console.log(text);
// Parsing the json text into a "javaScript object" again so we can use it in our code
const newObject = JSON.parse(text);
console.log(newObject);
console.log(newObject.key);