import { createActions, handleActions } from "redux-actions";

const pokemonDetailState = {};

export const GET_POKEMONDETAILS = 'pokemondetails/GET_POKEMONDETAILS';
export const GET_POKEMONSPECIES = 'pokemonspecies/GET_POKEMONSPECIES';
export const GET_POKEMONLOCATION = 'pokemonlocation/GET_POKEMONLOCATION';

const actions = createActions({
    [GET_POKEMONDETAILS]: () => {},
    [GET_POKEMONSPECIES] : ()=>{},
    [GET_POKEMONLOCATION] : ()=>{}
});

const pokemonDetailReducer = handleActions(
    {
        [GET_POKEMONDETAILS]: (state, { payload }) => {
            return {
                ...state,
                details : payload,
            };
        },
        [GET_POKEMONSPECIES]: (state, {payload})=>{
            return{
                ...state,
                species : payload,
            }
        },
        [GET_POKEMONLOCATION]:(state, {payload})=>{
            return{
                ...state,
                location : payload,
            }
        },
    },
    pokemonDetailState
);


export default pokemonDetailReducer;

