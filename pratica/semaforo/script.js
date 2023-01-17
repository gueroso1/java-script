const img = document.querySelector('#img')
const butoes = document.querySelector('#butoes')
let corIndice = 0
let intervalId = null;

// const ligado = {
//     'vermelho': function() {
//         img.src = 'img/vermelho.png'
//     },
//     'verde': function() {
//         img.src = 'img/verde.png'
//     },
//     'amarelo': function() {
//         img.src = 'img/amarelo.png'
//     }
// }

// function cores(evento) {
//     ligado[evento.target.id]()
// }



const cores = (evento) => {
    paradaAuto();
    ligado[evento.target.id]();
}

const proximoIndice = () => {
    if (corIndice < 2) {
        corIndice++
    } else {
        corIndice = 0
    }
}

const corAleatoria = () => {
    const colors = ['vermelho', 'amarelo', 'verde'];
    const color = colors[corIndice];
    ligado[color]();
    proximoIndice();
}

const paradaAuto = () => {
    clearInterval(intervalId);
}

const ligado = {
    'vermelho': () => img.src = 'img/vermelho.png',
    'verde': () => img.src = 'img/verde.png',
    'amarelo': () => img.src = 'img/amarelo.png',
    'automatico': () => intervalId = setInterval(corAleatoria, 800)
}

butoes.addEventListener('click', cores)