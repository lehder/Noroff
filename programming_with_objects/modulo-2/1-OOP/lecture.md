---
header: "Lesson 2.1: Object-Oriented Programming"
marp: true
theme: default
size: 16:9
paginate: true
color: #111
backgroundColor: #eee
_footer: "@2025 Ludvig Alvir"
---

# OOP

---

## Objects

```js
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  start() {
    console.log("Car started");
  },
};

car.start();
```

---

## Classes

```js
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log("Car started");
  }
}
const car = new Car("Toyota", "Corolla", 2020);
car.start();
```

---

## Extending classes

```js
class ElectricCar extends Car {
  constructor(make, model, year, batteryCapacity) {
    super(make, model, year);
    this.batteryCapacity = batteryCapacity;
  }

  charge() {
    console.log("Car is charging");
  }
}
```

---

## JSON

<!-- prettier-ignore -->
```js
const car = {
  "make": "Toyota",
  "model": "Corolla",
  "year": 2020
};
```

---

## Object to JSON

```js
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  start() {
    console.log("Car started");
  },
};
console.log(JSON.stringify(car));
```

Do you spot something?

---

## JSON to object

<!-- prettier-ignore -->
```js
const carJSON = `{
  "make": "Toyota",
  "model": "Corolla",
  "year": 2020
}`;
const car = JSON.parse(CarJSON);

```

---

## LocalStorage