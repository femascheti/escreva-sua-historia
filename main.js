const fraseDisplayElement = document.getElementById('fraseDisplay')
const fraseInputElement = document.getElementById('fraseInput')
const tempoDigitacao = document.getElementById('timer')

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
    "um dia em uma fábrica de brinquedos"
];

async function sorteiaFrase() {
  const randomIndex = Math.floor(Math.random() * frases.length); // Get a random index
  const frase = frases[randomIndex]; // Pick a random frase from the list

  fraseDisplayElement.innerHTML = ''; // Clear the display

  frase.split('').forEach(caractere => {
    const caractereSpan = document.createElement('span');
    caractereSpan.innerText = caractere;
    fraseDisplayElement.appendChild(caractereSpan);
  });

  fraseInputElement.value = ''; // Clear the input field
  comecarContagem();
}


let tempoInicio
function comecarContagem() {
  tempoDigitacao.innerText = 0
  tempoInicio = new Date()
  setInterval(() => {
    timer.innerText = startTempo()
  }, 1000)
}

function startTempo() {
  return Math.floor((new Date() - tempoInicio) / 1000)
}

sorteiaFrase()