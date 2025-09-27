/* const div = document.querySelector("#myDiv");


const student = {
    name: "Lehder",
    age: 47,
    course:  "BED",
};

//Use backtics and literals to log this out 

console.log(`${student.name} is ${student.age} years old and study ${student.course}`);

div.innerHTML = `${student.name} is ${student.age} years old and study ${student["course"]}`; */


const div = document.querySelector("#myDiv");

const car = {
    make: "Ford",
    milage: 33.500,
    year: "2023",
    prevousOwners: "Lehder Harold",
}
console.log(`This ${car.make} is from year ${car.year} and last owner ${car.prevousOwners}`);

div.innerHTML = `This ${car.make} is from year ${car.milage} is from ${car.year} last owner ${car.prevousOwners}`
div.style.backgroundColor = "blue"; 
div.style.fontSize = "64px";
div.style.height = "500px"

