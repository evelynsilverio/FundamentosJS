// High Order Function
// Funciones de Orden Superior
// Funciones que reciben como
// parámetros otras funciones

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

const calculator = (a, b, callback) => {
    const result = callback(a, b);
    console.log(result);
}

calculator(15, 9, suma);
calculator(15, 9, resta);
calculator(15, 9, (a, b) => a * b);
calculator(15, 9, (a, b) => a / b);

const foods = ['Tamales', 'Pizza', 'Chilaquiles', 'Pozole', 'Tacos', 'Maruchan']

const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
const squares = number.map(num => num * num);
const cubes = number.map(num => Math.pow(num, 3));
const halfs = number.map(num => num / 2);
console.log(number);
console.log(squares);
console.log(cubes);
console.log(halfs);


number.forEach(num => console.log(num));
number.forEach(num => console.log(Number(num) ** 2));
number.forEach(num => console.log(Number(num) ** 3));

foods.forEach(food => console.log(food));
foods.forEach(food => console.log(food.length));
foods.forEach(food => console.log(food.includes('a')));

const FOODS = foods.map(food => food.toUpperCase());
console.log(FOODS);

const foodsEmojis = foods.map(food => food + ' 🍔🍗');
console.log(foodsEmojis);

const sdoof = foods.map(food => {
    const separated = food.split('');
    const reversed = separated.reverse();
    const joined = reversed.join('');
    return joined;
    // food => food.split('').reverse().join('')
});
console.log(sdoof)


function wrappedGifts(gifts){
    return gifts.map(gift => {
        const tapa = '*'.repeat(gift.length + 2);
        return `${ tapa }\n*${ gift }*\n ${ tapa }`
    });
}
const foods = ['Tamales', 'Pizza', 'Chilaquiles', 'Pozole', 'Tacos', 'Maruchan'];

//pares impares, mayor y menor a 5
const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const impar = number.filter(num => num %2 !==0);
const par = number.filter(num => num %2 ===0);
const mayor = number.filter(num => num %2 > 5);
const menor = number.filter(num => num %2 < 5);
console.log(number);
console.log(impar);
console.log(par);
console.log(mayor);
console.log(menor);

// const wrappeds = wrappedGifts(foods);
// wrappeds.forEach(item => console.log(item));

//filter
const containsZ = foods.filter(food => food.includes('z'));
console.log(foods);
console.log(containsZ);

const endsWithS = foods.filter(food => food.endsWith('s'));
console.log(endsWithS);

//forEach, map, filter

// const numeros = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

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

constages = [20, 21, 25, 17, 18];
const algunos_mayores = ages.some(n => n >= 18);
console.log(algunos_mayores)
const algunos_menores = ages.some(n => n < 18);
console.log(algunos_menores);

const fruits = ['🍔','🍉', '🍎'];

const index_durazno = fruits.findIndex(f => f === '🍎');
console.log(fruits(index_durazno));