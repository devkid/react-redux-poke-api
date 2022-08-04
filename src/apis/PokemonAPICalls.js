import { GET_POKEMONS } from "../modules/PokemonModule";
import { GET_POKEMONDETAILS, GET_POKEMONLOCATION, GET_POKEMONSPECIES } from "../modules/PokemonDetailModule";

export function callGetPokemonsAPI(url, params) {

    const requestURL = url || 'https://pokeapi.co/api/v2/pokemon'; 
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

export function callGetPokemonDetailsAPI(id, params){

    

    const requestURL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    return async function getPokemonDetails(dispatch, getState){
        const result = await fetch(requestURL).then(res=>res.json());

        dispatch({type:GET_POKEMONDETAILS, payload: result});
    }
}

export function callGetPokemonSpeciesAPI(id, params){
    const requestURL = `https://pokeapi.co/api/v2/pokemon-species/${id}/`
    return async function getPokemonDetails(dispatch, getState){
        const result = await fetch(requestURL).then(res=>res.json());
        dispatch({type:GET_POKEMONSPECIES, payload: result});
    }
}

export function callGetPokemonLocationAPI(id, params){
    const requestURL = `https://pokeapi.co/api/v2/pokemon/${id}/encounters`
    return async function getPokemonDetails(dispatch, getState){
        const result = await fetch(requestURL).then(res=>res.json());
        dispatch({type:GET_POKEMONLOCATION, payload: result});
    }
}