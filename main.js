// Math.trunc() 
// Math.max()
// Math.min()
// Math.pow()
// Math.random()
// Math.round()
// Math.floor()
// Math.ceil()

// Math.random() da un numero random de 0 a 1 es con decimales no incluye el 1, nos sirve para optener numeros aleatorios para un bingo junto con math round que nos vuelve el numero entero aproximando el decimal, si es 0.5 se aproxima al mayor mas cercano

let max = 101;
let min = 0;

let = numeroAleatorio = Math.round(Math.random() * (max-min) + min);







document.querySelector('h1').innerHTML = `el numero ganador es: ${numeroAleatorio}`


