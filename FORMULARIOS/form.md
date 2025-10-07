<form action="" id="newForm">
  <label for="myForm">UserName</label>
  <input type="text" id="myForm" placeholder="Incerte su nombre de usuario"></input>
  <button type="submit">Enviar</button>
</form>

```js


const formato = document.querySelector("newForm");

formato.addEventListener("submit", (event) => {
    event.preventDefault();
    const userName = document.querySelector("myForm").value;
    console.log("submit");
})

