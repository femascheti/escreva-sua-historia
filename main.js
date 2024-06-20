const fraseDisplayElement = document.getElementById('fraseDisplay');
const fraseInputElement = document.getElementById('fraseInput');
const botaoTema = document.getElementById('btn-sorteia');

const frases = [
    "um cachorro que fala",
    "uma floresta mágica",
    "um dia vivendo no espaço",
    "um brinquedo que ganha vida",
    "uma festa junina com animais da selva",
    "uma cidade feita de doces",
    "um dia na escola de magia",
    "um robô amigo",
    "um mundo onde tudo é gigante",
    "uma aventura embaixo do mar",
    "um príncipe sapo",
    "um livro mágico que realiza desejos",
    "um parque de diversões",
    "um detetive com cabelo vermelho",
    "um dia sem energia",
    "uma viagem para o tempo dos dinossauros",
    "uma aventura com fadas e duendes",
    "um chapéu mágico que dá poderes",
    "uma lâmpada mágica",
    "um inverno onde a neve é colorida",
    "uma viagem para o planeta Marte",
    "um dia de um capitão de navio pirata",
    "um dia em uma fábrica de brinquedos", 
    "uma conversa entre a Lua e o Sol",
    "uma conversa entre a Terra e a Lua",
];

botaoTema.addEventListener('click', sorteiaFrase);

function sorteiaFrase() {
    const randomIndex = Math.floor(Math.random() * frases.length);
    const frase = frases[randomIndex];

    fraseDisplayElement.innerHTML = frase;
    fraseInputElement.value = '';
}



sorteiaFrase();
