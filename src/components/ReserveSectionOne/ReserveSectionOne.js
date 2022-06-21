import React from 'react';
import ButtonOne from '../ButtonOne/ButtonOne'


import "./ReserveSectionOne.css"
import "../../styles/fonts.css"



function ReserveSectionOne(props) {

  return (

    <div className="ReserveSectionOneMainContainer">
      <img src={props.background} className="ReserveSectionOnebG"/>
      <div class="ReserveSectionOneInnerContainer">

        <div className="ReserveSectionOneTitle" style={{ color: props.Textcolor }}>{props.title}</div>
        <div className="ReserveSectionOneDescription" style={{ color: props.Textcolor }}>{props.description}</div>
        <div className="ReserveSectionOneReference" style={{ color: props.Textcolor }}>{props.reference}</div>

        <div className="DownloadButtonContainer">
          <ButtonOne
              label={props.buttonLebel}
              link={props.buttonLink}
              target={props.target}
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
          />
        </div>
      </div>
    </div>

  );
}

export default ReserveSectionOne;