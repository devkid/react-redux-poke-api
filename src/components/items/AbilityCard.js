import { useEffect } from "react";
import {Link} from 'react-router-dom';

function AbilityCard({ ability }) {

    
    const regExp = /\/[0-9]{1,}/;
    const abilityCode = ability.url.match(regExp).toString().replace('/','');
    
    return (
        <Link to={`/abilities/${abilityCode}`}>
            {ability&&
            <h3>
                {abilityCode}. {ability.name}
            </h3>
            }
        </Link>
    );
}

export default AbilityCard;