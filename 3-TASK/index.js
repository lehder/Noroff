/* const todoArray = ["Wake up", "Eat breakfast", "Shower"];

function addTodoItem(item) {
  todoArray.push(item);
}
addTodoItem("To array");
console.log(todoArray);
 */

/*
when using classes, cant name keys:
- constructor
- prototype
*/

const todoObject = {
  todoItems: ["Wake up", "Eat breakfast", "Shower", "1", "1"],
  add: function (item) {
    this.todoItems.push(item);
  },
  removeByContent: function (value) {
    this.todoItems = this.todoItems.filter((item) => item != value);
  },
  removeByIndex: function (index) {
    this.todoItems.splice(index, 1);
  },
  render: function () {
    const container = document.querySelector("#todo-list");
    container.innerHTML = "";
    this.todoItems.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerText = item;

      const button = document.createElement("button");
      button.innerText = "delete";
      button.addEventListener("click", () => {
        todoObject.removeByIndex(index);
        // Have to rerender to show the changes to the object
        todoObject.render();
      });
      li.append(button);
      container.append(li);
    });
  },
};

todoObject.add("to object");
// Write a method call, so the items are shown
todoObject.removeByContent("1");
todoObject.removeByIndex(0);
todoObject.render();

// When the user submits the form
// the item should be added to the object, and to the DOM
const form = document.querySelector("#todo-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = document.querySelector("#todo-input").value;
  todoObject.add(value);
  todoObject.render();
});