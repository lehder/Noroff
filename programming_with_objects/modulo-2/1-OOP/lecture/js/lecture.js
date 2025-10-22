const car = {
    make: "Toyota",
    model: "Corolla",
    start: function () {
      console.log("Starting " + this.make);
    },
    start2: () => {
      console.log("starting car 2");
    },
    start3() {
      console.log("Starting car 3");
    },
  };
  console.log(car);
  
  class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
    start() {
      console.log("Starting engine");
    }
  }
  const ferrari = new Car("Ferrari", "La Ferrari");
  console.log(ferrari);
  ferrari.start();
  
  class ElectricCar extends Car {
    constructor(make, model, batteryCapcity) {
      super(make, model);
      this.batteryCapcity = batteryCapcity;
    }
    charge() {
      console.log("Charging car");
    }
  }
  
  const tesla = new ElectricCar("Tesla", "S", 80);
  console.log(tesla);
  tesla.start();
  tesla.charge();
  
  class Animal {
    breathe() {
      console.log("😤");
    }
    eat() {
      console.log("🍔");
    }
  }
  
  class Mammal extends Animal {
    produceMilk() {
      console.log("🍼");
    }
    mood() {
      console.log("😊");
    }
  }
  
  class BlueWhale extends Mammal {
    swim() {
      console.log("🐟");
    }
  }
  class Human extends Mammal {
    mood() {
      console.log("😐");
    }
  }
  const whale = new BlueWhale();
  const human = new Human();
  
  human.mood(); // neutral, mood gets overwritten
  
  const jsonData = `{
      "key": "values",
      "number": 2,
      "numbers": [1, 2, 3],
      "obj": {
          "key": "value"
      },
      "split-key": "value for split key"
  }`;
  console.log(jsonData);
  const json = JSON.parse(jsonData);
  console.log(json["split-key"]);
  
  const carJson = JSON.stringify(car);
  console.log(carJson);