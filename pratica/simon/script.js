const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const yellow = document.querySelector('#yellow');

const score = document.querySelector('#score');
const iniciar = document.querySelector('#start');

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
