const localData = JSON.parse(localStorage.getItem("todo"));

let todo = [];

if (localData) {
    todo = localData;
}


document.querySelector("#clear").addEventListener("click", () => {
    localStorage.clear();
    todo  = [];
    container.innerHTML = "";

})


console.log("todo is:" + todo)


const container = document.querySelector(".container")
const form = document.querySelector("form");
todo.forEach((item) =>{
    createItem(item);
});


form.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = document.querySelector("#todo-input").value;
    // dytt value inn i todo array
    todo.push(value);
    console.log(todo);
    container.innerHTML = "";
    todo.forEach((item) =>{
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

//Creating data
const obj = {
    key: "key",
};
console.log(obj);
//Stringify the data, making it json 
const text = JSON.stringify(obj);
console.log(text);

const newObject = JSON.parse(text);
console.log(newObject);
console.log(newObject.key);
