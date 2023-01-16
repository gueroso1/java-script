const ligar = document.getElementById('ligar')
const desligar = document.querySelector('#desligar');
const lamp = document.querySelector('#lamp');

function estaQuebrada() {
    return lamp.src.indexOf('quebrada') > -1;
}

function quebrada() {
    lamp.src = 'img/quebrada.jpg';
}

function ligada() {
    if (!estaQuebrada()) {
        lamp.src = 'img/ligada.jpg';
    }
}

function desligada() {
    if (!estaQuebrada()) {
        lamp.src = 'img/desligada.jpg';
    }
}

ligar.addEventListener('click', ligada);
desligar.addEventListener('click', desligada);
lamp.addEventListener('mouseover', ligada);
lamp.addEventListener('mouseout', desligada);
lamp.addEventListener('dblclick', quebrada);