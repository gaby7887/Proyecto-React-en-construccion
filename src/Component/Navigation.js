import './Navigation.css';

import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className='Navigation'>
            <ul className='List-ul'>
                <Link to="/" className='Link'>Home</Link>
                <Link to="/indumentaria" className='Link'>Indumentaria</Link>
                <Link to="/calzado" className='Link'>Calzado</Link>
                <Link to="/accesorios" className='Link'>Accesorios</Link>
                
            </ul>
        </nav>
    )

}

export default Navigation;
