//apuntar al div
const ball = document.querySelector('div');
const message = document.querySelector('h1');

const eightBall = () => {
    //TODO
    //crear número aleatorio (0 - 8)
    //switch/case para mensajes distintos
    // message.innerText = "Le diste click! 🍔🍔";
    // let.message = 0;

    const random = Math.floor(Math.random() * 8);
switch(random){
    case 0:
        message.innerText = "Holaaa"
        break;
    case 1:
        message.innerText = "Chikiiiis"
        break;
    case 2:
        message.innerText = "Ajaaa"
        break;
    case 3:
        message.innerText = "Pelusa"
        break;
    case 4:
        message.innerText = "Piña"
        break;
    case 5:
        message.innerText = "Petite"
        break;
    case 6:
        message.innerText = "holaaa2"
        break;
}
}
ball.addEventListener('click', eightBall);