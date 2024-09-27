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
        message.innerText = " Persiste, si todo fuera fácil, cualquiera lo lograría."
        break;
    case 1:
        message.innerText = "Sé el cambio que quieres ver en el mundo. "
        break;
    case 2:
        message.innerText = "La magia es creer en ti mismo. Si puedes hacer eso, puedes hacer que suceda cualquier cosa."
        break;
    case 3:
        message.innerText = "Los sueños se realizan cuando mantienes el compromiso con ellos."
        break;
    case 4:
        message.innerText = "No siempre conseguimos lo que queremos, pero tarde o temprano la vida nos concede aquello que merecemos."
        break;
    case 5:
        message.innerText = "Todo lo que siempre has querido está al otro lado del miedo."
        break;
    case 6:
        message.innerText = "Pon el corazón, mente y el alma incluso en los actos más pequeños."
        break;
}
}
ball.addEventListener('click', eightBall);