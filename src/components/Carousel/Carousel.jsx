import { useState } from 'react';
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
        <section class = "carousel">
            <h2>{carouselTitle}</h2>
            <ul>
                {items.map(({ key, articleImg, articleName, articleMiniDescription, articleDetails }) => (
                    <li key = {key}>
                        <img src = {articleImg || articleImgPlaceholder}/>
                        <h4>{articleName || "Próximamente"}</h4>
                        <p>{articleMiniDescription || "Más info próximamente"}</p>
                        <p>{articleDetails || "Detalles próximamente"}</p>
                    </li>
                ))}
            </ul>
            <a href={actionCallLink}>
                {actionCallText}
                <img src = {actionCallIcon}/>
            </a>
        </section>
    </>
    )
}

export default Carousel