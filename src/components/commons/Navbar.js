import { NavLink } from 'react-router-dom';

import './Navbar.css'

function Navbar() {

    return (
        <div className='navbar'>
            <ul>
                <NavLink to='/'><li>메인으로</li></NavLink>
                <NavLink to='/pokemons'><li>포켓몬 목록 보기</li></NavLink>
                <NavLink to='/abilities'><li>어빌리티 목록 보기</li></NavLink>
            </ul>
        </div>
    );
}

export default Navbar;