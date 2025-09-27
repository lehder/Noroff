const form = document.querySelector("myForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.querySelector("#myInput").value;
    console.log("submit");
    // Show username in the result div
});

const div = document.querySelector("#result")


