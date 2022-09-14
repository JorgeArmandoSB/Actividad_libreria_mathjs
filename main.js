// Math.trunc() 
// Math.max()
// Math.min()
// Math.pow()
// Math.random()
// Math.round()
// Math.floor()
// Math.ceil()

// Math.max() retorna el numero mayor entre 2 o varios numeros

confirm("confirma para ver el numero mayor \n50,1235,5876,5684,10231,85321"  );


const max = [50,1235,5876,5684,10231,85321];

let maximo = Math.max(...max);

console.log(maximo);


document.querySelector('h1').innerHTML = maximo;






