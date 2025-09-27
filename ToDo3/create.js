const container = document.querySelector(".container");

const paragraph = document.createElement("p");
paragraph.innerText = "This is from JS";
paragraph.addEventListener("click", ()=>{
    alert("clicked p tag");
});

// container.append(paragraph);

//Create a div with some content and an evenListener
// add it to container

const div = document.createElement("div");

div.innerText = "New div form Js";
div.addEventListener("click", ()=> {
    div.remove()
} )

// container.append(div);

function createTask(task) {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task");
    const taskContent = document.createElement("p");
    taskContent.innerText = task;
    const removeButton = document.createElement("button");
    removeButton.classList.add("btn")
    removeButton.innerText = "remove";
    removeButton.addEventListener("click", ()=>{
        alert(taskContent.innerText);
        taskContainer.remove()
    });

    taskContainer.append(taskContent);
    taskContainer.append(removeButton);
    container.append(taskContainer)
}

createTask("wake up");
createTask("Drink coffe");
createTask("Eat breakfast");

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()
    const task = document.querySelector("#task-name").value
    
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task");
    const taskContent = document.createElement("p");
    taskContent.innerText = task;
    const removeButton = document.createElement("button");
    removeButton.classList.add("btn")
    removeButton.innerText = "remove";
    removeButton.addEventListener("click", ()=>{
        alert(taskContent.innerText);
        taskContainer.remove()
    });

    taskContainer.append(taskContent);
    taskContainer.append(removeButton);
    container.append(taskContainer)

})