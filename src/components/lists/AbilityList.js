import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AbilityCard from "../items/AbilityCard";
import { callGetAbilitiesAPI } from "../../apis/AbilityAPICalls";

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
                <h3>총 어빌리티 수 : { result.count }</h3>
                <button onClick={ () => dispatch(callGetAbilitiesAPI(result.previous)) } >이전</button>
                <button onClick={ () => dispatch(callGetAbilitiesAPI(result.next)) } >다음</button>
                { abilities.map(ability => <AbilityCard key={ ability.url } ability={ ability }/> ) }
            </div>
        )
    );
}

export default AbilityList;