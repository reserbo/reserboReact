import { useState } from 'react';
import eventsDataBase from '../../eventsDataBase.json';
import placesDataBase from '../../placesDataBase.json';
import MainFilters from '../MainFilters/MainFilters.jsx';
import Carousel from '../Carousel/Carousel.jsx';

function Home() {

    const [activeFilter, setActiveFilter] = useState('events');

    const database = activeFilter === 'events'
        ? eventsDataBase.map(item => ({ ...item, type: 'evento' }))
        : placesDataBase.map(item => ({ ...item, type: 'lugar' }));

    return (
    <>
        <MainFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
        <Carousel
            carouselTitle = "Destacados"
            actionCallText = "Ve la lista completa"
            actionCallLink= {activeFilter === 'events' ? "/cartelera" : "/directorio"}
            items = {database}
        />
    </>
    )
}

export default Home