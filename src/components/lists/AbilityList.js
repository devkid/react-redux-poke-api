import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AbilityCard from "../items/AbilityCard";
import { callGetAbilitiesAPI } from "../../apis/AbilityAPICalls";
import './AbilityList.css'

function AbilityList() {

    const result = useSelector(state => state.abilityListReducer);

    const abilities = result.results;

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(callGetAbilitiesAPI());
        },
        []
    );

    return (
        abilities && (
            <div>
                <div className="count-and-button">
                    <h3>총 어빌리티 수 : { result.count }</h3>
                    <div className="button-wrapper">
                        <button onClick={ () => dispatch(callGetAbilitiesAPI(result.previous)) } >⬅️</button>
                        <button onClick={ () => dispatch(callGetAbilitiesAPI(result.next)) } >➡️</button>
                    </div>
                </div>
                <div className="cards-wrapper">
                    { abilities.map(ability => <AbilityCard key={ ability.url } ability={ ability }/> ) }
                </div>
            </div>
        )
    );
}

export default AbilityList;