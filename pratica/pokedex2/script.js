const form = document.querySelector('#form')
const inputSearch = document.querySelector('#inputSearch')

const imagemPokemon = document.querySelector('#imgPokemon')
const nomePokemon = document.querySelector('#nomePokemon')
const tipagem = document.querySelector('#tipagem')

const infoPokemon = document.querySelector('#infoPokemon')
const frente = document.querySelector('#frente')
const costas = document.querySelector('#costas')

// retorna os dados da API
const fetchPokemon = async (pokemon) => {

    // armazenando os dados da API em uma variavel
    const APIresposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIresposta.status == 200) {
        // armazenando os dados json da API em uma variavel
        const dados = await APIresposta.json();

        // retornando os dados json da API
        return dados;
    }
}


// mostra na tela os dados da API
const mostraTela = async (pokemon) => {
    imagemPokemon.style.display = 'block';
    infoPokemon.style.display = 'block';

    // recupero os dados da API
    const dados = await fetchPokemon(pokemon);

    // mostra na tela o nome do pokemon
    nomePokemon.innerHTML = `Nome: ${dados.species.name}`;

    // mostra na tela o tipo do pokemon
    if (dados.types['1']) {
        tipagem.innerHTML = `Tipo: ${dados['types']['0']['type']['name']} / ${dados['types']['1']['type']['name']}`;
    } else {
        tipagem.innerHTML = `Tipo: ${dados['types']['0']['type']['name']}`;
    }

    // mostra na tela a imagem do pokemon
    frente.src = dados['sprites']['front_default'];
    costas.src = dados['sprites']['back_default'];
}

form.addEventListener('submit', (evento) => {

    // evita recarregar a tela quando da submit
    evento.preventDefault();

    // mostra na tela o valor digitado no input atraves da função criada acima
    mostraTela(inputSearch.value.toLowerCase());

    // limpa o input pra proxima pesquisa
    inputSearch.value = '';
})

imagemPokemon.style.display = 'none';
infoPokemon.style.display = 'none';