import './Header.css'
import Navbar from './Navbar';

function Header() {
    
    return (
        <header className='header'>
            <h1>Pokemon API</h1>
            <nav>
                <Navbar/>
            </nav>
        </header>
    );
}

export default Header;