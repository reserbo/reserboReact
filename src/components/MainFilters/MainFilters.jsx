import { useState } from 'react';
import ticketIconBlack from '../../assets/icons/ticketIconBlack.svg';
import ticketIconOutlineGrey from '../../assets/icons/ticketIconOutlineGrey.svg';
import storeFrontIconBlack from '../../assets/icons/storeFrontIconBlack.svg';
import storeFrontIconOutlineGrey from '../../assets/icons/storeFrontIconOutlineGrey.svg';
import './mainFilters.css';

function MainFilters({activeFilter, setActiveFilter}) {

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    return (
    <>
        <section className = "mainFilters">
            <button className={activeFilter === 'events' ? 'indexhighlitedFilter' : ''} onClick={() => handleFilterClick('events')}>
                <img src={activeFilter === 'events' ? ticketIconBlack : ticketIconOutlineGrey} alt="Ícono de evento"/>
                <p>Eventos</p>
            </button>
            <button className={activeFilter === 'places' ? 'indexhighlitedFilter' : ''} onClick={() => handleFilterClick('places')}>
                <img src={activeFilter === 'places' ? storeFrontIconBlack : storeFrontIconOutlineGrey} alt="Ícono de lugar"/>
                <p>Lugares</p>
            </button>
        </section>
    </>
    )
}

export default MainFilters