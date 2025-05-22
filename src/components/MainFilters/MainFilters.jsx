import { useState } from 'react';
import ticketIconBlack from '../../assets/icons/ticketIconBlack.svg';
import ticketIconOutlineGrey from '../../assets/icons/ticketIconOutlineGrey.svg';
import storeFrontIconBlack from '../../assets/icons/storeFrontIconBlack.svg';
import storeFrontIconOutlineGrey from '../../assets/icons/storeFrontIconOutlineGrey.svg';
import './mainFilters.css';

function MainFilters() {
    const [activeFilter, setActiveFilter] = useState('eventos');

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    return (
    <>
        <section class = "mainFilters">
            <button className={activeFilter === 'eventos' ? 'indexhighlitedFilter' : ''} onClick={() => handleFilterClick('eventos')}>
                <img src={activeFilter === 'eventos' ? ticketIconBlack : ticketIconOutlineGrey} alt="Ícono de evento"/>
                <p>Eventos</p>
            </button>
            <button className={activeFilter === 'lugares' ? 'indexhighlitedFilter' : ''} onClick={() => handleFilterClick('lugares')}>
                <img src={activeFilter === 'lugares' ? storeFrontIconBlack : storeFrontIconOutlineGrey} alt="Ícono de lugar"/>
                <p>Lugares</p>
            </button>
        </section>
    </>
    )
}

export default MainFilters