import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { callGetPokemonDetailsAPI, callGetPokemonSpeciesAPI, callGetPokemonLocationAPI } from "../../apis/PokemonAPICalls";
import AbilityCard from "../items/AbilityCard";
import './PokemonDetails.css'

function PokemonDetails() {
    const result = useSelector(state => state.pokemonDetailReducer);
    const {pokeCode} = useParams();

    const dispatch = useDispatch();
    
    

    useEffect(
        () => {
            dispatch(callGetPokemonDetailsAPI(pokeCode));
            dispatch(callGetPokemonSpeciesAPI(pokeCode));
            dispatch(callGetPokemonLocationAPI(pokeCode));
        },
        []
    );

    return (
        <>  
            <div className="poke-header">          
                {result.species&&(<h2>{result.species.names[2].name}</h2>)}
                {result.details&&
                <div className="poke-type">
                    <h3>타입</h3>
                    {result.details.types.map(type=>(
                        <div key={type.slot}>{type.type.name}</div>
                    ))}
                </div>
                }
            </div>
            {result.details&&
            <div className="poke-appearance">
                <h3>포켓몬 외형</h3>
                <div className="poke-imgs">
                    <div className="poke-img-wrapper">
                        <img src={result.details.sprites['front_default']}/>
                        <h6>기본 정면</h6>
                    </div>
                    <div className="poke-img-wrapper">
                        <img src={result.details.sprites['back_default']}/>
                        <h6>기본 후면</h6>
                    </div>
                    <div className="poke-img-wrapper">
                        <img src={result.details.sprites['front_shiny']}/>
                        <h6>이로치 정면</h6>
                    </div>
                    <div className="poke-img-wrapper">
                        <img src={result.details.sprites['back_shiny']}/>
                        <h6>이로치 후면</h6>
                    </div>
                </div>
            </div>
            }
            {result.details&&
            <div className="poke-abilities">
                <h3>포켓몬 어빌리티</h3>
                <div className="poke-abilities-list">
                    {result.details.abilities.map(
                        ability=>(
                            <div key={ability.ability.url} className="poke-ability">
                                {ability['is_hidden']? (<b>히든</b>):(<b>일반</b>)}
                                {/* <span>{ability.ability.name}</span> */}
                                <AbilityCard ability={ability.ability}/>
                            </div>
                        )
                    )}
                </div>
            </div>
            }
            {result.details&&
            <div className="poke-stats">
                <h3>포켓몬 스탯</h3>
                <div className="poke-stat-wrapper">
                    <b>체력</b>
                    <span>{result.details.stats[0]['base_stat']}</span>
                </div>
                <div className="poke-stat-wrapper">
                    <b>공격</b>
                    <span>{result.details.stats[1]['base_stat']}</span>
                </div>
                <div className="poke-stat-wrapper">
                    <b>방어</b>
                    <span>{result.details.stats[2]['base_stat']}</span>
                </div>
                <div className="poke-stat-wrapper">
                    <b>특공</b>
                    <span>{result.details.stats[3]['base_stat']}</span>
                </div>
                <div className="poke-stat-wrapper">
                    <b>특방</b>
                    <span>{result.details.stats[4]['base_stat']}</span>
                </div>
                <div className="poke-stat-wrapper">
                    <b>속도</b>
                    <span>{result.details.stats[5]['base_stat']}</span>
                </div>
            </div>
            }
            {result.location&&
            <div className="poke-location">
                <h3 style={Object.keys(result.location).length===0?{display:'none'}:{}}>서식지</h3>
                {result.location.map(loc=>(
                    <div className="poke-location-item" key={loc['location_area'].url}>🌐 {loc['location_area'].name}</div>
                ))}
            </div>
            }

        </>
    );
}

export default PokemonDetails;