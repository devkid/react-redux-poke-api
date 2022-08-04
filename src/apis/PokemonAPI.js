export function getPokeItem(pokemon){
    return fetch(pokemon.url)
            .then(response => response.json())
}
