import { useEffect,useState } from "react";
import {Link} from 'react-router-dom';
import {getPokeItem, getPokeKor} from '../../apis/PokemonAPI'

function PokemonCard({ pokemon }) {
    const [id,setId] = useState();
    const [img, setImg] = useState();
    const [name, setName] = useState();

    useEffect(
        ()=>{
            getPokeItem(pokemon).then(json=>{
                setId(json.id);
                setImg(json.sprites.front_default);
            });
            getPokeKor()
        },
        []
    )
    
    return (
        <Link to={`/pokemon/${id}`}>
            <div>
                {id&&<h2>No.{id}</h2>}
                {img&&<img src={img}/>}
                <h3>{ pokemon.name }</h3>
            </div>
        </Link>
    );
}

export default PokemonCard;