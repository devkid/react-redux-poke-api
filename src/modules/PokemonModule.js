import { createActions, handleActions } from "redux-actions";

const pokemonListState = [];

export const GET_POKEMONS = 'pokemons/GET_POKEMONS';

const actions = createActions({
    [GET_POKEMONS]: () => {}
});

const pokemonListReducer = handleActions(
    {
        [GET_POKEMONS]: (state, { payload }) => {
            return payload;
        }
    },
    pokemonListState
);

export default pokemonListReducer;

