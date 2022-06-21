import React from 'react';

import "./CardSix.css"
import "../../styles/fonts.css"

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import eventPattern from './EventPattern.png';

function CardSix (props) {

    return (
        <a href={props.link}>
            <div className="CardSixMainContainer">
                <div className="CardSixImageContainer">
                    <img className="CardSixEventImage" src={props.img} />
                    <div className="CardSixGradientContainer"></div>
                </div>
                <h1 className="CardSixEventDateTime">{props.DateTime}</h1>
                <h1 className="CardSixTitle">{props.title}</h1>
                <h1 className="CardSixEventStatus">{props.eventStatus}</h1>
                <h1 className="CardSixEventDetails" style={{color:props.btnColor}}>{props.buttonLabel}<ArrowForwardIcon /></h1>
            </div>
        </a>
    );
}

export default CardSix;