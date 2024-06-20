const fraseDisplayElement = document.getElementById('fraseDisplay')
const fraseInputElement = document.getElementById('fraseInput')
const tempoDigitacao = document.getElementById('timer')

const frases = [
  "Uma mensagem muito longa!",
  "Eu gosto de chocolate e você?",
  "Aqui vai uma frase inspiradora.",
];

fraseInputElement.addEventListener('input', () => {
  const listaFrases = fraseDisplayElement.querySelectorAll('span')
  const listaValores = fraseInputElement.value.split('')

  let correto = true
  listaFrases.forEach((caractereSpan, index) => {
    const caractere = listaValores[index]
    if (caractere == null) {
      caractereSpan.classList.remove('correto')
      caractereSpan.classList.remove('incorreto')
      correto = false
    } else if (caractere === caractereSpan.innerText) {
      caractereSpan.classList.add('correto')
      caractereSpan.classList.remove('incorreto')
    } else {
      caractereSpan.classList.remove('correto')
      caractereSpan.classList.add('incorreto')
      correto = false
    }
  })

  if (correto) sorteiaFrase()
})

// function getRandomfrase() {
//   return fetch(RANDOM_frase_API_URL)
//     .then(response => response.json())
//     .then(data => data.content)
// }

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