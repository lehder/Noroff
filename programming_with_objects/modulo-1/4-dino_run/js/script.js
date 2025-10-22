class BaseObject {
    constructor(width = 50, height = 50, x = 800, y = 300, speed = 1) {
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.color = "red";
    }
    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    static intersects(obj1, obj2) {
      if (
        obj1.x + obj1.width >= obj2.x &&
        obj1.x <= obj2.x + obj2.width &&
        obj1.y <= obj2.y + obj2.height &&
        obj1.y + obj1.height >= obj2.y
      ) {
        // should return something to reset the game
        console.log("inside");
      }
    }
  }
  
  class Player extends BaseObject {
    constructor(width = 50, height = 50, x = 200, y = 300, speed = 0) {
      super(width, height, x, y, speed);
      this.color = "green";
    }
  }
  class LowEnemy extends BaseObject {
    constructor(width = 50, height = 50, x = 800, y = 300, speed = -5) {
      super(width, height, x, y, speed);
    }
  }
  class HighEnemy extends BaseObject {
    constructor(width = 50, height = 50, x = 800, y = 260, speed = -5) {
      super(width, height, x, y, speed);
    }
  }
  
  const player = new Player();
  let enemy = new LowEnemy();
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  
  function move() {
    player.y += player.speed;
  
    if (player.y >= 300) {
      player.y = 300;
      player.speed = 0;
    } else {
      player.speed += 0.3;
    }
    enemy.x += enemy.speed;
  
    BaseObject.intersects(player, enemy);
    if (enemy.x < 0 - enemy.width) {
      const random = Math.floor(Math.random() * 2);
  
      switch (random) {
        case 0:
          enemy = new LowEnemy();
          break;
  
        case 1:
          enemy = new HighEnemy();
          break;
  
        default:
          enemy = new LowEnemy();
      }
    }
  }
  window.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (e.key === " ") {
      if (player.speed === 0) {
        player.speed = -10;
      }
    }
  });
  
  function render() {
    ctx.clearRect(0, 0, 800, 400);
    player.draw(ctx);
    enemy.draw(ctx);
  }
  
  function gameLoop() {
    move();
    render();
  }
  
  setInterval(gameLoop, 16);
  
  console.log(Date);
  
  BaseObject.intersects(
    { x: 80, y: 50, width: 50, height: 50 },
    { x: 50, y: 50, width: 50, height: 50 }
  );