import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {callGetAbilityDetailsAPI} from '../../apis/AbilityAPICalls'
import PokemonCard from "../items/PokemonCard";

function AbilityDetails() {
    const result = useSelector(state => state.abilityDetailReducer);
    const {abilityCode} = useParams();
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(callGetAbilityDetailsAPI(abilityCode));
        },
        []
    );

    return (

        <>            
        {Object.keys(result).length!==0&&(<>

        <h2>{result.name}</h2>
        <div>KOR : {result.names[1].name}</div>
        <div className="ability-effect">
            <h3>효과</h3>
            <p>{result['effect_entries'][1].effect}</p>
            <p>{result['flavor_text_entries'][10]['flavor_text']}</p>
        </div>
        <div className="ability-pokemons">
            <h3>이 특성을 보유한 포켓몬</h3>
            {result.pokemon.map(poke=>{
                const regExp = /\/[0-9]{1,}/;
                const pokeCode = poke.pokemon.url.match(regExp).toString().replace('/', '');
                if(pokeCode>905)
                    return<></>
                const pok = {
                    'url' : poke.pokemon.url
                };
                console.log(poke)
                // console.log(poke);
                // return <div key={poke.pokemon.url}>{poke.pokemon.name}</div>
                return <PokemonCard key = {poke.pokemon.url} pokemon={pok}/>
            })}
        </div>

        </>)}
        </>
    );
}

export default AbilityDetails;