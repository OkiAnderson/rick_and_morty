// Renderizar la SarchBar dentro de este componente
import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';


const Nav = ({ onSearch }) => {

    return(
        <nav>
            <SearchBar onSearch={onSearch}/>
            <button>
                <Link to='/about'>ABOUT</Link>
            </button>

            <button>
                <Link to='/home'>HOME</Link>
            </button>
        </nav>
    )
}

export default Nav;