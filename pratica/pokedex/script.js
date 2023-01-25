const pokemonNome = document.querySelector('.pokemon_name')
const pokemonID = document.querySelector('.pokemon_number')
const pokemonImagem = document.querySelector('.pokemon_image')
const tipagem = document.querySelector('.tipagem')

const form = document.querySelector('.form')
const inputSearch = document.querySelector('.input_search')

const anterior = document.querySelector('.btn-prev')
const proximo = document.querySelector('.btn-next')

let procurarPokemon = 1

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
const mostrarTela = async (pokemon) => {

    pokemonNome.innerHTML = 'Carregando...'

    pokemonID.innerHTML = '';

    // recupero os dados da API
    const dados = await fetchPokemon(pokemon);

    if (dados) {
        // volta a mostrar a imagem do pokemon
        pokemonImagem.style.display = 'block'

        // mostra na tela o nome do pokemon
        pokemonNome.innerHTML = dados.species.name;

        // mostra na tela o id do pokemon
        pokemonID.innerHTML = dados.id;

        // mostra o tipo do pokemon
        if(dados.types['1']) {
            tipagem.innerHTML = `${dados['types']['0']['type']['name']} / ${dados['types']['1']['type']['name']}`;
        } else {
            tipagem.innerHTML = dados['types']['0']['type']['name'];
        }
        
        // mostra na tela a imagem do pokemon
        pokemonImagem.src = dados['sprites']['versions']['generation-v']['black-white']
        ['animated']['front_default'];            
        if(dados.id > 649) {
            
            pokemonImagem.src = dados['sprites']['front_default'];
        }

        // variavel de procurar pokemon fica a mesmo do id do pokemon
        procurarPokemon = dados.id;

    } else {
        
        // validação para quando não encontra nenhum pokemon
        pokemonImagem.style.display = 'none'
        pokemonNome.innerHTML = 'não encontrado :c'
        pokemonID.innerHTML = '';

    }

}

form.addEventListener('submit', (evento) => {

    // evita recarregar a tela quando da submit
    evento.preventDefault();

    // mostra na tela o valor digitado no input atraves da função criada acima
    mostrarTela(inputSearch.value.toLowerCase());

    // limpa o input pra proxima pesquisa
    inputSearch.value = '';
})

anterior.addEventListener('click', (evento) => {
    if(procurarPokemon > 1) {
        procurarPokemon--;
        mostrarTela(procurarPokemon);
    }
});

proximo.addEventListener('click', (evento) => {
    procurarPokemon++;
    mostrarTela(procurarPokemon);
});

mostrarTela(procurarPokemon);