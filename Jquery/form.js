let storedUsername = "";
let storedPassword = "";


document.querySelector("#register").addEventListener("submit", (e)=>{
    e.preventDefault();
     const username = document.querySelector("#register-username").value;
     const password = document.querySelector("#register-password").value;

     if (username.length < 5) {
        alert("Invalid username");
        return;
     }
     
     if (password.length < 5) {
        alert("Invalid password");
        return;
     }
     if (password === password.toLowerCase() ||
     password === password.toUpperCase()
     ) {
        console.log(password.toLowerCase());
        console.log(password.toUpperCase());
        console.log(password);
       alert("Need atleast one uppercase and lowercase letter");
       return;
    }

    // log out values the user fills inn

    console.log("username: " + username);
    console.log("password: " + password);

    storedUsername = username;
    storedPassword = password;
});

// document.querySelector("#login");

// console.log() username and password filled into the login form

document.querySelector("#login").addEventListener("submit", (e)=> {
    e.preventDefault();

    const usernameValue = document.querySelector("#loginusername").value;
    const passwordValue = document.querySelector("#loginpassword").value;

    if (usernameValue === storedUsername && passwordValue === storedPassword)
    {
        alert("Succes");
        console.log(passwordValue, usernameValue);
    } else {
        alert ("wrong");
    } 

} );

