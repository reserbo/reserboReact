import { useState, useEffect } from 'react';
import MainFilters from '../MainFilters/MainFilters.jsx';
import Carousel from '../Carousel/Carousel.jsx';
import { fetchTable } from '../../api/fechTable.js'


function Home() {

    const [activeFilter, setActiveFilter] = useState('events')
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const tableColumns = {
        events: 'id, name, description, poster, start',
        places: 'id, name, description, logo, adress'
    }
    useEffect(() => {
        const table = activeFilter === 'events' ? 'events' : 'places'
        const columns = tableColumns[table]
        const order = activeFilter === 'events'
          ? { column: 'start', ascending: true }
          : null
        const typeTag = activeFilter === 'events' ? 'evento' : 'lugar'
    
        async function loadItems() {
          setLoading(true)
          setError(null)
    
          try {
            const data = await fetchTable(table, {
              columns,
              ...(order && { order }),
              limit: 10,
            })

            console.log('Fetched data:', data)
    
            const typedData = data.map(item => ({
              key: item.id,
              articleImg: activeFilter === 'events' ? item.poster : item.logo,
              articleName: item.name,
              articleMiniDescription: item.description,
              articleDetails: activeFilter === 'events' ? item.start : item.adress,
              type: typeTag,
            }))
    
            setItems(typedData)
          } catch (err) {
            setError(err.message)
            setItems([])
          } finally {
            setLoading(false)
          }
        }
    
        loadItems()
    }, [activeFilter])

    return (
    <>
        <MainFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>

        {loading && <p>Cargando...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {!loading && !error && (
        <Carousel
            carouselTitle = "Destacados"
            actionCallText = "Ve la lista completa"
            actionCallLink= {activeFilter === 'events' ? "/cartelera" : "/directorio"}
            items = {items}
        />
        )}
    </>
    )
}

export default Home