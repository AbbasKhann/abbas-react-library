import React from 'react';

import "./CardFive.css"
import "../../styles/fonts.css"

import CalendarIcon from "@material-ui/icons/Today";
import ClockIcon from "@material-ui/icons/Schedule";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function CardFive (props) {
    const { 
        cardData,
        buttonLabel,
        color,
     } = props;

    return (
        <a href={cardData.link}>
            <div className="CardFiveMainContainer">
                <div className="CardFiveTitleContainer">
                    <h1 className="CardFiveTitle">{cardData.title}</h1>
                </div>
                <div className="CardFiveRow">
                    <div className="CardFiveLeftColumn" style={(!cardData.image || cardData.image === "") ? 
                        { display: "none"  } : { backgroundImage: `url('${cardData.image}')`}}></div>
                    <div className="CardFiveRightColumn">
                        <h1 className="CardFiveEventDate"><CalendarIcon />{cardData.eventDate}</h1>
                        <h1 className="CardFiveEventTime"><ClockIcon />{cardData.eventTime}</h1>
                        <h1 className="CardFiveViewDetails">{buttonLabel}<ArrowForwardIcon /></h1>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default CardFive;