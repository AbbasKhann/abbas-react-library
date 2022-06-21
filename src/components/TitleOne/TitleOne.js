import React from 'react';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ButtonOne  from '../ButtonOne/ButtonOne';
import "./TitleOne.css"
import "../../styles/fonts.css"



function TitleOne(props) {

  return (

    <div className="TitleOneContainer">

      <div className="TitleOneTextContainer">
        <span style={{color: props.TitleLightColor , fontWeight: 400,}}>{props.TitleLight}</span> <span style={{color: props.TitleBoldColor, fontWeight: 700,}}>{props.TitleBold}</span> <span style={{color: props.TitleLightColor, fontWeight: 400,}}>{props.TitleLightEnd}</span>
        <div className="TitlOneeLineContainer">
          <div className="TitlOneeLine" style={{ background: props.lineColor }}></div>
        </div>
      </div>

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

  );
}

export default TitleOne;