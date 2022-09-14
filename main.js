// Math.trunc() 
// Math.max()
// Math.min()
// Math.pow()
// Math.random()
// Math.round()
// Math.floor()
// Math.ceil()

// Math.pow()() se usa para hallar el elevado de un numero, se puede usar para hallar areas de figuras geometricas 


let numero = Number(prompt(`encuentra el elevado a la 3 de un mumero`,5));


function elevado(num) {
    return Math.pow(num,3);
}


document.querySelector('h1').innerHTML = `el elevado a la 3 es: ${elevado(numero)} `;








