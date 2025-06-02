import { useParams } from "react-router-dom";
import articleImgPlaceholder from '../../assets/img/reserboImgPlaceholder.png';
import eventsDataBase from '../../eventsDataBase.json';

function Event() {

    const {id} = useParams();

    const event = eventsDataBase.find(event=>event.key === parseInt(id))

    if(!event) {
        return <h2>Evento no encontrado</h2>
    }

    return (
      <>
        <img src = {event.articleImg || articleImgPlaceholder}></img>
        <h2>{event.articleName}</h2>
        <h3>Organizador: {event.articleMiniDescription}</h3>
        <h3>Fecha: {event.articleDetails}</h3>
      </>
    )
  }
  
  export default Event