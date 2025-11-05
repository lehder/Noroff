1. Configuración Inicial y Canvas
Esta parte define constantes clave y prepara el área de dibujo.

```js

JavaScript
const WIDTH = 600;
const HEIGHT = 600;
const COLS = 10;
const canvas = document.querySelector("canvas");

canvas.width = WIDTH;
canvas.height = HEIGHT;

const ctx = canvas.getContext("2d");
Constantes de Dimensiones:
```
WIDTH y HEIGHT: Definen el ancho y alto del juego, 600 píxeles en este caso.

COLS: Define cuántas "columnas" o divisiones tendrá nuestro tablero de juego, 10.

Preparación del Canvas:

const canvas = document.querySelector("canvas");: Selecciona el elemento <canvas> en el HTML.

Se le asignan el WIDTH y HEIGHT definidos.

const ctx = canvas.getContext("2d");: Esto es crucial. Obtenemos el contexto de dibujo 2D del canvas, que es la herramienta que usaremos para dibujar formas, colores, etc. Piensa en ctx como nuestro pincel y paleta.

2. Clases de Objetos del Juego
Aquí se define la estructura de los dos elementos principales del juego: la Manzana (Apple) y la Serpiente (Snake). Usar clases es una práctica excelente porque nos permite modelar objetos del mundo real (o del juego) y encapsular su estado (propiedades) y comportamiento (métodos).
```js
Clase Apple 🍎
JavaScript
class Apple {
  constructor() {
    this.width = WIDTH / COLS; // 600 / 10 = 60
    this.height = HEIGHT / COLS; // 600 / 10 = 60
    this.x = this.width * 2;
    this.y = this.height * 2;
  }
}```
Constructor: Se ejecuta al crear una nueva manzana (new Apple()).

this.width y this.height: Definen el tamaño de la manzana. Al dividir el ancho/alto total (WIDTH/HEIGHT) entre COLS (10), aseguramos que cada unidad (cada segmento de la cuadrícula) sea de 60x60 píxeles.

this.x y this.y: Definen la posición inicial de la manzana, en este caso en la coordenada de la cuadrícula (2, 2).
```js
Clase Snake 🐍
Esta es la clase más compleja ya que maneja movimiento y crecimiento.

JavaScript
class Snake {
  directionX = 0; // -1: left, 1: right, 0: none
  directionY = 0; // -1: up, 1: down, 0: none
  body = [];
  constructor() {
    // ... similar a Apple, define el tamaño de un segmento
    this.width = WIDTH / COLS;
    this.height = HEIGHT / COLS;
    // Posición inicial: centro del canvas
    this.x = WIDTH / 2;
    this.y = HEIGHT / 2;
  }
  // ... métodos move() y setDirection()
} ```
Propiedades:

directionX / directionY: Indican la dirección actual de la serpiente. Son los "vectores de movimiento". Por defecto, está detenida (0, 0).

body: Es un array que almacenará las coordenadas de los segmentos del cuerpo de la serpiente (los que vienen detrás de la cabeza).

this.x / this.y: La posición de la cabeza de la serpiente, que empieza en el centro del canvas.

Método move()
Este método es el corazón de la lógica de movimiento.
```js
JavaScript
  move() {
    // 1. Mueve los segmentos del cuerpo
    for (let i = this.body.length - 1; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }
    // 2. Mueve el primer segmento del cuerpo (la 'cola') a donde estaba la cabeza
    if (this.body.length) {
      this.body[0].x = this.x;
      this.body[0].y = this.y;
    }

    // 3. Mueve la cabeza
    this.x += this.directionX * this.width;
    this.y += this.directionY * this.height; // Comentario útil: 240 += (-1*60)  :   240 + (-60) = 180
  } ```
Movimiento de la Cola: Recorremos el cuerpo desde el final hacia el principio (i > 0). Cada segmento hereda la posición de su predecesor. Esto crea el efecto de que el cuerpo sigue a la cabeza.

Primer Segmento: El primer segmento del cuerpo (body[0]) toma la posición anterior de la cabeza (this.x, this.y).

Movimiento de la Cabeza: La cabeza se mueve en la dirección actual. Si directionX es 1 (derecha), this.x aumenta en this.width (60px), moviéndose a la siguiente casilla. Si es -1 (izquierda), disminuye.

Método setDirection(direction)
Maneja la entrada del usuario y actualiza directionX y directionY.
```js
JavaScript
  setDirection(direction) {
    switch (direction) {
      // ... casos up, down, left, right
      case "up":
        if (this.directionY) return; // Evita que gire 180 grados si ya está moviéndose verticalmente
        this.directionX = 0;
        this.directionY = -1; // -1 en Y es "hacia arriba" en Canvas
        break;
      // ...
    }
  } ```
Lógica Antigiro 180°: La condición if (this.directionY) return; (o if (this.directionX) return; para los laterales) es un mecanismo de seguridad vital. Evita que la serpiente intente ir directamente hacia atrás (ej. ir 'abajo' inmediatamente después de ir 'arriba'), lo que causaría el fin del juego instantáneamente. Si ya se mueve verticalmente (directionY es -1 o 1), no puede establecer una nueva dirección vertical.

3. Funciones del Juego y Bucle Principal
Aquí definimos la lógica de alto nivel, como las colisiones, el fin del juego y el bucle de renderizado.
```js
Función gameOver() 💀
JavaScript
function gameOver() {
  alert("You died");
  // Reinicia las coordenadas y dirección de la serpiente
  snake.x = 0;
  snake.y = 0;
  snake.directionX = 0;
  snake.directionY = 0;
} ```
Lógica Simple: Muestra una alerta y resetea la posición de la cabeza de la serpiente al punto (0, 0) con dirección detenida. Notarás que el cuerpo de la serpiente (snake.body) no se resetea aquí, lo cual es un pequeño bug o una simplificación del código inicial.

