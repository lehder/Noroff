class Animal {
    #birthDate;
    constructor(birthDate) {
      this.#birthDate = birthDate;
    }
    get birthDate() {
      return this.#birthDate;
    }
    set birthDate(birthDate) {
      if (new Date(birthDate)) {
        this.#birthDate = birthDate;
      }
    }
    getAge() {
      const today = new Date();
      const birth = new Date(this.birthDate);
      console.log("sOME LOGIC");
    }
    speak() {
      console.log("raaaawr");
    }
  }
  class Human extends Animal {
    constructor(birthDate, name) {
      super(birthDate);
      this.name = name;
    }
    speak() {
      console.log("hello");
    }
  }
  
  const person = new Human("2020-12-24", "Ludvig");
  
  person.getAge();