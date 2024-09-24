const btnPlay = document.getElementById('btnPlay');
const divMaq = document.getElementById('divMaq');
const message = document.getElementById('message');
let choiceUser = "";


document.getElementById('imgPiedra').addEventListener('click', () => {
    choiceUser = 'piedra';
    message.innerText = 'Elegiste: Piedra';
});
document.getElementById('imgPapel').addEventListener('click', () => {
    choiceUser = 'papel';
    message.innerText = 'Eligiste: Papel';
});
document.getElementById('imgTijeras').addEventListener('click', () => {
    choiceUser = 'tijeras';
    message.innerText = 'Elegiste: Tijeras';
});


btnPlay.addEventListener('click', () => {
    if (!choiceUser) {
        message.innerText = 'Primero elige piedra, papel o tijeras.';
        return;
    }

    // La elección
    const choices = ['piedra', 'papel', 'tijeras'];
    const aleatorio = Math.floor(Math.random() * 3);
    const choiceMaq = choices[aleatorio];
    divMaq.innerText = choiceMaq.charAt(0).toUpperCase() + choiceMaq.slice(1);

    // Para ver quién gana
    if (choiceUser === choiceMaq) {
        message.innerText = 'Es un empate';
    } else if (
        (choiceUser === 'piedra' && choiceMaq === 'tijeras') ||
        (choiceUser === 'papel' && choiceMaq === 'piedra') ||
        (choiceUser === 'tijeras' && choiceMaq === 'papel')
    ) {
        message.innerText = '¡GANASTEEEE!';
    } else {
        message.innerText = 'Uuuy perdiste!!!. La computadora gana.';
    }

    // Para reiniciar la jugada
    choiceUser = "";
});
