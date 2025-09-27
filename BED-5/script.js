/* const button = document.querySelector("#btn");
let count = 0;
button.addEventListener("click", function () {
  count++;
  console.log(count);
  alert(count);
} );  */


//--------------------------------------

//Arrow funtion

/* const array = ["first", "secon", "third"];

//Log ut hver element i arrayet p´egen linje

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

array.forEach(()=>{
 console.log("Hei"); 
});
 */

//-------------

//seconst array = ["first", "secon", "third"];

//Log ut hver element i arrayet p´egen linje

/* for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
function log(name, number, age) {
  console.log("hei");
}

array.forEach((item)=>{
 console.log(item); 
}); */

//------------

/* for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
function log(name, number, age) {
  console.log("hei");
}

array.forEach((item, index)=>{
 console.log(item, index); 
});
 */

//--------------------------------------

//This block are "the same"

//block 1

/* for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
//Block2
array.forEach((element)=>{
 console.log(element); 
});
array.forEach(function (item) {
  console.log(item)
});

function myAddEventListener(event, callbackFuntion) {
  if(event === "click") {
    console.log(click);
  } else if (event === "resize") {
    callbackFuntion();
  }
}

window.addEventListener("click", () => {
  console.log("User clickend");
}) */

 

//---------------------------------------------------------

/*
Create two buttons:
one with the id "btn-1"
one with the id "btn-2"

when a user click btn 2 
log out "button 2 was clicked"
*/

/* const button = document.querySelector("#btn-1");
let count = 0;
button.addEventListener("click", function () {
  count++;
  console.log(count);
  alert(count);
} ); */ 

const button1 = document.querySelector("#btn-1");
const button2 = document.querySelector("#btn-2");


button1.addEventListener("click", ()=> {
  console.log("The section was opened");
  alert("The section was opened")
} );

button2.addEventListener("click", () =>  {
  console.log("button 2 was clicked");
  alert("button 2 was clicked")
} );

//--------------------------------------------------------------------------------


//------------------------------------------------------------------------

// Object

/* const object = {
  key: "value",
  key2: "anopther value"
};

const student = {
  name: "OLa",
  dateOfBirth: "2000-01-02", 
  course: "FED"
};

console.log(student);
console.log(student.name);
console.log(student.dateOfBirth);
console.log(student.course);
 */

//-----------------------------------------------------------------------

/* const object = {
  key: "value",
  key2: "anopther value"
};

const student = {
  name: "OLa",
  dateOfBirth: "2000-01-02", 
  course: "FED"
};

for (const key in student) {
  //Print the keys AND the values HINT: []
  console.log(key);
} */

//--------------------------------------------------------------------

/* const student = {
  name: "Adrian",
  course: "FED",
  changeCourse: function (course) {
    this.course = course;
  },
};

console.log(student.course);
student.changeCourse("BED"),
console.log(student.course);
 */
//------------------------------------------------------------


/* const student = {
  name: "Adrian",
  course: "FED",
  changeCourse: function (course) {
    this.course = course;
  },
  changeName: function(name) {
   this.name = name;
  }
};

console.log(student.course);
student.changeCourse("BED"),
console.log(student.course);

console.log(student.name);
student.changeName("Ola");
console.log(student.name);


 */

//-------------------------------------------

/* const student = {
  name: "Adrian",
  course: "FED",
  changeCourse: function (course) {
    this.course = course;
  },
  changeName: function(name) {
   this.name = name;
  }
};

console.log(student.course);
student.changeCourse("BED"),
console.log(student.course);

console.log(student.name);
student.changeName("Ola");
console.log(student.name); */


//-------------------------------------



//-1. Log out all even number in an array

/* myFunction([1, 2, 3, 4, 5 ]);


for (let i; i < 10; i++) {
  console.log(i);
} */

/* function logAllEvenenNumber(numbers) {
 for(let i = 0;  i < numbers.length; i++){
  console.log(numbers[i]);
 };
}; 

const numberArray = [1,2,3,4,5,6,7, 12];

logAllEvenenNumber(numberArray)

numberArray.forEach((num)=> {
  if (num % 2 === 0) {
    console.log(numberArray)
  }
})    */




/* function logAllEvenenNumber(numbers) {
  for(let i = 0;  i < numbers.length; i++){
    const result = numbers[i] % 2;
    if (result === i)
   console.log(numbers[i]);
  };
 }; 
 
 const numberArray = [1,2,3,4,5,6,7, 12];
 
 logAllEvenenNumber(numberArray)
 
 numberArray.forEach((num)=> {
   if (num % 2 === 0) {
     console.log(numberArray)
   }
 })   */ 
 

