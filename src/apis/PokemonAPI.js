export function getPokeItem(pokemon){
    return fetch(pokemon.url)
            .then(response => response.json())
}

export function getPokeKor(pokeCode){
    const url = `https://pokeapi.co/api/v2/pokemon-species/${pokeCode}/`
    return fetch(url)
            .then(response=>response.json())
}