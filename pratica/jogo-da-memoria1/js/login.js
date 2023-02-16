const input = document.querySelector('#login_input');
const butao = document.querySelector('.loginButton');
const form = document.querySelector('#login_form')

const validarInput = ({ target }) => {
    if (target.value.length > 3) {
        butao.removeAttribute('disabled');
        return;
    }

    butao.setAttribute('disabled', '');
}

const salvarJogadorNome = (evento) => {
    evento.preventDefault();

    localStorage.setItem('Jogador', input.value);
    window.location = 'pages/game.html';
}


input.addEventListener('input', validarInput)
form.addEventListener('submit', salvarJogadorNome)