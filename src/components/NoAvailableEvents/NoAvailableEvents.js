import React from 'react';
import ButtonOne from '../ButtonOne/ButtonOne'
import "./NoAvailableCard.css"




function NoAvailableEvents(props) {

    const onClick = () => {
        console.log("onclick");
    };

    return (
        <div className="NoAvailableCardMainContainer" style={{background:props.background}}>
            <div className="NoAvailableCardTitle">{props.Title}</div>
            <div className="NoAvailableCardSubTitle">{props.SubTitle}</div>
            <div className="NoAvailableCardDescription">{props.Description}</div>
            <div className="NoAvailableCardButtonContainer">

            <ButtonOne
                label={props.buttonLebel}
                link={props.link}
                target={props.target}
                path={props.path}
                arrowIcon={props.arrowIcon}
                arrowStatus={props.arrowStatus}
                arrowColor={props.arrowColor}
                buttoncolor={props.buttoncolor}
                width={props.width}
                height={props.height}
                border={props.border}
                borderRadius={props.borderRadius}
                color={props.colorlabel}
                fontWeight={props.fontWeight}
                textAlign={props.textAlign}
                onClick={props.onClick}
            />


            </div>
        </div>
    );
}

export default NoAvailableEvents;

