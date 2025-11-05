const WIDTH = 600;
const HEIGHT = 600;
const COLS = 10;
const canvas = document.querySelector("canvas");

canvas.width = WIDTH;
canvas.height = HEIGHT;

const ctx = canvas.getContext("2d");

class Apple {
  constructor() {
    this.width = WIDTH / COLS;
    this.height = HEIGHT / COLS;
    this.x = this.width * 2;
    this.y = this.height * 2;
  }
}

class Snake {
  directionX = 0;
  directionY = 0;
  body = [];
  constructor() {
    this.width = WIDTH / COLS;
    this.height = HEIGHT / COLS;
    this.x = WIDTH / 2;
    this.y = HEIGHT / 2;
  }
  move() {
    for (let i = this.body.length - 1; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }
    if (this.body.length) {
      this.body[0].x = this.x;
      this.body[0].y = this.y;
    }

    this.x += this.directionX * this.width;
    this.y += this.directionY * this.height; // 240 += (-1*60)  :   240 + (-60) = 180
  }
  setDirection(direction) {
    switch (direction) {
      case "up":
        if (this.directionY) return;
        this.directionX = 0;
        this.directionY = -1;

        break;
      case "down":
        if (this.directionY) return;
        this.directionX = 0;
        this.directionY = 1;
        break;
      case "left":
        if (this.directionX) return;
        this.directionX = -1;
        this.directionY = 0;
        break;
      case "right":
        if (this.directionX) return;
        this.directionX = 1;
        this.directionY = 0;
        break;
    }
  }
}

const snake = new Snake();
const apple = new Apple();

function gameOver() {
  alert("You died");
  snake.x = 0;
  snake.y = 0;
  snake.directionX = 0;
  snake.directionY = 0;
}
function placeApple() {
  apple.x = parseInt(Math.random() * COLS) * apple.width;
  apple.y = parseInt(Math.random() * COLS) * apple.height;
  let valid = true;
  if (snake.x === apple.x && snake.y === apple) {
    valid = false;
  }
  for (const element of snake.body) {
    if (element.x === apple.x && element.y === apple.y) {
      valid = false;
    }
  }
  if (!valid) {
    placeApple();
  }
}
function move() {
  snake.move();

  if (snake.x >= WIDTH || snake.x < 0 || snake.y >= HEIGHT || snake.y < 0) {
    gameOver();
  }
  if (snake.x === apple.x && snake.y === apple.y) {
    snake.body.push({ height: 60, width: 60 });
    placeApple();
  }
}

function render() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT); // clears the canvas so we can draw next frame
  // drawing apple
  ctx.fillStyle = "red";
  ctx.fillRect(apple.x, apple.y, apple.width, apple.height);
  // drawing snake
  ctx.fillStyle = "green";
  ctx.fillRect(snake.x, snake.y, snake.width, snake.height);
  ctx.fillStyle = "black";
  for (const element of snake.body) {
    ctx.fillRect(element.x, element.y, element.width, element.height);
  }
}
let frameDelay = 30;
let currentFrame = 0;
function gameLoop() {
  if (currentFrame < frameDelay) {
    currentFrame++;
  } else {
    currentFrame = 0;
    move();
    render();
  }

  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);

window.addEventListener("keydown", (e) => {
  e.preventDefault();
  e.stopPropagation();
  switch (e.key) {
    case "ArrowUp":
      snake.setDirection("up");
      break;
    case "ArrowDown":
      snake.setDirection("down");
      break;
    case "ArrowRight":
      snake.setDirection("right");
      break;
    case "ArrowLeft":
      snake.setDirection("left");
      break;
  }
});