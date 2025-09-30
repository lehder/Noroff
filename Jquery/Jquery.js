$("div")

console.log("div");
console.log(document.querySelector("div"));
// console.log(document.querySelectorAll("div"));

// $("p").css("color", "blue");

// Cuando necesitamos tomar un solo elemento.
// document.querySelector("p").style.color = "blue";

// Cuando necesitamos tomar todos los elementos
/* document.querySelectorAll("p").forEach(element => {
    element.style.color = "blue";
    
}); */

// Cuando utlizamos classes

// $(".first").css("color", "blue");

// $("p.first").css("color", "blue");


// Esto cuando utlizamos un Id, puedo utlizar las dos maneras, y toma todo el div.

// $("#special-paragraph:parent").css("background-color", "red")

// document.querySelector("#special-paragraph").parentElement.style.background = "red";

// Esto escoge la p y le da color sin tomar el div
/* $("div > p").css("color", ("white"));
console.log($("div > p").css("color", "white")); */

// q o qa significa (querySelector o querySelectoAll)

function q(selector){
    return document.querySelector(selector);
}
q("div").style.backgroundcolor = "blue";

function qa(selector){
    return document.querySelectorAll(selector);
}
 qa("p").forEach((element) => {
    element.style.color = "red";
 });

$("div").append("<p>hello</p>");

const element = document.querySelector("div").append(element);


