import React from 'react';

import "./CardThree.css"
import "../../styles/fonts.css"
import eventPattern from './EventPattern.png';
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

function CardThree (props) {
    const { 
        cardData,
        buttonLabel,
        color,
     } = props;

    return (
        <a href={cardData.link} >
            <div className="CardThreeMainContainer">
                <div className="CardThreeImageContainer" style={{ 
                    backgroundImage: (!cardData.img || cardData.img === "") ? `url('${eventPattern}')` : `url('${cardData.img}')`  }}>
                    <button className="CardThreeDateTime" 
                        style={{ backgroundColor: color }}>
                        <DateRangeRoundedIcon />
                        <span className="CardThreeEventText">{cardData.eventDateTime}</span>
                    </button>
                </div>
                <div className='CardThreeInfoContainer'>
                    <p className='CardThreeHeading'>{cardData.heading}</p>
                    <div className="CardThreeReadMore">
                        <span className="CardThreeReadMoreText">{buttonLabel} <ArrowForwardIosRoundedIcon /> </span>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default CardThree;