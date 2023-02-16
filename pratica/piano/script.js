const teclas = document.querySelectorAll('.key');
const checkbox = document.querySelector('.checkbox__keys');
const switcher = document.querySelector('.switcher');
const keySection = document.querySelector('.piano__keys');


// função que toca as notas
const tocarNota = (nota) => {

    // armazena as notas em uma variavel
    const audio = new Audio(`notas/${nota}.wav`);

    // toca a nota
    audio.play();

}


// quando clica em uma tecla
const handleMouseDown = (tecla) => {

    // toca a nota de acordo com a tecla clicada
    tocarNota(tecla.getAttribute('data-note'));

    // se a tecla for a preta adiciona uma classe de estilo
    if (tecla.className.includes('black')) {
        tecla.classList.add('black--pressed');
        return;
    }

    // muda o estilo da tecla branca quando clicada
    tecla.style.background = '#ddd';

}


// depois que clicou na tecla
const handleMouseUp = (tecla) => {

    // volta o estilo da tecla preta
    if (tecla.className.includes('black')) {
        tecla.classList.remove('black--pressed');
        return;
    }

     // volta o estilo da tecla branca
    tecla.style.background = 'white';

}


// pega cada um dos elementos da variavel teclas
teclas.forEach((tecla) => {

    // adiciona o evento de quando uma tecla é clicada
    tecla.addEventListener('mousedown', () => handleMouseDown(tecla));
   
    // adiciona o evento depois de uma tecla ser clicada
    tecla.addEventListener('mouseup', () => handleMouseUp(tecla));

});


// evento de quando clica no 'mostrar letras'
checkbox.addEventListener('change', ({ target }) => {

    // se o checkbox for True
    if (target.checked) {

        // adiciona uma classe nova no span switcher
        switcher.classList.add('switcher--active');
        
        // remove uma classe na section piano__keys
        keySection.classList.remove('disabled-keys');
        
        // retorna o valor
        return;

    }

    // remove uma classe no span switcher
    switcher.classList.remove('switcher--active');

     // adiciona uma classe na section piano__keys
    keySection.classList.add('disabled-keys');

})

// objeto que tem a tecla especifica correspondente ao som
const keyDownMapper = {
    'Tab': () => handleMouseDown(teclas[0]),
    '1': () => handleMouseDown(teclas[1]),
    'q': () => handleMouseDown(teclas[2]),
    '2': () => handleMouseDown(teclas[3]),
    'w': () => handleMouseDown(teclas[4]),
    'e': () => handleMouseDown(teclas[5]),
    '4': () => handleMouseDown(teclas[6]),
    'r': () => handleMouseDown(teclas[7]),
    '5': () => handleMouseDown(teclas[8]),
    't': () => handleMouseDown(teclas[9]),
    '6': () => handleMouseDown(teclas[10]),
    'y': () => handleMouseDown(teclas[11]),
    'u': () => handleMouseDown(teclas[12]),
    '8': () => handleMouseDown(teclas[13]),
    'i': () => handleMouseDown(teclas[14]),
    '9': () => handleMouseDown(teclas[15]),
    'o': () => handleMouseDown(teclas[16]),
    'p': () => handleMouseDown(teclas[17]),
    '-': () => handleMouseDown(teclas[18]),
    "Dead": () => handleMouseDown(teclas[19]),
    '=': () => handleMouseDown(teclas[20]),
    '[': () => handleMouseDown(teclas[21]),
    'Backspace': () => handleMouseDown(teclas[22]),
    ']': () => handleMouseDown(teclas[23])
}

// objeto que tem a tecla especifica correspondente ao som
const keyUpMapper = {
    'Tab': () => handleMouseUp(teclas[0]),
    '1': () => handleMouseUp(teclas[1]),
    'q': () => handleMouseUp(teclas[2]),
    '2': () => handleMouseUp(teclas[3]),
    'w': () => handleMouseUp(teclas[4]),
    'e': () => handleMouseUp(teclas[5]),
    '4': () => handleMouseUp(teclas[6]),
    'r': () => handleMouseUp(teclas[7]),
    '5': () => handleMouseUp(teclas[8]),
    't': () => handleMouseUp(teclas[9]),
    '6': () => handleMouseUp(teclas[10]),
    'y': () => handleMouseUp(teclas[11]),
    'u': () => handleMouseUp(teclas[12]),
    '8': () => handleMouseUp(teclas[13]),
    'i': () => handleMouseUp(teclas[14]),
    '9': () => handleMouseUp(teclas[15]),
    'o': () => handleMouseUp(teclas[16]),
    'p': () => handleMouseUp(teclas[17]),
    '-': () => handleMouseUp(teclas[18]),
    "Dead": () => handleMouseUp(teclas[19]),
    '=': () => handleMouseUp(teclas[20]),
    '[': () => handleMouseUp(teclas[21]),
    'Backspace': () => handleMouseUp(teclas[22]),
    ']': () => handleMouseUp(teclas[23])
}


// evento de quando uma tecla do teclado é clicado
document.addEventListener('keydown', (e) => {

    // previne o comportamento padrão do navegador
    e.preventDefault();

    // quando apertar a tecla do teclado vai tocar o som
    keyDownMapper[e.key]();

})

// evento depois que a tecla do teclado é clicado
document.addEventListener('keyup', (e) => {

    // previne o comportamento padrão do navegador
    e.preventDefault();

    // depois que apertou a tecla do teclado
    keyUpMapper[e.key]();

})
