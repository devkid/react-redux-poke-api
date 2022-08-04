import { combineReducers } from "redux";
import pokemonListReducer from "./PokemonModule";
import pokemonDetailReducer from "./PokemonDetailModule";

const rootReducer = combineReducers({
    pokemonListReducer,
    pokemonDetailReducer,
});

export default rootReducer;