//----------------------------------------------------

/* function returnEventNumber(numbers) {
  const output = [];
  output.push(numbes[0]);
  output.push(numbers[1]);
  output.push(numbers[2]);
  return output;
} 
const result = returnEventNumber([1,2,3,4,5,6]);
console.log(result);
 */

//--------------------

/* let x = [1,2,3,4,5,6,7,8,9];

function returnEventNumber(numbers) {
 const f = [];
 for (i = 0; i < numbers.length; i++) {
  if(numbers[i] % 2 === 0) {
    f.push(numbers[i])
  } 
  console.log(f);

 } 
} 
const result = returnEventNumber([1,2,3,4,5,6]);
console.log(result); */



//------------------------

/* let x = [1,2,3,4,5,6,7,8,9];

function returnEventNumber(numbers) {
 const f = [];
 for (i = 0; i < numbers.length; i++) {
  if(numbers[i] % 2 === 1) {
    f.push(numbers[i])
  } 
  console.log(f);

 } 
} 
// const result = returnEventNumber([1,2,3,4,5,6]);
// console.log(result);
returnEventNumber(x) */

//-------------------------------------------

//-----------------------------------------------


/* const numbersArray = [1,2,3,4,5,6,7,8,9];

function numbersDivisable(numbers, divider) {
  const output = [];
  return output;
}

const result = numbersDivisable(numbersArray, 5); */


//-----------------------------------------------


/* const numbersArray = [1,2,3,4,5,6,7,8,9, 15];

function numbersDivisable(numbers, divider) {
  let divisable = [];
  for (i = 0; i < numbers.length; i++) {
    if(numbers[i] % divider === 0) {
      divisable.push(numbers[i])
    } 
  }
  console.log(divisable);
}

numbersDivisable(numbersArray, 5); */


//----------------------------------------------

//-------------------------------------------

//Function that logs out the first half of a string

//myFunction("haha");
//"ha"



/* const text = "haha";

const halfText = text.slice(0, text.length / 2);
const halfText2 = text.substring(0, text.length / 2);
console.log(halfText);
console.log(halfText2);

function firsHalfOfText(text) {
  let output ="";
  for(let i = 0; i < text.length / 2; i++) {
    output += text[i];
  }
  return output;
}
console.log(firsHalfOfText("hello class!!!!!")); */

//------------------------------

//---------------------------------------------------------------------

//Funtion that retyurns the last half of a string

//const result = myFunction(abba);
//ba//

/* 
const text = "abba";

const halfText = text.slice(0, text.length / 2);
const halfText2 = text.substring(text.length / 2, text.length);
console.log(halfText);
console.log(halfText2);

function firsHalfOfText(text) {
  let output ="";
  for(let i = 0; i < text.length / 2; i++) {
    output += text[i];
  }
  return output;
}
console.log(firsHalfOfText("hello class!!!!!"));  */

//---------------------------------------------------------------

//--------------------------------------------------------------

/

//Funtion that returns a string reversed

//const result = myFunction("hello");
//"olleh"


/* const text = "hello";

const halfText = text.slice(0, text.length / 2);
const halfText2 = text.substring(text.length / 2, text.length);

console.log(halfText);
console.log(halfText2);

function firsHalfOfText(text) {
  let output ="";
  for(let i = 0; i < text.length / 2; i++) {
    output += text[i];
  }
  return output;
}
console.log(firsHalfOfText("hello class!!!!!"));  */


//----------------------------

//-----------------------

/* Function that return true or false based on if a string is a pallindrome

const result = myFunction("abba"); //true
const result = myFunction("boat"); //false

 */

/* const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString) */

//------------------

//-----------------


const arry = ["Markus", "Herman", "Adrian", "Henrik", "Ola"];

const sortedArray = array.sort();
console.log(sortedArray);
const numbers = [1,2,3,4,5,6,7,8,9]
const sortedNumber = numbers.sort((a,b)=> {
  if (a<b) {
    return -1;
  } else {
    return 1;
  }
});

console.log(sortedNumbers);
const students = [
  {name: "Herman", age: 43},
  {name: "Frederik", age: 34},
  {name: "henrik", age: 12},
];
const sortedStudents = students.sort((a, b)=>{
  if (a.age < b.age) {
    return -1;
  } else {
    return 1;
  }
});

console.log(sortedStudents);



/* const sortedByName = students.sort();// fyll inn
console.log(sortedByName); */
