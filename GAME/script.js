let x = 0;
let y = 0;
const box = document.querySelector(".box");
const containeWidth = 1000;
const containerHeight = 500;
const playerZise = 25;

window.addEventListener("keydown", (event) => {

   switch(event.key){
    case "w":
        y -= 25;
        console.log("w");
        break;
    case "a":
        x -= 25;
        console.log("a");
        break;
    case "s":
        if (y < containerHeight - playerZise) {
            y += 25;
        }
        break;   
        case "d":
            x += 25;
            console.log("d");
            break;         
   }
box.style.left = x + "px";
box.style.top = y + "px";

});

