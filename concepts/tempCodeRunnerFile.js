const numeros = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

//reduce
const sumatoria = numeros.reduce((a,b) => a + b);
const factorial = numeros.reduce((a,b) => a * b);
console.log(numeros);
console.log(sumatoria);
console.log(factorial);

//some(or) every(and)
const positivos = numeros.every(n => n > 0);
console.log(positivos);
const negativos = numeros.every(n => n < 0);
console.log(negativos);