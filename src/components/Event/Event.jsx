import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import articleImgPlaceholder from '../../assets/img/reserboImgPlaceholder.png';

function Event() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvent() {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error("Error fetching event:", error);
        setEvent(null);
      } else {
        if (data.poster_path) {
          const { data: imageUrlData } = supabase
            .storage
            .from('events-posters')
            .getPublicUrl(data.poster_path);

          data.articleImg = imageUrlData.publicUrl;
        }

        setEvent(data);
      }

      setLoading(false);
    }

    fetchEvent();
  }, [id]);

  if (loading) return <h2>Cargando...</h2>;
  if (!event) return <h2>Evento no encontrado</h2>;

  return (
    <>
      <img src={event.articleImg || articleImgPlaceholder} alt={event.articleName} />
      <h2>{event.articleName}</h2>
      <h3>Organizador: {event.articleMiniDescription}</h3>
      <h3>Fecha: {event.articleDetails}</h3>
    </>
  );
}

export default Event;
