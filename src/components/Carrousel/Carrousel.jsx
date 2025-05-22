import { useState } from 'react';
import articleImgPlaceholder from '../../assets/img/reserboImgPlaceholder.png';
import arrowForwardCircleIconBlack from '../../assets/icons/arrowForwardCircleIconBlack.svg';
import './carrousel.css';

function Carrousel(props) {

    let title = props.carrouselTitle || "Título";
    let articleImg = props.articlelImg || articleImgPlaceholder;
    let articleName = props.articleName || "Próximamente";
    let articleMiniDescription = props.articlelMiniDescription || "Más info próximamente";
    let articleDetails = props.articlelDetails || "Detalles próximamente";
    let actionCallLink = props.actionCallLink || "none";
    let actionCallText = props.actionCallText || "Ver más";
    let actionCallIcon = props.actionCallIcon || arrowForwardCircleIconBlack;

    return (
    <>
        <section class = "carrousel">
            <h2>{title}</h2>
            <ul>
                <li>
                    <img src = {articleImg}/>
                    <h4>{articleName}</h4>
                    <p>{articleMiniDescription}</p>
                    <p>{articleDetails}</p>
                </li>
            </ul>
            <a href={actionCallLink}>
                {actionCallText}
                <img src = {actionCallIcon}/>
            </a>
        </section>
    </>
    )
}

export default Carrousel