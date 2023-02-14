const musicas = [
    { titulo: 'Favela Vive 5', artista: 'ADL', src: 'music/favela-vive.mp3', img: 'img/favelavive.png' },

    { titulo: 'Death Lotto', artista: 'Ovg', src: 'music/death-lotto.mp3', img: 'img/death-lotto.jpg' },

    { titulo: 'Ghostemane', artista: 'Mercury', src: 'music/ghostmane.mp3', img: 'img/mercury.jpg' },

    { titulo: 'Kitty Phonk', artista: 'Soviss', src: 'music/kitty-phonk.mp3', img: 'img/kitty-phonk.jpg' },

    { titulo: 'Vendetta', artista: 'Mupp', src: 'music/vendetta.mp3', img: 'img/vendetta.jpg' },

    { titulo: 'Void Whispers', artista: 'Ovg', src: 'music/void-whispers.mp3', img: 'img/void-whispers.jpg' },

    { titulo: 'Hollow Shikai', artista: 'Ovg', src: 'music/hollow-shikai.mp3', img: 'img/hollow-knight.jpg' }
];


let imagem = document.querySelector('#imagem');
let nomeMusica = document.querySelector('#nomeMusica');
let nomeArtista = document.querySelector('#nomeArtista');
let duracaoMusica = document.querySelector('.fim');

const playMusica = document.querySelector('.botao-play')
const pauseMusica = document.querySelector('.botao-pause')

let musica = document.querySelector('#musica');
let indexMusica = 0;




// funções

const tocarMusica = () => {
    musica.play();
    pauseMusica.style.display = 'block';
    playMusica.style.display = 'none';
}



const pausarMusica = () => {
    musica.pause();
    pauseMusica.style.display = 'none';
    playMusica.style.display = 'block';
}



const atualizarBarra = () => {
    let barra = document.querySelector('#barrinha');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';

    let tempoDecorrido = document.querySelector('.inicio');

    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}



const segundosParaMinutos = (s) => {
    let campoMinutos = Math.floor(s / 60);

    let camposegundos = s % 60;

    if (camposegundos < 10) {
        camposegundos = '0' + camposegundos;
    };

    return `${campoMinutos}:${camposegundos}`;
}



const duracao = () => {
    duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
}



const renderizarMusica = (i) => {
    musica.setAttribute('src', musicas[i].src);

    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[i].titulo;

        nomeArtista.textContent = musicas[i].artista;

        imagem.src = musicas[i].img;

        duracao();
    });
}



// eventos

playMusica.addEventListener('click', tocarMusica);

pauseMusica.addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('#anterior').addEventListener('click', () => {
    indexMusica--;
    renderizarMusica(indexMusica);
})

document.querySelector('#proxima').addEventListener('click', () => {
    indexMusica++;
    renderizarMusica(indexMusica);
})