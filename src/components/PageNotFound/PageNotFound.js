import React from 'react';
import ButtonOne from '../ButtonOne/ButtonOne'
import "./PageNotFound.css"




function PageNotFound(props) {

    const onClick = () => {
        console.log("onclick");
    };

    return (
        <div className="PageNotFoundContainer" style={{background:props.background}}>
            <div className="PageNotFoundTitle">{props.Title}</div>
            <div className="PageNotFounddDescription">{props.Description} <a href={props.Contactlink} target="blank" style={{color:props.ContactlinkColor}}>Contact Us.</a></div>
            <div className="PageNotFounddButtonContainer">
            <ButtonOne
                label={props.buttonLebel}
                link={props.getDirectiontLink}
                target={props.target}
                path={props.path}
                arrow={props.arrow}
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

export default PageNotFound;