Función placeApple() 🎯
Coloca la manzana en una nueva posición aleatoria.
```js
JavaScript
function placeApple() {
  // Genera coordenadas aleatorias dentro de la cuadrícula
  apple.x = parseInt(Math.random() * COLS) * apple.width;
  apple.y = parseInt(Math.random() * COLS) * apple.height;
  // ... lógica de validación
} ```
Coordenadas Aleatorias:

Math.random() * COLS: Genera un número entre 0 y 10 (ej. 4.3).

parseInt(...): Lo convierte en un entero (ej. 4). Esta es la coordenada de la cuadrícula.

... * apple.width: Multiplicamos por 60px para obtener la coordenada real en píxeles (ej. 4×60=240px).

Validación: El código verifica que la nueva posición de la manzana no esté ocupada ni por la cabeza de la serpiente ni por ningún segmento de su cuerpo. Si lo está, llama a placeApple() recursivamente para intentarlo de nuevo.

Función move() ➡️
Ejecuta un paso de la simulación del juego.
```js
JavaScript
function move() {
  snake.move(); // Mueve la serpiente

  // 1. Detección de Colisión con Muros
  if (snake.x >= WIDTH || snake.x < 0 || snake.y >= HEIGHT || snake.y < 0) {
    gameOver(); // Si la cabeza está fuera de los límites, Game Over.
  }

  // 2. Detección de Colisión con Manzana
  if (snake.x === apple.x && snake.y === apple.y) {
    // Si la cabeza está en la misma posición que la manzana
    snake.body.push({ height: 60, width: 60 }); // ¡La serpiente crece!
    placeApple(); // Coloca una nueva manzana
  }
} ```
Función render() 🎨
Dibuja el estado actual del juego en el canvas.
```js
JavaScript
function render() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT); // Limpia el canvas (frame anterior)

  // Dibuja la manzana
  ctx.fillStyle = "red";
  ctx.fillRect(apple.x, apple.y, apple.width, apple.height);

  // Dibuja la cabeza de la serpiente
  ctx.fillStyle = "green";
  ctx.fillRect(snake.x, snake.y, snake.width, snake.height);

  // Dibuja el cuerpo de la serpiente
  ctx.fillStyle = "black";
  for (const element of snake.body) {
    ctx.fillRect(element.x, element.y, element.width, element.height);
  }
} ```
ctx.clearRect(...): Esencial. Borra todo el canvas antes de dibujar el nuevo frame, evitando "rastros".

ctx.fillStyle y ctx.fillRect: Estas son las llamadas al API de Canvas 2D para establecer el color y dibujar un rectángulo en las coordenadas y dimensiones dadas.

Función gameLoop() 🔄
Este es el bucle principal del juego.
```js
JavaScript
let frameDelay = 30; // Controla la velocidad del juego
let currentFrame = 0;

function gameLoop() {
  if (currentFrame < frameDelay) {
    currentFrame++; // Espera hasta alcanzar el retraso
  } else {
    currentFrame = 0;
    move(); // Ejecuta la lógica del juego (movimiento, colisiones)
    render(); // Dibuja el nuevo estado
  }

  requestAnimationFrame(gameLoop); // Llama al siguiente frame de animación
}
requestAnimationFrame(gameLoop); ```
requestAnimationFrame: Es el método estándar y optimizado en navegadores para crear bucles de juego o animación. Asegura que la actualización se sincronice con la tasa de refresco de la pantalla.

Control de Velocidad (Tick Rate):

La lógica if (currentFrame < frameDelay) ralentiza el juego.

Como requestAnimationFrame llama a la función a la máxima velocidad posible (generalmente 60 veces por segundo), al requerir 30 frames (frameDelay) para ejecutar la lógica (move() y render()), el juego se actualiza a 60÷30=2 veces por segundo. ¡Esto es lento! Un valor de frameDelay más bajo (ej. 5) haría la serpiente mucho más rápida (60÷5=12 movimientos por segundo).

4. Entrada del Usuario
Finalmente, el código maneja la interacción del jugador.
```js
JavaScript
window.addEventListener("keydown", (e) => {
  e.preventDefault(); // Evita el comportamiento por defecto del navegador (scroll)
  e.stopPropagation(); // Detiene la propagación del evento

  switch (e.key) {
    case "ArrowUp":
      snake.setDirection("up");
      break;
    // ... otros casos ArrowDown, ArrowRight, ArrowLeft
  }
}); ```
keydown: Escucha cada vez que se presiona una tecla en la ventana.

e.preventDefault(): Es fundamental en juegos de teclado para evitar que las teclas de flecha muevan la ventana del navegador.

switch: Llama al método setDirection de la serpiente, actualizando sus vectores de movimiento, lo que se reflejará en el siguiente tick del gameLoop.

Resumen del Flujo 💡
Inicialización: Se definen constantes, se prepara el canvas, y se crean las instancias de snake y apple.

Bucle Principal (gameLoop): Se llama repetidamente a la función.

Control de Velocidad: Espera la cantidad de frames definida por frameDelay.

Actualización Lógica (move): La serpiente se mueve, se comprueban colisiones con muros y la manzana. Si come, crece y la manzana se recoloca.

Dibujo (render): Se borra y se redibuja la manzana y la serpiente en sus nuevas posiciones.

Entrada: Las teclas de flecha cambian la dirección de la serpiente para el siguiente ciclo.

