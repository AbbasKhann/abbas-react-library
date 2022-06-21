import React from 'react';
import Button from '@material-ui/core/Button';

import AddRoundedIcon from '@material-ui/icons/AddRounded';
import "./ButtonOne.css"
import "../../styles/fonts.css"


function ButtonOne(props) {


    return (
        <div className="MsInputButtonMainContainer">
        <Button
            href={props.link}
            target={props.target}
            to={props.path}
            className="MsInputButton"
            style={{ 
                background: props.buttoncolor, 
                width: props.width, 
                height: props.height, 
                color: props.color, 
                border: props.border, 
                borderRadius: props.borderRadius,
                justifyContent: props.textAlign,
                fontWeight: props.fontWeight,

            }}

            onClick={props.onClick} disabled={props.disabled}
            >
            {props.addIcon && <AddRoundedIcon  style={{color: props.AddIconColor , marginRight:"5px" }}/>}
            {props.handIconStatus && <img className='DonationHandIcon' src='https://dc-img-assets.s3.amazonaws.com/DEENCONNECT-manage-masjid-organization-donation-hand-icon.webp' />}
            {props.label}
            {props.arrowStatus && <div  style={{color: props.arrowColor , display:"flex" }}>{props.arrowIcon} </div>}
        </Button>
        </div>
);
}
export default ButtonOne;