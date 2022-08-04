import { combineReducers } from "redux";
import pokemonListReducer from "./PokemonModule";
import pokemonDetailReducer from "./PokemonDetailModule";
import abilityListReducer from "./AbilityModule";
import abilityDetailReducer from "./AbilityDetailModule";

const rootReducer = combineReducers({
    pokemonListReducer,
    pokemonDetailReducer,
    abilityListReducer,
    abilityDetailReducer,
});

export default rootReducer;