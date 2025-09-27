// Arrays
// Grouping similar items

/* const students = ["Henrik", "Adrian", "Lehder"];
console.log(students) */

//Mixing

/* const mixArray = [ 1, "BED", [ "Adrian", "Lehder"]];
console.log(mixArray); */

//------

/* const mixArray = [ 1, "BED", [ "Adrian", "Lehder"]];
console.log(students[3]); */

//-----------

/* const mixArray = [ 1, "BED", [ "Adrian", "Lehder"]];
console.log(students[1]);
students[1] = "Herrik";
console.log(students); */


//-------------

// Changing arrays


/* console.log(students);
students.push("Ingrid");
students.push(true);
console.log(students); */

/* console.log(students);
students.push("Ingrid");
students.unshift("Jhoan");
console.log(students);
 */

/* console.log(students);

students.pop();
students.shift()
console.log(students);
 */

/* console.log(students);

students.push("Ingrid");
students.unshift("Jhoan");

;students.pop()
students.shift()
console.log(students);
 */
/* 
Lag array med ditt nacvn som elemnet
Legg til venstremann forran i arrayet
Legg til høyremann bakerst i arrayet
*/


//--------------------

/* const students = ["Ludvig"];
students.push = ["Amrit"];
students.unshift = ["Omer"];

students.pop()
students.shift()
console.log(students);

 */

//-------------
 /* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 const firstFiveNumber = numbers.slice(0, 5);
 console.log(firstFiveNumber);
 console.log(numbers) 
 number.length*/

 //---------------------

 /* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 const firstFiveNumber = numbers.slice(5, numbers.length);
 console.log(firstFiveNumber);
 console.log(numbers)
 numbers.length; */

 //---------------------


/*  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// vbariable declaratyion
// statement,
// what happens after each run
 for (let i = 0; i < numbers.length; i++) {
   console.log*numbers[numbers[i]]
    
  }
 */
  //---------------------

/* const students = ["Adrian", "Markus", "Henry", "Herman"];

let text = "";
for (let  i = 0; i < students.length; i++) {
  text += students[i];
}

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]); 
 */

//--------------

// Lopps

/* const students = ["Adrian", "Markus", "Henry", "Herman"];

for (let  i = 0; i < 4; i++) {
  console.log(students[i]);
} */

//-----------------


/* const students = ["Adrian", "Markus", "Henry", "Herman"];

let text = "";
for (let  i = 0; i < students.length; i++) {
  console.log(students[i]); 
}
*/
//--------------------------------------


/* 

Whith a Loop 
console.log even number between 1 and 10

*/

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* for (let  i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
} */

//-------------------------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* for (let k = 0; k < 11; k++) {
  if (k % 2 === 0) {
    console.log(k);
  }
} */

//-------------------------------

const students = ["Henrik", "Markus", "Adrian", "Herman"];

// In a. Loop, only log out stundents whith names starting with "H"

/* console.log("Hello"[0]);
console.log(students[0][0]); */

for (let i = 0; i<students.length; i++) {
  if (students[i][0] == "H"){
    console.log(students[i]);
    // console.log(students[i][0]);
  }
}

