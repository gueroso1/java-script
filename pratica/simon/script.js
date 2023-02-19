const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const yellow = document.querySelector('#yellow');

const score = document.querySelector('#score');
const iniciar = document.querySelector('#start');
const muteButton = document.querySelector('#mute');

const somGameOver = new Audio('sounds/sounds_end.mp3');
const redSom = new Audio('sounds/sounds_red.mp3');
const greenSom = new Audio('sounds/sounds_green.mp3');
const blueSom = new Audio('sounds/sounds_blue.mp3');
const yellowSom = new Audio('sounds/sounds_red.mp3');

let proximoIndice = 0;
scoreAtual = 0;


// Definir a sequência de botões aleatórios
const cores = ['red', 'green', 'yellow', 'blue'];
let sequenciaCor = [];


// escolhe uma cor aleatoria
const corEscolhida = () => {

    corAleatoria = Math.floor(Math.random() * 4);

    sequenciaCor.push(cores[corAleatoria]);

};


const tocarSom = (som) => {

    console.log(som)

    if (som === 'red') {
        redSom.play();
    } else if (som === 'green') {
        greenSom.play();
    } else if (som === 'blue') {
        blueSom.play();
    } else if (som === 'yellow') {
        yellowSom.play();
    }

};


// Checa se a resposta do jogador está correta
const checarResposta = (e) => {
    const corSelecionada = e.target;

    if (corSelecionada.id === sequenciaCor[proximoIndice]) {

        console.log('acertou');

        proximoIndice++;

        piscarCorSelecionada(corSelecionada.id);


        if (proximoIndice === sequenciaCor.length) {

            proximoIndice = 0;

            score.textContent = `Pontuação: ${++scoreAtual}`;

            corEscolhida();

            setTimeout(() => {
                piscarCor();
            }, 1000);


        };


    } else {

        somGameOver.play();

        alert('GAME OVER');

        sequenciaCor = [];

        proximoIndice = 0;

        scoreAtual = 0;

        score.textContent = `Pontuação: ${scoreAtual}`;

        iniciar.style.display = 'block';

    }
};


// função responsavel por mudar a cor fazendo o efeito de piscada
const piscarCor = () => {

    sequenciaCor.forEach((cor, index) => {

        setTimeout(() => {

            tocarSom(cor);

            document.querySelector(`#${cor}`).style.backgroundColor = '#fff';

            setTimeout(() => {

                document.querySelector(`#${cor}`).style.backgroundColor = cor;

            }, 300);

        }, 800 * index)

        cores.forEach(cor => {

            document.querySelector(`#${cor}`).addEventListener('click', checarResposta);

        });

    });

};


const piscarCorSelecionada = (id) => {

    tocarSom(id);

    document.querySelector(`#${id}`).style.backgroundColor = '#fff';

    setTimeout(() => {

        document.querySelector(`#${id}`).style.backgroundColor = id;

    }, 300);

};


// evento quando clicar no botão iniciar
iniciar.addEventListener('click', () => {

    iniciar.style.display = 'none';

    corEscolhida();

    piscarCor();

    console.log(sequenciaCor);
})

// evento para deixar o volume do som mudo
muteButton.addEventListener('click', () => {

    if (redSom.volume === 0) {

        redSom.volume = 1;

        greenSom.volume = 1;

        blueSom.volume = 1;

        yellowSom.volume = 1;

    } else {

        redSom.volume = 0;

        greenSom.volume = 0;

        blueSom.volume = 0;

        yellowSom.volume = 0;
    }

});
