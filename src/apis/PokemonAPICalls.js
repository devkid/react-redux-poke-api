import { GET_POKEMONS } from "../modules/PokemonModule";

export function callGetPokemonsAPI(url, params) {

    const requestURL = url || 'https://pokeapi.co/api/v2/pokemon'; 
    console.log(url);

    return async function getPokemons(dispatch, getState) {

        const result = await fetch(requestURL).then(res=>res.json())
        
        // const result = await fetch(requestURL)
        //     .then(res => res.json())
        //     .then(res2 => {
        //             const ret = {...res2}
        //             ret.results.forEach(async element => {
        //                 element.data = await fetch(element.url).then(res3=>res3.json());
        //             });
        //             console.log(ret.results.data)
        //             return ret
        //     });

        
        dispatch({ type: GET_POKEMONS, payload: result });
    }
}

export function callGetPokemonDetailsAPI(result, params){

}