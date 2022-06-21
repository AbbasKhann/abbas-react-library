import React from 'react';

import "./CardFour.css"
import "../../styles/fonts.css"
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

function CardFour (props) {
    const { 
        cardData,
        buttonLabel,
        color,
     } = props;

    return (
        <a href={cardData.link}>
            <div className="CardFourMainContainer">
                <div className="CardFourRow">
                    <div className="CardFourLeftColumn">
                        <h1 className="CardFourEventDate">{cardData.eventDate} <br/> {cardData.eventDay}</h1>
                    </div>
                    <div className="CardFourRightColumn">
                        <div className="CardFourRightColumnContainer">
                            <h1 className="CardFourTitle">{cardData.title}</h1>
                            <div className="CardFourEventTime">{cardData.eventTime} <span>●</span> {cardData.eventType}</div>
                            <div className="CardFourReadMore">
                                <span className="CardFourReadMoreText">{buttonLabel} <ArrowForwardIosRoundedIcon /> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default CardFour;