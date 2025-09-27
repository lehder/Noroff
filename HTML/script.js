document.getElementById("alertButton3").addEventListener("click", function() {
    alert("Button was clicked!");
    console.log("Hola mundo")
  })

  function addTwoNumbers() {
    let num1 = prompt("Provide the first number:");   
    let num2 = prompt("Provide the second number:");    

    // Convertir a número entero
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    // Validar si son números
    if (isNaN(num1) || isNaN(num2)) {
        alert("Wrong data");
    } else {
        alert("The final score is: " + (num1 + num2));
    }
}  


let count = 0;

function increnment() {
    countBtn.addEventListener("click", () => {
        count++;
        console.log(count); 
    })
}
count();