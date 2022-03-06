import './Navigation.css';
import { Link } from "react-router-dom";
import NavBar from './NavBar/NavBar';
import Dropdown from './dropdown/Dropdown';
import logo from '../Imagenes/logo.png';

const Navigation = () => {
    return (
        <nav className='Navigation'>
            <Link to= "/">
                <img className="tiendanube" src={logo} alt='logo' width={'150'}/>
            </Link>
            <ul className='List-ul'>
                <Link to="/" className='Link'>HOME</Link>
                <Dropdown />
            </ul>
            <NavBar />
        </nav>
    )

}

export default Navigation;
