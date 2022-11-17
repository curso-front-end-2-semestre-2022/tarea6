// Estableciendo el llamado a la libreria Axios
//const axios = require('axios');

//variables
const URL_Pokemon = "https://pokeapi.co/api/v2/pokemon/";
let pokemones = undefined;
const poke_container = document.getElementById('poke-container')
const poke_count = 20

const pokemons = async () => {
    for (i = 1; i <= poke_count; i++) {
        await PokemonesAxios(i)
    }
}

const PokemonesAxios = async (id) => {

    try {

        const response = await axios(URL_Pokemon)
        pokemones = response.data
        const name = pokemones.results[i - 1].name[0].toUpperCase() + pokemones.results[i - 1].name.slice(1)
        const id = [i].toString().padStart(3, '0')

        console.log(pokemones.results[i - 1].url.type)

        const pokemonEl = document.createElement('div')
        pokemonEl.classList.add('pokemon')

        const pokemonInnerHTML = `
    
            <div class="img-container">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${[i]}.png" alt="">
            </div>
            <div class="info">
                <span class="number">${id}</span>
                <h3 class="name">${name}</h3>
                <!--<small class="type">Type: <span>Grass</span></small>-->
            </div>  
            `
        pokemonEl.innerHTML = pokemonInnerHTML
        poke_container.appendChild(pokemonEl)

    } catch (err) {
        console.log("El error es: ", err);
    }
}

pokemons()