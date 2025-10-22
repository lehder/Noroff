// Create a json file with THIS object
const obj = {
    description: "description of object",
    createdAt: "2015-10-22",
  };
  
  // create an array with two objects in json
  const arr = [obj, obj];
  
  // Create a JSON schema for this object
  const schemaObject = {
    name: "Morning routine",
    date: "2025-10-22",
    todos: ["Wake up", "Eat breakfast"],
  };
  
  class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      if (gender) {
        this.gender = gender;
      }
    }
  }
  
  const person = new Person("Ludvig");
  console.log(person);
  
  const array = [1, 2, 3];
  
  function testFunction(req1, req2, optional = null) {
    if (optional) {
      if (optional.optional1) {
      }
    }
  }
  
  testFunction(1, "value", undefined, undefined, {
    optional1: "val",
    optional2: "val2",
  });