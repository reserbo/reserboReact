import { useParams } from "react-router-dom";
import articleImgPlaceholder from '../../assets/img/reserboImgPlaceholder.png';
import placesDataBase from '../../placesDataBase.json';

function Place() {

    const {id} = useParams();

    const place = placesDataBase.find(place=>place.key === parseInt(id))

    if(!place) {
        return <h2>Lugar no encontrado</h2>
    }

    return (
      <>
        <img src = {place.articleImg || articleImgPlaceholder}></img>
        <h2>{place.articleName}</h2>
        <h3>{place.articleMiniDescription}</h3>
        <h3>Dirección: {place.articleDetails}</h3>
      </>
    )
  }
  
  export default Place