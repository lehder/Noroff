// While Loops

/* for (let i; i < 10; i++) {
  console.log(i);
}

let i = 0;
while (i < 10 ) {
  console.log(i);
  i++;
} */

//--------------------------------------------------------------------

//For Loops

/* const animals = ["cat", "dog", "cow", "mouse"] 
  for (let i = 0; i < animals.length; i++) {
   console.log(animals[i].toUpperCase());
  } */

//-----------------------------------------------------------------------

// String
//const string1 = "Hello word"
//const string2 = 

/* const text = 'this sentence "hello" is a quote';
console.log(text);
const text2 = "Ludving class"
const text3 = 'this quote \"hello"\"  is from example\'s';
console.log(text3);

const logText = (`
<p>some text</p>
<p>written by Herman</p>`)
console.log("<p>Some text</p>" + "<p>written by Herman</p>");
 */

//-----------------------------------------------------------------------------

/* const author = "Herman";
console.log("<p>Some text</p>\n" + "<p>written by Herman</p>");
console.log('<p>Some text</p> <p>written by Herman</p>');

const number = 1; */


/* const author = "Herman";
console.log("<p>Some text</p>\n" + "<p>written by Herman</p>");
console.log('<p>Some text</p> <p>written by ${author}</p>');

const number = 1; */

const arra = ["h", "e", "l", "l", "o"];
const strijng = "Hello";

/* console.log(array[0]);
console.log(String[0]); */

/* for (let i = 0; i < array.length; i++)  {
  console.log(array[i]);
} */

//String comparations

/* console.log("hello"=== "hello"); 
console.log("hello" === "HELLO");
console.log("hello" < "abba");
console.log("hello" < "ABBA");
console.log("a" > "a");
console.log("A" > "a"); */

/* console.log("hello" === "hello");
console.log("01000001");

console.log("A".charCodeAt(0)); */

// console.log("h".charCodeAt(0), "a".charCodeAt(0));

//---------------------------------------------------------------------

//String methods

// const text = "hello";
// text.toLocaleUpperCase();
// text.toLowerCase()
// text.toUpperCase();
// console.log(text)

//Split

/* let text = "hello word";
let splitText = text.split("");
console.log(splitText); */

/* let text = "hello word";
let splitText = text.split(" ");
console.log(splitText); */

/* let text = "stol,ikea,ny,billig";
let splitText = text.split(" ");
console.log(splitText); */

/* let text = "stol. ikea. ny. sbillig";
let splitText = text.split(" ");
console.log(splitText); */

/* let text = "stol. ikea. ny. sbillig";
let splitText = text.split(". ");
console.log(splitText); */

/* let text = "stol. ikea. ny. sbillig";
let splitText = text.split(". ");
console.log(splitText);
const joinedText = splitText.join("");
console.log(joinedText); */


//-----------------------------------------------------------------------

//Trim

// console.log("    hello   ".trim());

//

/* console.log("hello word!".toUpperCase());
console.log("hello word!".toLowerCase());

console.log("ludving" == "Ludving"); */

//

/* console.log("12.49".padStart(10));
console.log("1212315664.49".padStart(20));

console.log("12.49".padStart(10, "_"));
console.log("1212315664.49".padStart(20, "_")); */


//Slice

/* console.log("hello".slice()); //"ll"
console.log("hello".slice(2)); //"ll"
console.log("hello".slice(2, 4)); //"ll"
console.log("hello".substring(2, -4)); //"ll" can you negative
console.log("hello".substring(2, 4)); //"ll" */

//-------------------------------------------------------
//Replace

/* 
console.log("hello".replace("l", "o"));
console.log("hello".replaceAll("l", "o"));
console.log("The is my first blog post".replaceAll(" ", "_")); */

//----------------------------------------------------------------

//Function

/* function begForSubs() {
  console.log("Hello");
  console.log("Please. like and subscribe!");
}

begForSubs(); */

//Reusabylli

//Anatomy of function



//---------------------------------------------------------------------

/* function sum(num1, num2) {
  console.log(num1  + num2);
}

sum(1, 2);
sum(2, 4)  */

