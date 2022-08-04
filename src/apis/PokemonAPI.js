export function getPokeItem(pokemon){
    console.log(pokemon)
    return fetch(pokemon.url)
            .then(response => response.json())
}

export function getPokeKor(pokeCode){

    if(pokeCode===undefined){
        pokeCode = 1;
    }

    const requestUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokeCode}/`
    return fetch(requestUrl)
            .then(response=>response.json())
}