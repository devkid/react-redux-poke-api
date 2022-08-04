import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonCard from "../items/PokemonCard";
import { callGetPokemonsAPI } from "../../apis/PokemonAPICalls";
import './PokemonList.css'

function PokemonList() {

    const result = useSelector(state => state.pokemonListReducer);

    const pokemons = result.results;

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(callGetPokemonsAPI());
        },
        []
    );

    return (
        pokemons && (
            <div>
                <div className="count-and-button">
                <h3>📘 총 포켓몬 수 : { result.count }</h3>
                <div className="button-wrapper">
                    <button onClick={ () => dispatch(callGetPokemonsAPI(result.previous)) } >⬅️</button>
                    <button onClick={ () => dispatch(callGetPokemonsAPI(result.next)) } >➡️</button>
                </div>
                </div>
                { pokemons.map(pokemon => <PokemonCard key={ pokemon.url } pokemon={ pokemon }/> ) }
            </div>
        )
    );
}

export default PokemonList;