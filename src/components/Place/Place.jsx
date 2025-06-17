import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import articleImgPlaceholder from '../../assets/img/reserboImgPlaceholder.png';

function Place() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlace() {
      const { data, error } = await supabase
        .from('places')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error("Error fetching place:", error);
        setPlace(null);
      } else {
        if (data.logo_path) {
          const { data: imageUrlData } = supabase
            .storage
            .from('places-logos')
            .getPublicUrl(data.logo_path);

          data.articleImg = imageUrlData.publicUrl;
        }

        setPlace(data);
      }
      setLoading(false);
    }

    fetchPlace();
  }, [id]);

  if (loading) return <h2>Cargando...</h2>;
  if (!place) return <h2>Lugar no encontrado</h2>;

  return (
    <>
      <img src={place.articleImg || articleImgPlaceholder} alt={place.articleName} />
      <h2>{place.articleName}</h2>
      <h3>{place.articleMiniDescription}</h3>
      <h3>Dirección: {place.articleDetails}</h3>
    </>
  );
}

export default Place;
