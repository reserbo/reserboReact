import { useState } from 'react';
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
                <a href="index.html">
                    <img src={reserboLogo} alt="Logo de reserbo"/>
                </a>
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
                        <a href="nosotros.html">Nosotros</a>
                    </li>
                    <li>
                        <a href="cartelera.html">Cartelera</a>
                    </li>
                    <li>
                        <a href="directorio.html">Directorio</a>
                    </li>
                </ul>
            </nav>
        </header>
    </>
    )
}

export default Header