import { useEffect } from "react";
import {Link} from 'react-router-dom';
import './AbilityCard.css'

function AbilityCard({ ability }) {

    
    const regExp = /\/[0-9]{1,}/;
    const abilityCode = ability.url.match(regExp).toString().replace('/','');
    
    return (
        <Link to={`/abilities/${abilityCode}`} style={{textDecoration:'none'}}>
            {ability&&
            <div className="ability-card">
                <span>
                    [{abilityCode}] {ability.name}
                </span>
            </div>
            }
        </Link>
    );
}

export default AbilityCard;