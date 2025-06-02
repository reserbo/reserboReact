import { useState } from 'react';
import { Link } from "react-router-dom";
import reserboLogo from '../../assets/img/reserbo.svg';
import menuIconWhite from '../../assets/icons/menuIconWhite.svg';
import cartIconWhite from '../../assets/icons/cartIconWhite.svg';
import './header.css';

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(prev => !prev);
    };

    return (
    <>
        <header className={showMenu ? 'showHeaderList' : ''}>
            <nav>
                <Link to = {"/"}>
                    <img src={reserboLogo} alt="Logo de reserbo"/>
                </Link>
                <ul>
                    <div>
                        <button>
                            <img src={cartIconWhite} alt="Ícono de carrito"/>
                        </button>
                        <button onClick={toggleMenu}>
                            <img src={menuIconWhite} alt="Ícono de menú"/>
                        </button>
                    </div>
                    <li>
                        <Link to = {"/nosotros"}>Nosotros</Link>
                    </li>
                    <li>
                        <Link to = {"/cartelera"}>Cartelera</Link>
                    </li>
                    <li>
                        <Link to = {"/directorio"}>Directorio</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
    )
}

export default Header