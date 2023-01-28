const grid = document.querySelector('.grid');
const player = document.querySelector('.player');
const timer = document.querySelector('.timer');

// lista com nome das cartas
const personagens = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
];


// função que cria tag e classes para as tags criadas
const criarElemento = (tag, classNome) => {

    // cria a tag
    const elemento = document.createElement(tag);

    // cria a classe para tag
    elemento.className = classNome;

    // retorna a variavel
    return elemento;
}

// variaveis que recebem as cartas clicadas
let primeiraCarta = '';
let segundaCarta = '';


// função que checa se venceu o jogo
const checarSeVenceu = () => {

    // armazena todos elementos que tem a classe '.desabilitar-carta'
    const cartasDesabilitadas = document.querySelectorAll('.desabilitar-carta');

    // se tiver 20 cartas desabilitadas é porque o jogo acabou
    if (cartasDesabilitadas.length == 20) {
        setTimeout(() => {
            
            // limpa o timer
            clearInterval(this.loop);

            // mensagem de vitoria
            alert(`Parabéns, ${player.innerHTML}! Seu tempo foi ${timer.innerHTML} de segundos.`);
        }, 800);

    }
}


// função que checa se as cartas são iguais ou diferentes
const checarCartas = () => {

    // variaveis que recebem o atributo que possue o nome do personagem
    const primeiroPersonagem = primeiraCarta.getAttribute('data-personagemNome')
    const segundoPersonagem = segundaCarta.getAttribute('data-personagemNome')

    // se acertar as cartas
    if (primeiroPersonagem == segundoPersonagem) {

        // se as cartas forem iguais executa isso
        primeiraCarta.firstChild.classList.add('desabilitar-carta');
        segundaCarta.firstChild.classList.add('desabilitar-carta');

        // reseta as cartas para continuar jogando
        primeiraCarta = '';
        segundaCarta = '';

        checarSeVenceu();


    } else { //se errar as cartas

        // se as cartas forem diferentes executa isso
        setTimeout(() => {
            primeiraCarta.classList.remove('revelar-carta');
            segundaCarta.classList.remove('revelar-carta');

            // reseta as cartas para continuar jogando
            primeiraCarta = '';
            segundaCarta = '';
        }, 500)

    }
}


// função que revela as cartas
const revelarCarta = ({ target }) => {

    // verifica se uma carta revelada ja foi revelada(pra evitar erros)
    if (target.parentNode.className.includes('revelar-carta')) {
        return;
    }

    // verifica se a primeiraCarta e segundaCarta ja foram clicadas
    if (primeiraCarta == '') {

        // adiciona a classe 'revelar-carta' na div pai da carta que foi clicada e revela a carta
        target.parentNode.classList.add('revelar-carta');

        // primeiraCarta recebe a carta que foi clicada
        primeiraCarta = target.parentNode;
    } else if (segundaCarta == '') {

        // adiciona a classe 'revelar-carta' na div pai da carta que foi clicada e revela a carta
        target.parentNode.classList.add('revelar-carta');

        // segundaCarta recebe a carta que foi clicada
        segundaCarta = target.parentNode;

        // checa se as cartas são iguais ou diferentes
        checarCartas();
    }

}


// função que cria as cartas
const criarCartas = (personagem) => {

    // cria a carta no game.html
    const card = criarElemento('div', 'card')
    const frente = criarElemento('div', 'face frente')
    const costas = criarElemento('div', 'face costas')

    // adiciona e mostra a imagem da frente da carta
    frente.style.backgroundImage = `url(../img/${personagem}.png)`;

    // coloca as divs filhas na div pai
    card.appendChild(frente);
    card.appendChild(costas);

    // aciona o evento de clicar na carta e revela-la
    card.addEventListener('click', revelarCarta);

    // adiciona um atributo na carta quando ela é criada
    card.setAttribute('data-personagemNome', personagem)

    return card;
}


// função que carrega as cartas na tela
const carregarJogo = () => {

    // espalhando os elementos da lista de personagens na variavel pra duplica-los
    const duplicarCartas = [...personagens, ...personagens]

    // embaralha as cartas duplicadas aleatoriamente
    const embaralharCartas = duplicarCartas.sort(() => Math.random() - 0.5);

    // para cada personagem na lista de personagem executa a função abaixo
    embaralharCartas.forEach((personagem) => {

        // cria uma carta para elemento na lista personagens
        const carta = criarCartas(personagem);

        // adiciona a div pai (grid) as divs filhas (cartas)
        grid.appendChild(carta);
    });
}


const iniciarTimer = () => {

    // armazena o temporizador na variavel
    this.loop = setInterval(() => {

        const tempoAtual = +timer.innerHTML;

        timer.innerHTML = tempoAtual + 1

    }, 1000)
}


// quando a janela carregar
window.onload = () => {

    // carrega na tela o nome do jogador
    player.innerHTML = localStorage.getItem('Jogador');

    // inicia o timer
    iniciarTimer();

    // carrega o jogo
    carregarJogo();
}