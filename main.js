// Math.trunc() 
// Math.max()
// Math.min()
// Math.pow()
// Math.random()
// Math.round()
// Math.floor()
// Math.ceil()

// Math.trunc() Remueve el decimal de un número, convirtiéndolo en un entero 


let decimal = Number(prompt(`Digita un numero decima`,2.5));


function entero(d) {
   return  Math.trunc(d); 
}

document.querySelector('h1').innerHTML = `numero entero es: ${entero(decimal)}`;