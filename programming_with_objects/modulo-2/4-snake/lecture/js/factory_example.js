class Enemy {
    constructor(hp, dmg) {
      this.hp = hp;
      this.dmg = dmg;
    }
    static  randomEnemy() {
      const randomNumber = parseInt(Math.random() * 4); // random integer between 0 and 3
  
      switch (randomNumber) {
        case 0:
          return new Enemy(10, 10);
  
        case 1:
          return new Enemy(20, 20);
  
        default:
          return new Enemy(15, 15);
      }
    }
  }
  
  function factory() {
    const randomNumber = parseInt(Math.random() * 4); // random integer between 0 and 3
  
    switch (randomNumber) {
      case 0:
        return new Enemy(10, 10);
  
      case 1:
        return new Enemy(20, 20);
  
      default:
        return new Enemy(15, 15);
    }
  }
  
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(factory());
  }
  console.log(arr);