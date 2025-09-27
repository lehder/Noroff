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



//Methods



