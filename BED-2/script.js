// document.write(`<script>alert("haked")</script>`);
// ducument.writeln("Hello Word")
// console.log("Hello class")

/* let age = 23;
console.log("age");

let firsName = "Lehder";
console.log("firsName");

let lastName = "Harold";
console.log("lastName");

let myBoolean = false;
let notYetDecalared;

console.log(myBoolean);
console.log(notYetDecalared);

let intentionalNull = null;

console.log(intentionalNull);

let array = [1, 2, 3];
console.log(array);

let object = {
  firstName: "Lehder",
  age: 23,
};


let variable = 10;
console.log(variable);

variable = 20;
console.log(variable);

 */

/* let number1 = 1;
let number2 = 2;

console.log(number1 + number2);

console.log("Lehder" + "Harold");

console.log("5" + 10);

console.log(typeof 10);  */

/* 

Try with other types (null, string, object, array)



// let myFirstName

/* 
camelCase
PascalCase
snake_case
UPPER_SNAKE
kebad-case (HTML/CSS: Not js)
*/


/* number++;
number += 1;
number = number + 1;
console.log(number);
 */



/* let name = promt("What is your name");
promt("Hello " + Lehder + "!"); */

/* let numbe1 = promt("Enter the firs number");
let number2 = promt("Enter the second number");
let result = number1 + number2;
cossole.log("result: " + result); 
 */


/* console.log("Hello class!")

let string = "This is a string"
let number = 42;
let boolean = true;

console.log(10==10); // loosy equal
nsole.log(10== "10"); //stricly equal

console.log(5>=10); //

console.log(5> 10 && 3 > 10); //AND
console.log(5> 10  || 3 > 10); //OR */


//-----------------------------------------------------------------------------

/* let temperatur = 16;

if(temperatur>20) {
  console.log("Wear shorts");
}
if(temperatur<20) {
  console.log("Wear pants");
}
else {
  console.log("Being naked");
}


let otherTemperatur = 16;

if(temperatur>20) {
  console.log("Wear shorts");
}
else {
  console.log("Being naked");
} 
 */

// if the person is old enoguh, they can buy beer

//---------------------------------------------------------------------------------
 
/* 
if the person is old enoguh, AND not to drunk,
or if they are 16 and buy food they can buy beer 
*/

/* let age = 18;

if (age >= 18) {
    console.log("Allolw to buy beer");
}else{
  console.log("NOT allowed");
} */

//------------------------------------------------------------------------------------

/* let age = 18;
let sober = true;

if (age >= 18 && sober == true) {
    console.log("Allolw to buy beer");
} else {
  console.log("NOT allowed");
} */

//----------------------------------------------------------------------------------------

/* 
if the person is old enoguh, AND not to drunk,
or if they are 16 and buy food 
If acompanied by a parent and above 13 they can buy beer
*/

let age = 18;
let sober = true;
let eating = true;
let buyBeer = true;

if (
 (age >= 18 && sober == true) || 
   (age >= 18 && sober == true && eating == true) || 
   (age >= 13 && sober == true && buyBeer == true) 
){
    console.log("Allolw to buy beer");
} else {
  console.log("NOT allowed");
}

// Change it to use " else if" statements
//EXAMPLE

let temperatur = 16;

if (temperatur > 20) {
  console.log("Wear shorts");
} else if (temperatur < 20 ) {
 console.log("Wear pants");
} else  {
   console.log("Wear watherver you like")
}
 

//----------------------------------------


let role = "ADMIN";

if (role == "ADMIN") {
  console.log("Give them admin right");
} else if (role == "USER") {
  console.log("dispaly normal web page");
} else if (role == BANNED) {
  console.log("They dont get acces");
}


//------------------------------------------


/* let global = "global variable";
if (true) {
   let global = (global)
  console.log(global);
}
console.log(global); */


//---------------------------------------------------

/* let isWithParent = true;

if (isWithParent) {
  console.log("TRUE")
} else {
  console.log("FALSE");
} */


//--------------------------------------------------------

//TERNARY

/* const ternary = 10>8 ? "LARGE" : "SMALER";
  if(10 > 8 ) {

  }
 */



//---------------------------------------------------------


// UP, DOWN, LEFT, RIGHT

/* const key = "UP";

switch (key) {

  case "UP":
  console.log("UP WAS PRESSED ");
  break;

  case "DOWN":
  console.log("DOWN WAS PRESSED ");
  break;

  case "LEFT":
  console.log("LEFT WAS PRESSED ");
  break;

  case "RIGHT":
  console.log("RIGHT WAS PRESSED ");
  break;

  default: 
  console.log("ILEGAL KEY");

} */

//-------------------------------------------------

// For loops.         semicolom

/* 

for ( let index =0; index < 10; index++) {
  console.log(index);
}

*/


for (let i; i < 10; i++) {
  console.log(i);
}


//------------------------------------------------------

// While Loops


let i = 0;
while (i < 10 ) {
  console.log(i);
  i++;
}