/* function sum(num1, num2) {
  console.log(num1  + num2);
}

function returnSun() {
  return num1 + num2;
}

sum(2, 4)

console.log(returnSun(10, 12));

 */


/* let num1 = 10;
let num2 = 12;
let result;

function dirtySum() {
  result = num1 + num2;
}

dirtySum();
console.log(result); */

//----------------------------------------------------------------


//Examplo function



/* function greetUser(name)  {
  alert("Welciomen " + name + "!");
}

greetUser("Carl");
greetUser("Ola");
greetUser("Kari"); */

//------------------------------------

//Default values

/* function greetUser(name = Carl)  {
  alert("Welciomen " + name + "!");
}

greetUser("Carl");
greetUser("Ola");
greetUser("Kari"); */

//-----------------


/* function lenguage(lang="en")  {
 switch (lang) {
  case "en":
    return "English website";

  case "no":
    return "Norwegian website";

  case "dk":
    return "Danis website"; 

    default: 
     return "website not avaliable in this language";
 }
}

console.log(language("pl")); */


//---------------------------------------------------------


//Spread operator

/* function arguments(...args) {
  console.log(args);

}

arguments(1, 2, 3,4, 5, 6, "Hello"); */


//-------

//Reusability


/* const input = Number(prompt("Guess a number between 1 and 10"));
if (input === parseInt(Math.random( ) * 10 - 1)) {
  alert("guesse correctly!");
} else {
  alert("gueseed wrong")
}
 */


//-------------------

/* const input = Number(prompt("Guess a number between 1 and 10"));
if (input === parseInt(Math.random( ) * 10 - 1)) {
  alert("guesse correctly!");
} else {
  alert("gueseed wrong")
} */

//----------------------


/* function guesNumber() {
  const input = Number(prompt("Guess a number between 1 and 10"));
  return input;
}  
function guesNumber(number) {
   const randomNumber = parseInt = (Math.random() * 10 + 1 );
   console.log(randomNumber);
   if (number === randomNumber) {
    alert("guesse correctly!");
  } else {
    alert("gueseed wrong")
  }
}

const input = guesNumber ();
guesNumber(input); */

//-------------------------------------------
/* 
function guesNumber() {
  const input = Number(prompt("Guess a number between 1 and 10"));
  return input;
}  
function guesNumber(number, min = 1, max = 10) {
   const randomNumber = parseInt = (Math.random() * max + min );
   console.log(randomNumber);
   if (number === randomNumber) {
    alert("guesse correctly!");
  } else {
    alert("gueseed wrong")
  }
}

const input = guesNumber ();
guesNumber(input);

 */

//---------------------------------------------------

//"Hide" logic

/* function calculateHypotenuse(a, b){
   if (number === randomNumber) {
    if (typeof a === "number") { 
      return true;
    } 
    return false;
  }
}   

  console.log(typeof 1 === "number");  */


//------------------------------------

/* 
const greetUser = function(name) {
  console.log("Hello " + name);
} ;

greetUser("Ola")
 */

//--------------------------------------------------


/* const  greetUser = function (name)  {
  console.log("Hello " + name);
};
greetUser("Ola"); 

 const greetUserArrow = function (name) {
  console.log("Hello " + name);
};
greetUserArrow("Kary") 

const button = document.querySelector("#btn");
console.log(button);
button.addEventListener("click", greetUser); */

//--------------



/* const  greetUser = function (name)  {
  console.log("Hello " + name);
};
greetUser("Ola"); 

 const greetUserArrow = function (name) {
  console.log("Hello " + name);
};
greetUserArrow("Kary") 

const button = document.querySelector("#btn");
console.log(button);
button.addEventListener("click", function () {
  greetUser("Ola");
} ); */


//-----------------


/* const  greetUser = function (name)  {
  console.log("Hello " + name);
};
greetUser("Ola"); 

 const greetUserArrow = function (name) {
  console.log("Hello " + name);
};
greetUserArrow("Kary") 

const button = document.querySelector("#btn");
console.log(button);
button.addEventListener("click", ()=> {
  console.log("Arrow function");
} ); */

//--------------------



const button = document.querySelector("#btn");
let count = 0;
button.addEventListener("click", function () {
  count++;
  console.log(count);
  alert(count);
} );
