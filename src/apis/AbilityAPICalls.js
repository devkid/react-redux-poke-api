import { GET_ABILITIES } from "../modules/AbilityModule";
import { GET_ABILITYDETAILS } from "../modules/AbilityDetailModule";

export function callGetAbilitiesAPI(url, params) {

    const requestURL = url || 'https://pokeapi.co/api/v2/ability'; 
    return async function getAbilities(dispatch, getState) {

        const result = await fetch(requestURL).then(res=>res.json())
        
        dispatch({ type: GET_ABILITIES, payload: result });
    }
}

export function callGetAbilityDetailsAPI(id, params){

    const requestURL = `https://pokeapi.co/api/v2/ability/${id}/`
    return async function getAbilityDetails(dispatch, getState){
        const result = await fetch(requestURL).then(res=>res.json());

        dispatch({type:GET_ABILITYDETAILS, payload: result});
    }
}