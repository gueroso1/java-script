let containerItens = document.querySelector('#container-itens');
let itens = document.querySelectorAll('.item');

const anterior = () => {  
    containerItens.appendChild(itens[0]);
    itens = document.querySelectorAll('.item')
}

const proximo = () => {
    const lastItem = itens[itens.length - 1];
    containerItens.insertBefore(lastItem, itens[0]);
    itens = document.querySelectorAll('.item')
}

document.querySelector('#anterior').addEventListener('click', proximo)
document.querySelector('#proximo').addEventListener('click', anterior)