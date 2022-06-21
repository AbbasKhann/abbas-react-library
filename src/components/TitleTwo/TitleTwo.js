import React from 'react';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ButtonOne from '../ButtonOne/ButtonOne';
import "./TitleTwo.css"
import "../../styles/fonts.css"



function TitleTwo(props) {

  return (

    <div className="TitleTwoContainer">

      <div className="TitleTwoTextContainer">
        <h1 style={{ color: props.TitleColor, background:props.background}}>{props.Title}</h1>
        {props.Button &&
          <ButtonOne
            label={props.buttonLebel}
            onClick={props.onClick}
            link={props.Link}
            target={props.target}
            arrowIcon={props.arrowIcon}
            arrowColor={props.arrowColor}
            arrowStatus={props.arrowStatus}
            buttoncolor={props.buttoncolor}
            width={props.width}
            height={props.height}
            border={props.border}
            borderRadius={props.borderRadius}
            color={props.colorlabel}
            fontWeight={props.fontWeight}
            textAlign={props.textAlign}
          />
        }
      </div>
      <div className="TitlOneeLineContainer">
        <div className="TitlOneeLine" style={{ background:props.background }}></div>
      </div>
    </div>

  );
}

export default TitleTwo;