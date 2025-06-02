import { Link } from "react-router-dom";
import articleImgPlaceholder from '../../assets/img/reserboImgPlaceholder.png';
import arrowForwardCircleIconBlack from '../../assets/icons/arrowForwardCircleIconBlack.svg';
import './carousel.css';

function Carousel(props) {

    const {
        carouselTitle = "Título",
        items = [],
        actionCallLink = props.actionCallLink || "none",
        actionCallText = props.actionCallText || "Ver más",
        actionCallIcon = props.actionCallIcon || arrowForwardCircleIconBlack,
    } = props;

    return (
    <>
        <section className = "carousel">
            <h2>{carouselTitle}</h2>
            <ul>
                {items.map(({ key, articleImg, articleName, articleMiniDescription, articleDetails, type }) => (
                    <li key = {key}>
                        <Link to={`/${type}/${key}`}>
                            <img src = {articleImg || articleImgPlaceholder}/>
                            <h4>{articleName || "Próximamente"}</h4>
                            <p>{articleDetails || "Detalles próximamente"}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link className = "actionCall" to = { actionCallLink }>
                {actionCallText}
                <img src = {actionCallIcon}/>
            </Link>
        </section>
    </>
    )
}

export default Carousel