import { combineReducers } from "redux";
import pokemonListReducer from "./PokemonModule";

const rootReducer = combineReducers({
    pokemonListReducer,
});

export default rootReducer;