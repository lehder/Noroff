//Tres formas de trabajar con Objectos

//Ejercicio 1

/* const car = {
    make: "Toyota",
    model: "Corolla",
    year: "2020",
    start: function () {
        console.log("Starting " + this.make);
    },
    start2: () => {
        console.log("starting "  + this.make);
    },
    start3 () {
        console.log("Starting car 3");
    },
}
car.start();
 */


//Ejercicio 2

/* const car = {
    make: "Toyota",
    model: "Corolla",
    year: "2020",
    start: function () {
        console.log("Starting " + this.make);
    },
    start2: () => {
        console.log("starting "  + this.make);
    },
    start3 () {
        console.log("Starting car 3");
    },
};

class Car{
    year = 1990;
    constructor(make, model){}
    start () {
        console.log("Starting engine");
    }
}

const test  = new Car("Toyota", "Corolla", 2020);

car.start(); */

//camelCase
//PascalCase



//Ejercicio 3

/*const car = {
    make: "Toyota",
    model: "Corolla",
    year: "2020",
    start: function () {
        console.log("Starting " + this.make);
    },
    start2: () => {
        console.log("starting "  + this.make);
    },
    start3 () {
        console.log("Starting car 3");
    },
};

class Car{
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
    
}

const ferrari = new Car("Ferrari", "La Ferrari");
console.log(ferrari);

 function CarCreator (make, model) {
   this.make = make;
   this.model = model;
}

const ford = new CarCreator("Ford", "Escort");
console.log(ford);
 */

//Ejercicio 5

/* const car = {
    make: "Toyota",
    model: "Corolla",
    year: "2020",
    start: function () {
        console.log("Starting " + this.make);
    },
    start2: () => {
        console.log("starting "  + this.make);
    },
    start3 () {
        console.log("Starting car 3");
    },
};
console.log(car);

class Car{
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
    start() {
        console.log("Stratin Car")
    }
    
}

const ferrari = new Car("Ferrari", "La Ferrari");
console.log(ferrari);
ferrari.start();
 */

//Ejercicio 6

/* const car = {
    make: "Toyota",
    model: "Corolla",
    year: "2020",
    start: function () {
        console.log("Starting " + this.make);
    },
    start2: () => {
        console.log("starting "  + this.make);
    },
    start3 () {
        console.log("Starting car 3");
    },
};
console.log(car);

class Car{
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
    start() {
        console.log("Stratin Car")
    }
    
}

const ferrari = new Car("Ferrari", "La Ferrari");
console.log(ferrari);
ferrari.start();


class ElectrisCar extends Car{
    constructor(make, model, batteryCapacity) {
        super(make, model);
        this.batteryCapacity = batteryCapacity;
    }
    charge(){
        console.log("Charging car");
    }
}
 
const tesla = new ElectrisCar("Tesla", "S", 80);

console.log(tesla);
tesla.start();
tesla.charge();


class Animal {
  breathe(){
    console.log("")
  }
  eat(){
    console.log("amburguesa")
  }
}

class Mammal extends Animal{
    produceMilk(){
        console.log("tetero")
    }
}

class BlueWhale extends Mammal {
   swim() {
    console.log("pescado")
   }
}

class Human extends Mammal {
    depressed() {
        console.log("depesivo");
    }
}

const human = new Human();
human.breathe();
 */

//Ejercicio 7


/* const car = {
    make: "Toyota",
    model: "Corolla",
    year: "2020",
    start: function () {
        console.log("Starting " + this.make);
    },
    start2: () => {
        console.log("starting "  + this.make);
    },
    start3 () {
        console.log("Starting car 3");
    },
};
console.log(car);

class Car{
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
    start() {
        console.log("Stratin Car")
    }
    
}

const ferrari = new Car("Ferrari", "La Ferrari");
console.log(ferrari);
ferrari.start();


class ElectrisCar extends Car{
    constructor(make, model, batteryCapacity) {
        super(make, model);
        this.batteryCapacity = batteryCapacity;
    }
    charge(){
        console.log("Charging car");
    }
}
 
const tesla = new ElectrisCar("Tesla", "S", 80);

console.log(tesla);
tesla.start();
tesla.charge();


class Animal {
  breathe(){
    console.log("vaca 🐄")
  }
  eat(){
    console.log("amburguesa 🍔")
  }
}

class Mammal extends Animal{
    produceMilk(){
        console.log("leche 🍼")
    }
    mood() {
        console.log("😄")
    }
}

class BlueWhale extends Mammal {
   swim() {
    console.log("pescado 🐟")
   }
}

class Human extends Mammal {
    mood() {
        console.log("😊");
    }
}

const whale = new BlueWhale();
const human = new Human();
human.mood(); */


//Ejercicio 8

const car = {
    make: "Toyota",
    model: "Corolla",
    year: "2020",
    start: function () {
        console.log("Starting " + this.make);
    },
    start2: () => {
        console.log("starting "  + this.make);
    },
    start3 () {
        console.log("Starting car 3");
    },
};
console.log(car);

class Car{
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
    start() {
        console.log("Stratin Car")
    }
    
}

const ferrari = new Car("Ferrari", "La Ferrari");
console.log(ferrari);
ferrari.start();


class ElectrisCar extends Car{
    constructor(make, model, batteryCapacity) {
        super(make, model);
        this.batteryCapacity = batteryCapacity;
    }
    charge(){
        console.log("Charging car");
    }
}
 
const tesla = new ElectrisCar("Tesla", "S", 80);

console.log(tesla);
tesla.start();
tesla.charge();


class Animal {
  breathe(){
    console.log("vaca 🐄")
  }
  eat(){
    console.log("amburguesa 🍔")
  }
}

class Mammal extends Animal{
    produceMilk(){
        console.log("leche 🍼")
    }
    mood() {
        console.log("😄")
    }
}

class BlueWhale extends Mammal {
   swim() {
    console.log("pescado 🐟")
   }
}

class Human extends Mammal {
    mood() {
        console.log("😊");
    }
}

const whale = new BlueWhale();
const human = new Human();
human.mood(); //neutral, mood gets overwritte

const jsonData = `{
    "key": "values",
    "number": 2,
    "numbers": [
        1,
        2,
        3
    ], 
    "obj": {
        "key": "value"
    },
    "split-key": "Value for split key"
}
`;

console.log(jsonData);
const json = JSON.parse(jsonData);
console.log("json.split-key");
// console.log(json.key);

const carJson = JSON.stringify(car);
console.log(carJson);

