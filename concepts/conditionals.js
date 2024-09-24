// if else if else

let age = 18;
if (age >=18) {
    console.log("Es mayor de edad!");
} else if (age > 15) {
    console.log("Es niño!")
} else {
    console.log("Es menor de que un niño")
}

// Truthy and Falsy
//myNum=0 --> false
//myNum>0 --> true
//myStr=''--> false
//myStr='Hi'--> true

// Asignar Uusraio por defecto
let username = '';
let defaultName = '';

if(username !==''){
    defaultName = username;
} else {
    defaultName = 'Invitado';
}

if(username){
    defaultName = username;
} else {
    defaultName = 'Invitado';
}

defaultName = username || 'Invitado';

/**
 * expr ? true: false;
 */
(age >= 18) 
    ? console.log('Si es mayor')
    : console.log('No es mayor')

defaultName = username? username : 'Invitado';
console.log(defaultName);

//switch case
const day = Math.floor(Math.random() * 7);
switch(day){
    case 0:
        console.log("Es domingo ");
        break;
    case 1:
        console.log("Es lunes");
        break;
    case 2:
        console.log("Es martes");
        break;
    case 3:
        console.log("Es miárcoles");
        break;
    case 4:
        console.log("Es jueves");
        break;
    case 5:
        console.log("Es viernes");
        break;
    case 6:
        console.log("Es sábado");
        break;
    default:
        console.log("Día no válido");
}