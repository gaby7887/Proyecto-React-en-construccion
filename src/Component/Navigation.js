import './Navigation.css';

import { Link } from "react-router-dom";
import NavBar from './NavBar/NavBar';
import Dropdown from './dropdown/Dropdown';

const Navigation = () => {
    return (
        <nav className='Navigation'>
            <ul className='List-ul'>
                <Link to="/" className='Link'>Home</Link>
                <Dropdown />
            </ul>
            <NavBar />
        </nav>
    )

}

export default Navigation;
