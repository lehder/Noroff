const arr = ["Gandalf", "Boromir", "Frodo", "Sam", "Galadriel"];

const sortedArray = arr.sort();

console.log(sortedArray);
const numberArray = [32, 1, 22, 64, 94, 79, 121];

const sortedNumbers = numberArray.sort((item1, item2) => {
  if (item1 < item2) {
    return -1;
  } else {
    return 1;
  }
});
console.log(sortedNumbers);

const objects = [
  { name: "Gandalf" },
  { name: "Bromir" },
  { name: "Frodo" },
  { name: "Sam" },
  { name: "Galadriel" },
];
// Can use "toSorted()" to make a copy and not change the original
const sortedObjects = objects.sort((obj1, obj2) => {
  if (obj1.name < obj2.name) {
    return -2;
  }
  return 2;
});

console.log(sortedObjects);
console.log(objects);

// shallow copy vs deep copy
const array = [{ name: "test-1", array: [1, 2, 3] }];
const copy = [...array];
const deepCopy = JSON.parse(JSON.stringify(array));
deepCopy[0].array[1] = 20;
copy[0].array[0] = 10;
/* console.log(array); */

/**
 * TASK
 *
 * Create your own sort function
 * Do not use the built in sort method
 * build it fully out yourself using loops
 * HINT:
 * You can have loops inside of loops
 */

const numbers = [12, 123, 5, 221, 32, 521, 21, 31];

// Example of how to swap numbers
const temp = numbers[0];
if (numbers[1] < temp) {
  numbers[0] = numbers[1];
  numbers[1] = temp;
}

function mySort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[i]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
}
mySort(numbers);
console.log(numbers);